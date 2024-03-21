import React,{useState , useEffect} from "react"
import './App.css'


export default function Home() {

    const [shortUrls, setShortUrls] = useState([]);

        useEffect(() => {
        
            fetch('https://task-sandeep-b49-10.onrender.com')
            .then((response) => response.json())
            .then((data) => setShortUrls(data));
        }, []);

        const [fullUrl, setFullUrl] = useState('');

        const handleDelete = (e) => {
          e.preventDefault();
      
          // Send a POST request to the server
          fetch('https://task-sandeep-b49-10.onrender.com/:shortUrl', {
            method: 'DELETE'
          })
          .then((response) => {
            if (response.status === 200) {
              // Redirect to the homepage or perform any desired action
              window.location.href = '/';
            }
          }
    )
          .catch((error) => {
            console.error('Error:', error);
          });
      };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to the server
    fetch('https://task-sandeep-b49-10.onrender.com/shortUrls', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fullUrl }),
    })
      .then((response) => {
        if (response.status === 200) {
          // Redirect to the homepage or perform any desired action
          // window.location.href = '/';
        }
      }
)
      .catch((error) => {
        console.error('Error:', error);
      });
  };
    return (
        <center>
                      <h1>URL Shortener</h1>
        <div className="container">
            <form onSubmit={handleSubmit} className="my-4 form-inline">
                <label htmlFor="fullUrl" className="sr-only">
                Full URL:</label>
                <input 
                    required 
                    placeholder="Paste your Url here..." 
                    type="url"
                    className="form-control col mr-2"
                    value={fullUrl}
                    onChange={(e) => setFullUrl(e.target.value)}
                />
                
                <button className="btn btn-success" type="submit">Short</button>
            </form>

            <table className="table table-striped table-responsive">
                <thead>
                    <tr>
                        <th>Full URL</th>
                        <th>Short URL</th>
                    </tr>
                </thead>
                <tbody>
                   { shortUrls && shortUrls.map((shortUrl) => (
                    <tr>
                        <td><a href={shortUrl.full} target="_blank"> {shortUrl.full} </a></td>
                        <td><a href= {shortUrl.full} target="_blank"> {shortUrl.short} </a></td>
                    </tr>
                    ))
                   }
                </tbody>
            </table>
        </div>
        </center>
    );
}
