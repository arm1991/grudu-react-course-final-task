import './styles.scss';

function UserIcon({ initials }: { initials: string }) {
  return (
    <div className="user-icon">
      <span>{initials}</span>
    </div>
  );
}

export default UserIcon;
