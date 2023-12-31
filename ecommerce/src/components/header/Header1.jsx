import './header.css'

const Header1 = () => {
  return (
    <div className='main'>
      <nav>
        <ul>
          <div className='left-side'>
            <li>
              <p className='hot'>Hot</p>
            </li>
            <li>
              <p> Free Express Shipping </p>
            </li>
          </div>

        </ul>
      </nav>


      <div className='right-side'>
        <ul>
          <li>face</li>
          <li>twitter</li>
          <li>inst</li>
        </ul>
      </div>



    </div>
  );
};

export default Header1;
