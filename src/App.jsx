import React, { useState } from 'react';
import './App.css';

const SUBJECTS = ["Maths", "Physics", "Chemistry", "Biology", "English", "CS", "History"];

const App = () => {
  const [marks, setMarks] = useState(SUBJECTS.reduce((acc, s) => ({ ...acc, [s]: '' }), {}));
  const [showReport, setShowReport] = useState(false);

  const calculate = () => {
    const scores = Object.values(marks).map(v => parseFloat(v) || 0);
    const total = scores.reduce((a, b) => a + b, 0);
    const avg = (total / SUBJECTS.length).toFixed(1);
    
    // Find highest scoring subject
    const topSub = Object.entries(marks).reduce((a, b) => (parseFloat(b[1]) > parseFloat(a[1]) ? b : a));

    let grade = 'F';
    let color = '#ef4444';
    if (avg >= 80) { grade = 'A+'; color = '#10b981'; }
    else if (avg >= 60) { grade = 'B'; color = '#3b82f6'; }
    else if (avg >= 40) { grade = 'C'; color = '#f59e0b'; }

    return { total, avg, grade, color, topSub };
  };

  const { total, avg, grade, color, topSub } = calculate();

  return (
    <div className="app-wrapper">
      <div className="glass-container">
        <aside className="sidebar">
          <h2>Result<span>Portal</span></h2>
          <p>Precision Academic Tracking</p>
          <div className="input-list">
            {SUBJECTS.map(s => (
              <div key={s} className="glass-input">
                <label>{s}</label>
                <input 
                  type="number" 
                  value={marks[s]} 
                  onChange={e => setMarks({...marks, [s]: e.target.value})}
                  placeholder="0"
                />
              </div>
            ))}
          </div>
          <button className="analyze-btn" onClick={() => setShowReport(true)}>Analyze Performance</button>
        </aside>

        <main className={`main-display ${showReport ? 'active' : ''}`}>
          {!showReport ? (
            <div className="empty-state">
              <div className="pulse-icon">📊</div>
              <p>Ready for analysis. Enter marks to begin.</p>
            </div>
          ) : (
            <div className="report-content">
              <div className="header-stats">
                <div className="stat-card">
                  <span>GPA Grade</span>
                  <h1 style={{ color }}>{grade}</h1>
                </div>
                <div className="stat-card">
                  <span>Aggregate</span>
                  <h1>{avg}%</h1>
                </div>
              </div>

              <div className="visual-metrics">
                <div className="progress-ring-container">
                  <svg viewBox="0 0 36 36" className="circular-chart">
                    <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path className="circle" style={{ stroke: color }} strokeDasharray={`${avg}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <div className="percentage">{avg}%</div>
                </div>
                
                <div className="insights">
                  <div className="insight-item">
                    <strong>Total Score:</strong> {total} / 700
                  </div>
                  <div className="insight-item">
                    <strong>Star Subject:</strong> {topSub[0]} ({topSub[1]})
                  </div>
                  <div className={`status-badge ${parseFloat(avg) >= 40 ? 'pass' : 'fail'}`}>
                    {parseFloat(avg) >= 40 ? 'PROMOTED' : 'ACADEMIC PROBATION'}
                  </div>
                </div>
              </div>
              <button className="reset-btn" onClick={() => setShowReport(false)}>New Entry</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;