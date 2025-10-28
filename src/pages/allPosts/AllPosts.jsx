import postsData from "@/data/postsData.json";
import PostCard from "@/components/posts/postCard/PostCard.jsx";
import "./allPosts.scss";
import BackArrow from "@/components/backArrow/BackArrow.jsx";
import Title from "@/components/title/Title.jsx";

import '@/styles/animation.scss';
const AllPosts = () => {

   return (
      <div className="all-posts">
         <div className="all-posts__container">
            <div className="all-posts__page-title">
               <Title titleText={"Blog"} level={1} animated />
            </div>
            <div className="all-posts__back-arrow">
               <BackArrow />
            </div>
            <div className="all-posts__cards"  >
               {postsData.map(post => (
                  <PostCard modifier={'post-card--interactive'} key={post.id} post={post}
                  />
               ))}
            </div>


         </div>
      </div>


   );
}
export default AllPosts;