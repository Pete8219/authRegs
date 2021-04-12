import Post from '../../../components/Post'
import PostsStyles from '../../../styles/Posts.module.css'

const  PostsList = ({ data }) => {
    return (
        <div>
              <Post posts={data} />  
        </div>
    )
}


export async function getStaticProps() {
    const res = await fetch(`${process.env.SERVER}/api/posts`)
    const { data } = await res.json()
    

    if(!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            data
        },
    }

}

export default PostsList