import React from "react";
import './profile.css';

export default function Profile(){
    return (
        <div>
            <div>
                <img src="/images/logo.png" alt="" />
            </div>
            <div>
            <img className="profile-img" src="https://ca.slack-edge.com/T5VCY49B3-UTHS981GT-2542a518cf7f-512" alt="" />
            </div>
            <header>
	            <div className="profile-container">
                    <div className="profile">
                        <div className="profile-image">
                            <img src="hhttps://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt="" />
                        </div>

                        <div className="profile-user-settings">
                            <h1 className="profile-user-name">alan_vang</h1>
                            <button className="btn profile-edit-btn">Edit Profile</button>
                            <button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true"></i></button>
                        </div>

                        <div className="profile-stats">
                            <ul>
                                <li><span className="profile-stat-count">164</span> posts</li>
                                <li><span className="profile-stat-count">188</span> followers</li>
                                <li><span className="profile-stat-count">206</span> following</li>
                            </ul>
                        </div>

                        <div className="profile-bio">
                            <p><span className="profile-real-name">Alan Vang</span> -- Lorem ipsum dolor sit, amet consectetur adipisicing elit </p>
                            <p>Location: Charlotte, NC</p>
                            <p>Marital Status: Married</p>
                            <p>Favorite music: EDM</p>
                            <p>Favorite food: Pho</p>
                            <p>Favorite movie: The Fast and the Furious</p>
                        </div>
                    </div>{/* End of profile section */}
                </div>{/* End of container */}
            </header>
            <main>
                <div className="profile-container">
                    <div className="gallery">
                        <div className="gallery-item" >
                            <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" className="gallery-image" alt=""/>
                            <div className="gallery-item-info">
                                <ul>
                                    <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 56</li>
                                    <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 2</li>
                                </ul>
                            </div>
                        </div>

                        <div className="gallery-item" >
                            <img src="https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop" className="gallery-image" alt=""/>
                            <div className="gallery-item-info">
                                <ul>
                                    <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 89</li>
                                    <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 5</li>
                                </ul>
                            </div>
                        </div>

                        <div className="gallery-item" >
                            <img src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop" className="gallery-image" alt=""/>
                            <div className="gallery-item-type">
                                <span className="visually-hidden">Gallery</span><i className="fas fa-clone" aria-hidden="true"></i>
                            </div>
                            <div className="gallery-item-info">
                                <ul>
                                    <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 42</li>
                                    <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 1</li>
                                </ul>
                            </div>
                        </div>

                        <div className="gallery-item" >
                            <img src="https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop" className="gallery-image" alt=""/>
                            <div className="gallery-item-type">
                                <span className="visually-hidden">Video</span><i className="fas fa-video" aria-hidden="true"></i>
                            </div>
                            <div className="gallery-item-info">
                                <ul>
                                    <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 38</li>
                                    <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 0</li>
                                </ul>
                            </div>
                        </div>

                        <div className="gallery-item" >
                            <img src="https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?w=500&h=500&fit=crop" className="gallery-image" alt=""/>
                            <div className="gallery-item-type">
                                <span className="visually-hidden">Gallery</span><i className="fas fa-clone" aria-hidden="true"></i>
                            </div>
                            <div className="gallery-item-info">
                                <ul>
                                    <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 47</li>
                                    <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 1</li>
                                </ul>
                            </div>
                        </div>

                        <div className="gallery-item" >
                            <img src="https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop" className="gallery-image" alt=""/>
                            <div className="gallery-item-info">
                                <ul>
                                    <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 94</li>
                                    <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 3</li>
                                </ul>
                            </div>
                        </div>

                        <div className="gallery-item" >
                            <img src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500&h=500&fit=crop" className="gallery-image" alt=""/>
                            <div className="gallery-item-type">
                                <span className="visually-hidden">Gallery</span><i className="fas fa-clone" aria-hidden="true"></i>
                            </div>
                            <div className="gallery-item-info">
                                <ul>
                                    <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 52</li>
                                    <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 4</li>
                                </ul>
                            </div>
                        </div>

                        <div className="gallery-item" >
                            <img src="https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=500&h=500&fit=crop" className="gallery-image" alt=""/>
                            <div className="gallery-item-info">
                                <ul>
                                    <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 66</li>
                                    <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 2</li>
                                </ul>
                            </div>
                        </div>

                        <div className="gallery-item" >
                            <img src="https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=500&h=500&fit=crop" className="gallery-image" alt=""/>
                            <div className="gallery-item-type">
                                <span className="visually-hidden">Gallery</span><i className="fas fa-clone" aria-hidden="true"></i>
                            </div>
                            <div className="gallery-item-info">
                                <ul>
                                    <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 45</li>
                                    <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 0</li>
                                </ul>
                            </div>
                        </div>

                        <div className="gallery-item" >
                            <img src="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=500&h=500&fit=crop" className="gallery-image" alt=""/>
                            <div className="gallery-item-info">
                                <ul>
                                    <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 34</li>
                                    <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 1</li>
                                </ul>
                            </div>
                        </div>

                        <div className="gallery-item" >
                            <img src="https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=500&h=500&fit=crop" className="gallery-image" alt=""/>
                            <div className="gallery-item-info">
                                <ul>
                                    <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 41</li>
                                    <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 0</li>
                                </ul>
                            </div>
                        </div>

                        <div className="gallery-item" >
                            <img src="https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=500&h=500&fit=crop" className="gallery-image" alt=""/>
                            <div className="gallery-item-type">
                                <span className="visually-hidden">Video</span><i className="fas fa-video" aria-hidden="true"></i>
                            </div>
                            <div className="gallery-item-info">
                                <ul>
                                    <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 30</li>
                                    <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 2</li>
                                </ul>
                            </div>
                        </div>
                    </div>{/*  End of gallery */}
                </div> {/* End of container */}
            </main>
        </div>
    )
}