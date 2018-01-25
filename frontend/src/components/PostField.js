import React, { Component }  from 'react'
import '../css/layout/blog.css';
import '../css/layout/pure-min.css';
import '../css/layout/grids-responsive-min.css';

class PostField extends Component {


  render(){
    return(
            <div className="posts">
                <section className="post">
                    <header className="post-header">
                        <img width="48" height="48" alt="Eric Ferraiuolo&#x27;s avatar" className="post-avatar" src="img/common/ericf-avatar.png" />

                        <h2 className="post-title">Everything You Need to Know About Grunt</h2>

                        <p className="post-meta">
                            By <a   className="post-author">Tilo Mitra</a> under <a className="post-category post-category-design"  >CSS</a> <a className="post-category post-category-pure"  >Pure</a>
                        </p>

                    </header>

                    <div className="post-description">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                </section>

            </div>
        )
    }
}

export default PostField