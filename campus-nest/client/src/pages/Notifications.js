import React from 'react';
import { useNavigate } from 'react-router-dom';

function Notifications() {
  const navigate = useNavigate();

  // Example data
  const events = [
    {
      title: 'Hostel Day Celebration',
      date: '15 Oct 2025',
      desc: 'Join us for the annual hostel day celebration with cultural programs and dinner.',
      color: '#ff6f61',
    },
    {
      title: 'Room Cleaning Inspection',
      date: '20 Oct 2025',
      desc: 'Monthly room cleanliness inspection will be conducted on October 20th. Please ensure your rooms are tidy.',
      color: '#ff6f61',
    },
  ];
  const notices = [
    {
      title: 'Internet Maintenance',
      date: '12 Oct 2025',
      desc: 'Internet services will be temporarily down for maintenance on October 12th from 2:00 AM to 4:00 AM.',
      color: '#ff6f61',
    },
    {
      title: 'New Mess Menu',
      date: '01 Oct 2025',
      desc: 'Updated mess menu for the month of October is now available. Check the notice board for details.',
      color: '#19d4dd',
    },
  ];

  const handleLogout = () => {
    navigate('/');
  };

  return (
  <div style={{ minHeight: '100vh', background: '#181c20', color: '#fff' }}>
      {/* Top Navigation Bar */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#23272b', padding: '0 48px', height: '64px' }}>
        <div style={{ fontSize: '2rem', fontWeight: 700, color: '#19d4dd' }}>Campus Nest</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <span style={{ fontWeight: 600, color: '#fff' }}>Rahul Sharma</span>
          <button onClick={handleLogout} style={{ background: '#19d4dd', color: '#222', border: 'none', borderRadius: '8px', padding: '8px 18px', fontWeight: 500, cursor: 'pointer', fontSize: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>Logout</button>
        </div>
      </nav>
      {/* Tabs */}
      <div style={{ display: 'flex', gap: '8px', padding: '0 56px', marginTop: '16px' }}>
        <button style={{ background: '#23272b', color: '#888', border: 'none', borderRadius: '8px 8px 0 0', padding: '12px 32px', fontWeight: 600, fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} onClick={() => navigate('/dashboard')}>Dashboard</button>
        <button style={{ background: '#23272b', color: '#888', border: 'none', borderRadius: '8px 8px 0 0', padding: '12px 32px', fontWeight: 600, fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} onClick={() => navigate('/complaints')}>Complaints</button>
        <button style={{ background: '#23272b', color: '#19d4dd', border: 'none', borderRadius: '8px 8px 0 0', padding: '12px 32px', fontWeight: 600, fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', borderBottom: '3px solid #19d4dd' }} onClick={() => navigate('/notifications')}>Notifications</button>
      </div>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontWeight: 700, marginBottom: '32px', marginLeft: '16px' }}>Notifications & Events</h1>
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          {/* Upcoming Events */}
          <div style={{ background: '#23272b', color: '#fff', borderRadius: '16px', padding: '32px', minWidth: '340px', flex: 1, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontWeight: 700, marginBottom: '24px' }}>Upcoming Events</h2>
            {events.map((e, idx) => (
              <div key={idx} style={{ background: '#181c20', borderRadius: '12px', padding: '24px', marginBottom: '18px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ height: '10px', width: '10px', background: e.color, borderRadius: '50%', display: 'inline-block' }}></span>
                    {e.title}
                  </div>
                  <div style={{ color: '#fff', fontSize: '1rem' }}>{e.desc}</div>
                </div>
                <div style={{ color: '#888', fontWeight: 500, fontSize: '1rem', marginLeft: '24px', whiteSpace: 'nowrap' }}>{e.date}</div>
              </div>
            ))}
          </div>
          {/* Important Notices */}
          <div style={{ background: '#23272b', color: '#fff', borderRadius: '16px', padding: '32px', minWidth: '340px', flex: 1, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontWeight: 700, marginBottom: '24px' }}>Important Notices</h2>
            {notices.map((n, idx) => (
              <div key={idx} style={{ background: '#181c20', borderRadius: '12px', padding: '24px', marginBottom: '18px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ height: '10px', width: '10px', background: n.color, borderRadius: '50%', display: 'inline-block' }}></span>
                    {n.title}
                  </div>
                  <div style={{ color: '#fff', fontSize: '1rem' }}>{n.desc}</div>
                </div>
                <div style={{ color: '#888', fontWeight: 500, fontSize: '1rem', marginLeft: '24px', whiteSpace: 'nowrap' }}>{n.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
