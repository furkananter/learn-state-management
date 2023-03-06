import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers, selectUserById } from './usersSlice'
import { selectAllPosts } from '../posts/postsSlice'
import { Link } from 'react-router-dom'

const UserPage = ({ match }) => {
  const { userId } = match.params

  const user = useSelector((state) => selectUserById(state, userId))

  const postForUser = useSelector((state) => {
    const allPosts = selectAllPosts(state) // burada tüm postları alıyoruz.
    return allPosts.filter((post) => post.user === userId) // burada da tüm postları dolaşıp, userId ile eşleşenleri alıyoruz.
  })

  const postTitles = postForUser.map((post) => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ))

  return (
    <section>
      <h2>{user.name}</h2>c
      <ul>{postTitles}</ul>
    </section>
  )
}

export default UserPage
