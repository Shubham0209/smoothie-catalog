# Smoothie Catalog

A simple web application built using **React** and **Supabase** to create, update, delete, and view smoothie recipes. This project serves as a catalog where users can browse, create, and manage smoothie recipes with various attributes such as title, method, and rating.

## Features
- **View Smoothies**: Display a list of smoothie recipes with the option to order them by creation date, title, or rating.
- **Create Smoothies**: Add new smoothie recipes by providing a title, method, and rating.
- **Edit Smoothies**: Modify the details of existing smoothie recipes.
- **Delete Smoothies**: Remove smoothie recipes from the catalog.
- **Error Handling**: Validates user input and displays appropriate error/success messages.

## Tech Stack
- **Frontend**: React.js
- **Backend**: Supabase (for database and authentication)
- **Styling**: Custom CSS using CSS Variables for theming and layout

## Getting Started

### Prerequisites
Make sure you have the following installed on your local machine:
- Node.js (for running React)
- npm (Node Package Manager)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/smoothie-catalog.git
   ```

2. **Navigate into the project folder**:
   ```bash
   cd smoothie-catalog
   ```

3. **Install the dependencies**:
   ```bash
   npm install
   ```

4. **Create a Supabase project**:
   - Go to [Supabase](https://supabase.io) and create a new project.
   - Set up a database table called `smoothies` with columns: `id`, `title`, `method`, and `rating`.
   - Copy the Supabase credentials (API URL and Key) from your Supabase project and add them to a `.env` file in the root of the project:
     ```bash
     REACT_APP_SUPABASE_URL=your-supabase-url
     REACT_APP_SUPABASE_ANON_KEY=your-supabase-anon-key
     ```

5. **Run the application**:
   ```bash
   npm start
   ```

   This will start the development server and open the application in your browser. You should now be able to see the smoothie catalog.

## File Structure

```
/smoothie-catalog
|-- /public
|-- /src
|   |-- /components
|   |-- /pages
|   |-- /config
|   |-- App.js
|   |-- index.js
|   |-- index.css
|-- .env
|-- package.json
|-- README.md
```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to adjust or expand on any section to suit your project's specific details!