import user from "./images/user.png";

const Profile = () => {
  return (
    <div className='profile'>
      <div className='user-info'>
        <h2 className='name'>Nayeem</h2>
        <p className='task-info'>You have 3 tasks</p>
      </div>
      <div className='user-img'>
        <img src={user} alt='User' />
      </div>
    </div>
  );
};

export default Profile;
