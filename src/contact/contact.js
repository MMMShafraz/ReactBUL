import deniyawatta from '../Screenshot 2023-01-25 222157.png';
import email from '../Screenshot 2023-01-25 222301.png';
import num from '../Screenshot 2023-01-25 222432.png';

function contact(props) {
    return (
        <div>
            <body>
              <section class="section">
                    <h1 class="title">Contact Me</h1>
                    <h2 class="subtitle">
                      <p><img src={deniyawatta}></img><br></br><b className='about'>deniyawatta</b></p><br></br>
                      <p><img src={email}></img><b className='about'>mshafraz0112@gmail.com</b></p><br></br>
                      <p><img src={num}></img><b className='about'>+94771237547</b></p>
                    </h2>
              </section>
            </body>
        </div>
        );
}

export default contact;