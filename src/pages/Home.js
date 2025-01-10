import supabase from '../config/supabaseClient'
import { useEffect, useState } from 'react'

// components
import SmoothieCard from '../components/SmoothieCard'

const Home = () => {
  const [fetchError, setFetchError] = useState(null)
  const [smoothies, setSmoothies] = useState(null)
  const [deleteMessage, setDeleteMessage] = useState(null)
  const [orderBy, setOrderBy] = useState('created_at') // Default order

  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error } = await supabase
        .from('smoothies')
        .select()
        .order(orderBy, { ascending: false })

      if (error) {
        setFetchError('Could not fetch the smoothies')
        setSmoothies(null)
        console.log(error)
      }
      if (data) {
        setSmoothies(data)
        setFetchError(null)
      }
    }

    fetchSmoothies()

  }, [orderBy]) // Re-fetch smoothies whenever `orderBy` changes

  // Function to handle deletion in the state
  const handleDelete = (id) => {
    setSmoothies((prevSmoothies) => {
      return prevSmoothies.filter(smoothie => smoothie.id !== id)
    })
    setDeleteMessage('Record successfully deleted!')
    setTimeout(() => setDeleteMessage(null), 2000)
  }

  return (
    <div className="page home">
      {fetchError && (<p>{fetchError}</p>)}
      {deleteMessage && (<p className="success">{deleteMessage}</p>)}
      {smoothies && (
        <div className="smoothies">
          <div className="order-by">
            <p>Order by:</p>
            <button
              onClick={() => setOrderBy('created_at')}
              className={orderBy === 'created_at' ? 'selected' : ''}
            >
              Time Created
            </button>
            <button
              onClick={() => setOrderBy('title')}
              className={orderBy === 'title' ? 'selected' : ''}
            >
              Title
            </button>
            <button
              onClick={() => setOrderBy('rating')}
              className={orderBy === 'rating' ? 'selected' : ''}
            >
              Rating
            </button>
          </div>
          <div className="smoothie-grid">
            {smoothies.map(smoothie => (
              <SmoothieCard
                key={smoothie.id}
                smoothie={smoothie}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Home