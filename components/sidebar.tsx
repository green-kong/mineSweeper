import { MouseEvent, useState, useEffect } from 'react';
const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const sidebarHandler = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!sidebarOpen) return;
      if (!e.target.closest('.sidemenu')) {
        setSidebarOpen(false);
      }
    };

    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, [sidebarOpen]);

  return (
    <>
      <div style={{ position: 'absolute' }}>
        <button className="sidemenu" onClick={sidebarHandler}>
          사이드
        </button>
      </div>
      <div
        className="sidemenu"
        style={{
          width: '380px',
          height: '100vh',
          backgroundColor: 'tomato',
          position: 'absolute',
          left: sidebarOpen ? '0px' : '-380px',
          transition: '300ms',
        }}
      >
        <button onClick={sidebarHandler}>사이드</button>
        <nav>
          <ul>
            <li>asd</li>
            <li>asd</li>
            <li>asd</li>
            <li>asd</li>
            <li>asd</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
