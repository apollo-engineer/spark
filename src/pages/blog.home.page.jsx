import axios from 'axios';
import InPageNavigation, { activeTabRef } from "../components/inpage-navigation.component";
import { useEffect, useState } from 'react';
import Loader from '../components/loader.component';
import BlogPostCard from '../components/blog-post.component';
import MinimalBlogPost from '../components/nobanner-blog-post.component';
import NoDateMessage from '../components/nodata.component';

const BlogHomePage = () => {
  let [blogs, setBlogs ] = useState(null);
  let [trendingBlogs, setTrendingBlogs ] = useState(null);
  let [ pageState, setPageState ] = useState("home")

  let categories = [
    "Growth Marketing",
    "Paid Media",
    "Web Design",
    "Trends",
    "Analytcs",
    "Programming",
    "Finace",
    "web"
  ]

  const fetchLatestBlogs = () => {
    axios.get("http://localhost:3000" + "/latest-blogs")
    .then(({data}) => {
      setBlogs(data.blogs)
    })
    .catch( err => {
      console.log(err)
    })
  }

  const fetchBlogByCategory = ({ page = 1}) => {

  }

  const fetchTrendingBlogs = () => {
    axios.get("http://localhost:3000" + "/trending-blogs")
    .then(({data}) => {
      setTrendingBlogs(data.blogs)
    })
    .catch( err => {
      console.log(err)
    })
  }

  useEffect(() => {
    activeTabRef.current.click();

    if(pageState == "home") {
      fetchLatestBlogs();
    } 

    if(!trendingBlogs) {
      fetchTrendingBlogs();
    }

  }, [pageState])

  const loadBlogByCategory = (e) => {
    let category = e.target.innerText.toLowerCase();

    setBlogs(null);

    if(pageState == category) {
      setPageState("home");
      return;
    }

    setPageState(category)
  }

  return (
    <section className="h-cover flex justify-center gap-10">
      {/* Latest */}
      <div className="w-full">
        <InPageNavigation routes={[pageState, "trending"]} defaultHidden={["trending"]}>
          <>
            {
              blogs == null ? <Loader/> : 
              blogs.map((blog, i) => {
                return (

                  <div key={i}>
                  <BlogPostCard content={blog} author={blog.author.personal_info} />
                </div>
                )
              })
            }
          </>


          {
            trendingBlogs == null ? <Loader/> : 
            trendingBlogs.map((blog, i) => {
              return (

                <div key={i}>
                <MinimalBlogPost blog={blog} index={i} />
                </div>
              )
            })
          }

        </InPageNavigation>
      </div>

      {/* filter or trending */}
      <div className='min-w-[40%] lg:min-w-[400px] max-w-min border-l border-grey pl-8 pt-3 max-md:hidden'>
          <div className='flex flex-col gap-10'>
            <div>
              <h1 className='font-medium text-xl mb-8'>Stories from all interests</h1>

              <div className='flex gap-3 flex-wrap'>
                {
                  categories.map((category, i) => {
                    return (
                      <button  onClick={loadBlogByCategory} key={i} className={"tag " + (pageState === category ? " bg-black text-white " : " ")}>
                        {category}
                      </button>
                    )
                  })
                }
              </div>
            </div>
            <div>
              <h1 className='font-medium text-xl mb-8'>Trending <i className='fi fi-rr-arrow-trend-up'></i></h1>

              {
                trendingBlogs == null ? (
                  <Loader/>
                ) : (
                  trendingBlogs.length ? 
                    trendingBlogs.map((blog,  i) => {
                      return (
                        <div key={i}>
                          <MinimalBlogPost blog={blog} index={i} />
                        </div>
                      )
                    })
                    : <NoDateMessage message="No trending blogs" />
              )}
            </div>
          </div>
      </div>
    </section>
  )
}

export default BlogHomePage;