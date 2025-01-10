import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";

const Create = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [rating, setRating] = useState('');
  const [formError, setFormError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);
    setSuccessMessage(null);

    if (!title || !method || !rating) {
      setFormError('One or more fields are missing.');
      console.log('Form error: Missing fields');
      return;
    }

    const { data, error } = await supabase
      .from('smoothies')
      .insert([{ title, method, rating }])
      .select()

    if (error) {
      console.log('Supabase error:', error);
      setFormError('There was an error inserting the data.');
      return;
    }

    if (data) {
      setSuccessMessage('Smoothie recipe successfully added!')

      // Optional: Clear input fields after success
      setTitle('')
      setMethod('')
      setRating('')

      // Redirect after a delay or navigate immediately
      setTimeout(() => navigate('/'), 2000) // Redirect after 2 seconds
    }
  }


  return (
    <div className="page create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="method">Method:</label>
        <textarea
          id="method"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        />

        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <button>Create Smoothie Recipe</button>

        {formError && <p className="error">{formError}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
      </form>
    </div>
  );
};

export default Create;
