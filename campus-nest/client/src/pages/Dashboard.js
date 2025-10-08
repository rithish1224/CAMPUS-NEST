import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  // Example data (replace with real data from backend)
  const student = {
    name: 'Rahul Sharma',
    studentId: 'STU001',
    room: 'A-101',
    lastLogin: '08 Oct 2025, 08:42 pm',
    checkIn: '15 July 2025',
    email: 'rahul.sharma@college.edu',
    phone: '+91-9876543210',
  };
  const stats = {
    total: 2,
    pending: 0,
    resolved: 1,
  };

  return (
    <div style={{ minHeight: '100vh', background: '#181c20', color: '#fff' }}>
      {/* Top Navigation Bar */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#23272b', padding: '0 48px', height: '64px' }}>
        <div style={{ fontSize: '2rem', fontWeight: 700, color: '#19d4dd' }}>Campus Nest</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <span style={{ fontWeight: 600 }}>Rahul Sharma</span>
          <button style={{ background: '#19d4dd', color: '#222', border: 'none', borderRadius: '8px', padding: '8px 18px', fontWeight: 500, cursor: 'pointer', fontSize: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>Logout</button>
        </div>
      </nav>
      {/* Tabs */}
      <div style={{ display: 'flex', gap: '8px', padding: '0 56px', marginTop: '16px' }}>
        <button style={{ background: '#23272b', color: '#19d4dd', border: 'none', borderRadius: '8px 8px 0 0', padding: '12px 32px', fontWeight: 600, fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', borderBottom: '3px solid #19d4dd' }} onClick={() => navigate('/dashboard')}>Dashboard</button>
        <button style={{ background: '#23272b', color: '#888', border: 'none', borderRadius: '8px 8px 0 0', padding: '12px 32px', fontWeight: 600, fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} onClick={() => navigate('/complaints')}>Complaints</button>
        <button style={{ background: '#23272b', color: '#888', border: 'none', borderRadius: '8px 8px 0 0', padding: '12px 32px', fontWeight: 600, fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} onClick={() => navigate('/notifications')}>Notifications</button>
      </div>
      {/* Main Content */}
      <div style={{ padding: '32px 56px' }}>
        <h1 style={{ fontWeight: 700, marginBottom: '32px' }}>Student Dashboard</h1>
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          {/* Personal Info Card */}
          <div style={{ background: '#23272b', borderRadius: '16px', padding: '32px', minWidth: '340px', flex: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontWeight: 700, marginBottom: '24px' }}>Personal Information</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
              <div>
                <div style={{ marginBottom: '16px' }}><span style={{ color: '#888', fontSize: '1.2rem' }}>Name:</span><br /><span style={{ fontWeight: 600, fontSize: '1.3rem' }}>{student.name}</span></div>
                <div style={{ marginBottom: '16px' }}><span style={{ color: '#888', fontSize: '1.2rem' }}>Room Number:</span><br /><span style={{ fontWeight: 600, fontSize: '1.3rem' }}>{student.room}</span></div>
                <div style={{ marginBottom: '16px' }}><span style={{ color: '#888', fontSize: '1.2rem' }}>Check-in Date:</span><br /><span style={{ fontWeight: 600, fontSize: '1.3rem' }}>{student.checkIn}</span></div>
                <div style={{ marginBottom: '16px' }}><span style={{ color: '#888', fontSize: '1.2rem' }}>Phone:</span><br /><span style={{ fontWeight: 600, fontSize: '1.3rem' }}>{student.phone}</span></div>
              </div>
              <div>
                <div style={{ marginBottom: '16px' }}><span style={{ color: '#888', fontSize: '1.2rem' }}>Student ID:</span><br /><span style={{ fontWeight: 600, fontSize: '1.3rem' }}>{student.studentId}</span></div>
                <div style={{ marginBottom: '16px' }}><span style={{ color: '#888', fontSize: '1.2rem' }}>Last Login:</span><br /><span style={{ fontWeight: 600, fontSize: '1.3rem' }}>{student.lastLogin}</span></div>
                <div style={{ marginBottom: '16px' }}><span style={{ color: '#888', fontSize: '1.2rem' }}>Email:</span><br /><span style={{ fontWeight: 600, fontSize: '1.3rem' }}>{student.email}</span></div>
              </div>
            </div>
          </div>
          {/* Quick Stats Card */}
          <div style={{ background: '#23272b', borderRadius: '16px', padding: '32px', minWidth: '260px', flex: 1, boxShadow: '0 2px 8px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
            <h2 style={{ fontWeight: 700, marginBottom: '24px' }}>Quick Stats</h2>
            <div style={{ background: '#181c20', borderRadius: '12px', width: '100%', padding: '24px', textAlign: 'center', marginBottom: '8px' }}>
              <div style={{ color: '#19d4dd', fontSize: '2.2rem', fontWeight: 700 }}>{stats.total}</div>
              <div style={{ color: '#fff', fontWeight: 500, fontSize: '1.1rem', marginTop: '6px' }}>Total Complaints</div>
            </div>
            <div style={{ background: '#181c20', borderRadius: '12px', width: '100%', padding: '24px', textAlign: 'center', marginBottom: '8px' }}>
              <div style={{ color: '#19d4dd', fontSize: '2.2rem', fontWeight: 700 }}>{stats.pending}</div>
              <div style={{ color: '#fff', fontWeight: 500, fontSize: '1.1rem', marginTop: '6px' }}>Pending</div>
            </div>
            <div style={{ background: '#181c20', borderRadius: '12px', width: '100%', padding: '24px', textAlign: 'center' }}>
              <div style={{ color: '#19d4dd', fontSize: '2.2rem', fontWeight: 700 }}>{stats.resolved}</div>
              <div style={{ color: '#fff', fontWeight: 500, fontSize: '1.1rem', marginTop: '6px' }}>Resolved</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
