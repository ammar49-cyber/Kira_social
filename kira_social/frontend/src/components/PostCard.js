import { motion } from "framer-motion";

export default function PostCard({post, handleLike}){
  return (
    <motion.div layout whileHover={{scale:1.02}} style={{marginBottom:20,background:"#1E1E2F",padding:10,borderRadius:10}}>
      <h3 style={{color:"white"}}>{post.title}</h3>
      <video src={post.url} controls style={{width:"100%",borderRadius:10}}/>
      <motion.button whileTap={{scale:1.5}} onClick={()=>handleLike(post._id)} style={{marginTop:10}}>
        ❤️ {post.likes}
      </motion.button>
    </motion.div>
  );
}
