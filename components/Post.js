import { Card } from 'semantic-ui-react'
import Link from 'next/link'
import PostsStyles from '../styles/Posts.module.css'

export default function Post({posts}) {
  console.log(posts)
    return (
        <div className={PostsStyles.postsContainer}>
        
        {posts.map((post) => {
                    return (
                            <Link href='/admin/posts/[id]' as = {`/admin/posts/${post._id}`}>
                              
                                <Card>
                                  <Card.Content header={post.title}/>
                                  <Card.Content description = {post.body} /> 
                                </Card>
                            </Link>
                     
                      
                           )
                }
                )}
              
    
        </div>
    )
}
