import React from "react";
import "../style/Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("BCCI selectors believe Virat Kohli unable to cope with Team India's demands, harsh call likely for T20 World Cup",  "Top news - 886 reader")}
      {newsArticle("Ramadan 2024: Wishes, messages and images to share with loved ones", "Festivals - 886 reader")}
      {newsArticle("Government launches new portal for CAA", "India News - 8000 reader")}
      {newsArticle("JavaScript Mastery", "Code - 120000 reader")}
      {newsArticle("Ed Sheeran visits school in Mumbai ahead of concert, sings with students", "Entertainment news - 120000 reader")}
      {newsArticle("CBSE Class 10 Science Exam 2024: Difficulty level easy to moderate, balanced paper, say students", "Education - 300 reader")}
    </div>
  );
};

export default Widgets;