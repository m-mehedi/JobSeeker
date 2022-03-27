import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import styled from 'styled-components'

const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <img src={logo} alt='Job Seeker' className='logo' />
        </nav>
        <div className='container page'>
            <div className="info">
                <h1>Job <span>Seeker</span> App</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas pariatur, animi fuga adipisci perferendis aut itaque sit doloremque tenetur quaerat dolorem quidem a temporibus deleniti enim laborum similique voluptatibus vero.</p>
                <button className='btn btn-hero'>
                    Login/Register
                </button>            
            </div>
        <img src={main} alt="Seek Jobs" className='img main-img' />
        </div>
        
    </Wrapper>
  )
}

const Wrapper = styled.main`
    nav{
        width: var(--fluid-width);
        max-width: var(--max-width);
        margin: 0 auto;
        height: var(--nav-height);
        display: flex;
        align-items: center;
    }
    .page{
        min-height: calc(100vh - var(--nav-height));
        display: grid;
        align-items: center;
        margin-top: -3rem;
    }
    h1{
        font-weight: 700;
        span{
            color: var(--primary-500);
        }
    }
    p{
        color: var(--grey-600);
    }
    .main-img{
        display: none;
    }

    @media (min-width:992px){
        .page{
            grid-template-columns: 1fr 1fr;
            column-gap: 3rem;
        }
        .main-img{
            display: block;
        }
    }

`

export default Landing