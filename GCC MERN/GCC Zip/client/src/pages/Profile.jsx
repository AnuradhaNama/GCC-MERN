import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import './Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [marks, setMarks] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/profile", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await response.json();
        if (response.ok) {
          setProfile(data.user);
          setMarks(data.user.marks || 0);
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        navigate("/login");
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("profilePic", file);

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/auth/uploadProfilePic", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setProfile((prev) => ({ ...prev, profilePic: data.profilePicUrl }));
        alert("Profile picture uploaded successfully!");
      } else {
        console.error("Failed to upload profile picture:", data.message);
        alert("Failed to upload profile picture.");
      }
    } catch (error) {
      console.error("Error uploading profile picture:", error);
      alert("An error occurred while uploading the profile picture.");
    }
  };

  const downloadProfile = async () => {
    const profileSection = document.querySelector(".profile-container");
    const canvas = await html2canvas(profileSection);
    const pdf = new jsPDF();
    const imgData = canvas.toDataURL("image/png");
    pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
    pdf.save(`${profile.name}_profile.pdf`);
  };

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="profile-container">
      <div className="profile-header">Student Info</div>

      {/* Profile Picture Section */}
      <div className="profile-pic-section">
        <img
          src={profile.profilePic || "/default-avatar.png"}
          alt="Profile Pic"
          className="profile-pic"
        />
        {!profile.profilePic && (
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="profile-pic-input"
          />
        )}
      </div>

      {/* Name and Roll Number */}
      <div className="profile-highlight">
        <div><strong>Name:</strong> {profile.name}</div>
        <div><strong>Roll Number:</strong> {profile.rollno}</div>
      </div>

      {/* Exam Slot Selection */}
      {profile.examSlot && (
        <div className="profile-row">
          <div className="profile-cell"><strong>Selected Exam Slot:</strong></div>
          <div className="profile-cell">{`${profile.examSlot.date} - ${profile.examSlot.time}`}</div>
        </div>
      )}

      {/* General Profile Information */}
      <div className="profile-table">
        <div className="profile-row">
          <div className="profile-cell"><strong>Father Name:</strong></div>
          <div className="profile-cell">{profile.fatherName}</div>
        </div>
        <div className="profile-row">
          <div className="profile-cell"><strong>College:</strong></div>
          <div className="profile-cell">{profile.college}</div>
        </div>
        <div className="profile-row">
          <div className="profile-cell"><strong>Branch:</strong></div>
          <div className="profile-cell">{profile.branch}</div>
        </div>
        <div className="profile-row">
          <div className="profile-cell"><strong>Gender:</strong></div>
          <div className="profile-cell">{profile.gender}</div>
        </div>
        <div className="profile-row">
          <div className="profile-cell"><strong>Date of Birth:</strong></div>
          <div className="profile-cell">{profile.dob}</div>
        </div>
        <div className="profile-row">
          <div className="profile-cell"><strong>Marks:</strong></div>
          <div className="profile-cell">{marks}</div>
        </div>
      </div>

      {/* Download Button */}
      <button className="download-btn" onClick={downloadProfile}>
        Download Profile
      </button>
    </div>
  );
};

export default Profile;
