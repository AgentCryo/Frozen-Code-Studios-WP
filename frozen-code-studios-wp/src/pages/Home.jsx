export const Home = () => {
  return (
    <>
      <div className='main-content'>
        <div className='video-container'>
          <video
            width='100%'
            height='100%'
            controls='auto'
            style={{ objectFit: 'cover' }}
          >
            <source src='/videos/frozen-code-studios.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>



        </div>

      </div>
    </>
  );
};

export default Home;
