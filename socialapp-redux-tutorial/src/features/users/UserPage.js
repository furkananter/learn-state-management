import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers, selectUserById } from './usersSlice'
import { selectAllPosts } from '../posts/postsSlice'
import { Link } from 'react-router-dom'

export const UserPage = ({ match }) => {
  //--------------------------------------------------------------------------------------------------------------
  // match.params.userId ile url'deki userId parametresini alıyoruz.
  //--------------------------------------------------------------------------------------------------------------
  const { userId } = match.params

  //--------------------------------------------------------------------------------------------------------------
  // user bilgilerini alıyoruz. bu bilgileri const user adındaki bir değişkene atıyoruz.
  // bu bilgileri almak için tekil olarak seçiyoruz. tekil olarak seçmek için selectUserById fonksiyonunu kullanıyoruz.
  // selectUserById fonksiyonu, state ve userId parametrelerini alıyor. state parametresi, store'daki state'i temsil ediyor.
  // userId parametresi ise, kullanıcının id'sini temsil ediyor.
  // bu fonksiyon, store'daki state'i dolaşıp, userId ile eşleşen kullanıcıyı buluyor ve onu döndürüyor.
  // bu fonksiyonu kullanarak, store'daki state'i dolaşmamıza gerek kalmıyor.
  //--------------------------------------------------------------------------------------------------------------

  const user = useSelector((state) => selectUserById(state, userId))

  //--------------------------------------------------------------------------------------------------------------
  // post bilgilerini alıyoruz. bu bilgileri const postForUser adındaki bir değişkene atıyoruz.
  // bu bilgileri almak için çoklu olarak seçiyoruz. çoklu olarak seçmek için selectAllPosts fonksiyonunu kullanıyoruz.
  // selectAllPosts fonksiyonu, state parametresini alıyor. state parametresi, store'daki state'i temsil ediyor.
  // bu fonksiyon, store'daki state'i dolaşıp, tüm postları buluyor ve onları döndürüyor.
  // burada, tüm postları alıyoruz. daha sonra, bu postları dolaşıp, userId ile eşleşenleri alıyoruz.
  // -------------------------------------------------------------------------------------------------------------
  const postForUser = useSelector((state) => {
    const allPosts = selectAllPosts(state) // burada tüm postları alıyoruz.
    return allPosts.filter((post) => post.user === userId) // burada da tüm postları dolaşıp, userId ile eşleşenleri alıyoruz.
  })

  //--------------------------------------------------------------------------------------------------------------
  // postForUser değişkenindeki postları dolaşıp, her bir post için bir <li> elemanı oluşturuyoruz.
  // bu <li> elemanlarını, postTitles adındaki bir değişkene atıyoruz.
  // bu <li> elemanlarının içinde, post'un id'sini ve post'un title'ını kullanarak bir <Link> elemanı oluşturuyoruz.
  // bu <Link> elemanının içinde, post'un title'ını yazıyoruz.
  // bu <Link> elemanının href özelliğine ise, /posts/:postId şeklinde bir değer atıyoruz.
  // bu değer, post'un id'sini temsil ediyor.
  // bu <Link> elemanının href özelliğine atadığımız değer, /posts/:postId şeklinde bir değer.
  // bu değer, post'un id'sini temsil ediyor.
  // bu değer, /posts/:postId şeklinde bir değer olduğu için, /posts/:postId şeklinde bir route tanımlamamız gerekiyor.
  // bu route tanımlamasını, src/App.js dosyasında yapıyoruz.
  //--------------------------------------------------------------------------------------------------------------

  const postTitles = postForUser.map((post) => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ))

  return (
    <section>
      <h2>{user.name}</h2>
      <ul>{postTitles}</ul>
    </section>
  )
}
