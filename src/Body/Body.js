import './Body.scss';
import hurrySummary from "../assets/images/hurry's-summary.png";
import lockIcon from "../svg/lock.svg";
import AudioPlayer from './AudioPlayer/AudioPlayer';
import playBook from '../assets/images/play-book.png';

const Body = () => {

    return (
        <>
            <section className='bg-light'>
                <div className="container">
                    <section className='summary'>
                        <div className='pt-5 pb-5 summary__container'>
                            <div className='row align-items-center'>
                                <div className='col-lg-2'>
                                    <div>
                                        <img src={hurrySummary} className='w-100 mb-md-3' />
                                    </div>
                                </div>
                                <div className='col-lg-10'>
                                    <div className='ps-lg-5'>
                                        <h2>Astrophysics for People in a Hurry's Summary</h2>
                                        <p>Key Insights & Analysis</p>
                                        <p className='text-muted'>kelly Brogan, MD with Kristin Loberg</p>
                                        <div className='pt-2 pb-4 summary__functions'>
                                            <div class="d-lg-flex" id="list-tab" role="tablist">
                                                <a>
                                                    <div class="dropdown">
                                                    <button class="dropbtn"><i class="fa fa-file-text-o me-2" aria-hidden="true"></i>18 min read</button>
                                                    </div>
                                                </a>
                                                <a>
                                                    <div class="dropdown">
                                                    <button class="dropbtn"><i class="fa fa-headphones me-2" aria-hidden="true"></i>14 min listen</button>
                                                    </div>
                                                </a>
                                                <a>
                                                    <div class="dropdown">
                                                    <button class="dropbtn"><i class="fa fa-bookmark-o me-2" aria-hidden="true"></i>Add to Library</button>
                                                    </div>
                                                </a>
                                                <a>
                                                    <div class="dropdown">
                                                    <button class="dropbtn"><i class="fa fa-shopping-cart me-2" aria-hidden="true"></i>Buy Book</button>
                                                    <div class="dropdown-content disable">
                                                        <a href="#"><img src={playBook} style={{width: '20px', margin: '0 4px 0 0'}} />Google Books</a>
                                                    </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='grey-btn'>Business & Finanace</button>
                                            <button className='grey-btn ms-2'>Business & Finanace</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                </div>
            </section>
            <section>
                <div className='container'>
                     <div className='summary__overview'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <div class="d-flex" id="list-tab" role="tablist">
                                            <a class="overview-tab list-group-item-action active" id="list-summary-list" data-toggle="list" href="#" role="tab" aria-controls="summary">Summary <img src={lockIcon} className='ms-2' /></a>
                                            <a class="overview-tab list-group-item-action" id="list-insights-list" data-toggle="list" href="#" role="tab" aria-controls="insights">Insights</a>
                                            <a class="overview-tab list-group-item-action" id="list-quotes-list" data-toggle="list" href="#" role="tab" aria-controls="quotes">Quotes</a>
                                            <a class="overview-tab list-group-item-action" id="list-community-list" data-toggle="list" href="#" role="tab" aria-controls="community">Community</a>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div>

                                        <div class="tab-content pt-4" id="nav-tabContent">
                                            <div class="tab-pane fade show active" id="list-summary" role="tabpanel" aria-labelledby="list-summary-list">
                                                <div>
                                                    <h3>Overview</h3>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="list-insights" role="tabpanel" aria-labelledby="list-insights-list">2</div>
                                            <div class="tab-pane fade" id="list-quotes" role="tabpanel" aria-labelledby="list-quotes-list">3</div>
                                            <div class="tab-pane fade" id="list-community" role="tabpanel" aria-labelledby="list-community-list">4</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='bg-light p-5'>
                                        <AudioPlayer />
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
           
        </>
    )
}
export default Body