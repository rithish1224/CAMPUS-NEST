import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Complaints() {
  const navigate = useNavigate();
  // Example complaints data
  const [complaints, setComplaints] = useState([
    {
      title: 'Wi-Fi connectivity issues',
      category: 'Internet',
      priority: 'High',
      status: 'IN PROGRESS',
      submitted: '06 Oct 2025, 02:30 pm',
      description: 'Internet connection is very slow in room A-101, especially during evening hours. This is affecting my online classes and assignments submission.',
    },
    {
      title: 'Bathroom tap leaking',
      category: 'Maintenance',
      priority: 'Medium',
      status: 'RESOLVED',
      submitted: '02 Oct 2025, 10:15 am',
      description: 'The tap in bathroom is continuously leaking water. It\'s causing water wastage and making noise throughout the night.',
    },
  ]);

  // Form state
  const [form, setForm] = useState({
    title: '',
    category: '',
    priority: '',
    description: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.title && form.category && form.priority && form.description) {
      setComplaints([
        {
          ...form,
          status: 'PENDING',
          submitted: new Date().toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
        },
        ...complaints,
      ]);
      setForm({ title: '', category: '', priority: '', description: '' });
    }
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
        <button style={{ background: '#23272b', color: '#888', border: 'none', borderRadius: '8px 8px 0 0', padding: '12px 32px', fontWeight: 600, fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} onClick={() => navigate('/dashboard')}>Dashboard</button>
        <button style={{ background: '#23272b', color: '#19d4dd', border: 'none', borderRadius: '8px 8px 0 0', padding: '12px 32px', fontWeight: 600, fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', borderBottom: '3px solid #19d4dd' }} onClick={() => navigate('/complaints')}>Complaints</button>
        <button style={{ background: '#23272b', color: '#888', border: 'none', borderRadius: '8px 8px 0 0', padding: '12px 32px', fontWeight: 600, fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} onClick={() => navigate('/notifications')}>Notifications</button>
      </div>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontWeight: 700, marginBottom: '32px', marginLeft: '16px' }}>Complaints Management</h1>
        <div style={{ background: '#23272b', borderRadius: '16px', padding: '32px', marginBottom: '32px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontWeight: 700, marginBottom: '24px' }}>Submit New Complaint</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', gap: '24px', marginBottom: '18px' }}>
              <div style={{ flex: 1 }}>
                <label style={{ color: '#fff', fontWeight: 500, marginBottom: '6px', display: 'block' }}>Title</label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Brief description of the issue"
                  style={{ width: '100%', padding: '14px', borderRadius: '8px', border: 'none', background: '#181c20', color: '#fff', fontSize: '1rem', marginBottom: '2px', boxSizing: 'border-box' }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ color: '#fff', fontWeight: 500, marginBottom: '6px', display: 'block' }}>Category</label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '14px', borderRadius: '8px', border: 'none', background: '#181c20', color: '#fff', fontSize: '1rem', marginBottom: '2px', boxSizing: 'border-box' }}
                >
                  <option value="">Select category</option>
                  <option value="Internet">Internet</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Food">Food</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div style={{ marginBottom: '18px' }}>
              <label style={{ color: '#fff', fontWeight: 500, marginBottom: '6px', display: 'block' }}>Priority</label>
              <select
                name="priority"
                value={form.priority}
                onChange={handleChange}
                style={{ width: '100%', padding: '14px', borderRadius: '8px', border: 'none', background: '#181c20', color: '#fff', fontSize: '1rem', marginBottom: '2px', boxSizing: 'border-box' }}
              >
                <option value="">Select priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
            <div style={{ marginBottom: '24px' }}>
              <label style={{ color: '#fff', fontWeight: 500, marginBottom: '6px', display: 'block' }}>Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Detailed description of the issue"
                rows={4}
                style={{ width: '100%', padding: '14px', borderRadius: '8px', border: 'none', background: '#181c20', color: '#fff', fontSize: '1rem', marginBottom: '2px', boxSizing: 'border-box' }}
              />
            </div>
            <button type="submit" style={{ width: '100%', padding: '16px', borderRadius: '8px', border: 'none', background: '#19d4dd', color: '#222', fontWeight: 600, fontSize: '1.1rem', cursor: 'pointer', marginTop: '8px', transition: 'background 0.2s' }}>
              Submit Complaint
            </button>
          </form>
        </div>
        <div style={{ background: '#23272b', borderRadius: '16px', padding: '32px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontWeight: 700, marginBottom: '24px' }}>My Complaints</h2>
          {complaints.length === 0 ? (
            <div style={{ color: '#888', fontSize: '1.1rem' }}>No complaints submitted yet.</div>
          ) : (
            complaints.map((c, idx) => (
              <div key={idx} style={{ background: '#181c20', borderRadius: '12px', padding: '24px', marginBottom: '18px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div style={{ fontWeight: 700, fontSize: '1.3rem' }}>{c.title}</div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ background: c.priority === 'High' ? '#d9534f' : c.priority === 'Medium' ? '#f0ad4e' : '#5bc0de', color: '#fff', borderRadius: '8px', padding: '6px 16px', fontWeight: 600, fontSize: '1rem' }}>{c.priority}</span>
                    <span style={{ background: c.status === 'RESOLVED' ? '#19d4dd' : c.status === 'IN PROGRESS' ? '#f0ad4e' : '#888', color: c.status === 'RESOLVED' ? '#222' : '#fff', borderRadius: '8px', padding: '6px 16px', fontWeight: 600, fontSize: '1rem' }}>{c.status}</span>
                  </div>
                </div>
                <div style={{ color: '#888', fontSize: '1rem', marginBottom: '8px' }}>
                  <span>Category: {c.category}</span> &nbsp; <span>Submitted: {c.submitted}</span>
                </div>
                <div style={{ fontSize: '1.1rem', color: '#fff' }}>{c.description}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Complaints;
