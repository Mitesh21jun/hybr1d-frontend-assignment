import React,{useState,useEffect} from 'react'
import { search_post } from '../service/service'

const News = () => {

    const [posts, setPosts] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const fetchPosts = async (query) => {
        try {
            const response = await search_post({query:query})
            console.log(response)
        } catch (error) {
            console.log(error)
            alert("Something went wrong, Check the console for details")
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchPosts('tesla')
    }, []);

    return (
      


      <div className='container'>
          


    </div>
  )
}

export default News