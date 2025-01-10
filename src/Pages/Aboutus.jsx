import { Link } from "react-router-dom";
import { AboutWrapper } from "../Styles/Aboutus-Style";


function Aboutus() {
    return(
        <>
            <AboutWrapper>
                <div className="wrapper_inner">
                    <div className="about_sec">
                        <div className="sec_head">
                            <h3>About <span>Us</span></h3>
                        </div>
                          
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse incidunt culpa id vitae magni minima corporis, vero quam. Minima, molestiae dolor. Nam voluptates, facilis atque recusandae vero sed! Inventore, excepturi, quasi molestias fugit ipsam unde cumque harum fuga nisi vero aliquam adipisci omnis repudiandae libero recusandae. Nihil corrupti non labore, sit voluptates numquam velit magni temporibus magnam. Omnis alias iste, deleniti culpa suscipit beatae distinctio, adipisci expedita ipsam error ipsa necessitatibus. Exercitationem accusamus odio sint, reprehenderit provident omnis molestias. Quaerat eligendi fugiat, praesentium accusantium a quo consequatur pariatur sequi expedita numquam laudantium ut, suscipit dolor? Optio ad dignissimos tenetur fugit!<br/>
                            <br />
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas illum expedita assumenda deleniti reiciendis voluptate dolores ad? Ratione sequi consequatur quis non quaerat consequuntur molestias corrupti maiores et fugit similique, debitis corporis aliquam velit ipsum necessitatibus magni? Iusto dolor in eius quam voluptates molestias labore explicabo doloremque, maxime tenetur quia. At quaerat corporis consequuntur debitis non aperiam, natus sapiente iure aut nesciunt soluta dolore vero distinctio tempora quo autem recusandae culpa consequatur sunt porro qui, illum amet? Blanditiis, eum accusamus. Ipsa mollitia quam quidem nostrum, impedit rem totam veniam optio, quisquam unde placeat iste doloremque fugit repellat quis natus consectetur. <br />
                            <br />
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus corporis, neque quisquam odit dolorum laudantium quas, distinctio voluptates minus totam rerum laboriosam minima doloremque? Alias, optio consequuntur ut explicabo, labore illum aspernatur hic ad molestias dolores rerum voluptatibus illo ea deserunt asperiores laudantium beatae in sunt tempore enim et itaque voluptates natus quibusdam? Voluptatibus, in? Tempora recusandae, qui, alias dolores totam dicta eius facere ipsam fugiat repudiandae delectus. Obcaecati, inventore! Sit nam accusantium recusandae incidunt rem at atque eum cum debitis, sequi odio in eius enim optio omnis facere repellendus qui facilis dolor fuga. Rem consectetur facere ullam commodi a.
                            </p>
                        </div>
                    </div>

                    <div className="feature_sec">
                        <div className="sec_head">
                            <h3>Our <span>Features</span></h3>
                        </div>
                        <div className="mainbody">
                            <div className="container">
                                <div className="card">
                                    <div className="box">
                                        <div className="content">
                                            <h3>Sustainablity</h3>
                                            <div className="img_box">
                                                <img src="images/sustainability.svg" alt="image" />
                                            </div>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores culpa suscipit hic, voluptatum quos nesciunt, modi ut eius doloribus corrupti alias delectus consectetur incidunt facilis placeat asperiores iste veritatis ullam.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="box">
                                        <div className="content">
                                            <h3>First Delivary</h3>
                                            <div className="img_box">
                                                <img src="images/delivary.svg" alt="image" />
                                            </div>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores culpa suscipit hic, voluptatum quos nesciunt, modi ut eius doloribus corrupti alias delectus consectetur incidunt facilis placeat asperiores iste veritatis ullam.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="box">
                                        <div className="content">
                                            <h3>Quick Trasation</h3>
                                            <div className="img_box">
                                                <img src="images/payment.svg" alt="image" />
                                            </div>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores culpa suscipit hic, voluptatum quos nesciunt, modi ut eius doloribus corrupti alias delectus consectetur incidunt facilis placeat asperiores iste veritatis ullam.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </AboutWrapper>
        </>
    );
}

export default Aboutus;