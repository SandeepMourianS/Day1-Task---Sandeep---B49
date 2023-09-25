// export const getBooks = async () => {
//   try {
//     axios.get("https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books")
//       .then((response) => {
//         return response.data;
//       })
//   } catch (error) {
//     console.error("Error fetching books:", error);
//     throw error; 
//   }
// };

export const getBooks = [
  {
    "id": 1,
    "author_id": 1,
    "title": "Oliver Twist",
    "author": "Charles Steren",
    "cover_image": "",
    "pages": 234,
    "releaseDate": "1839",
    "isbn": "wt345"
  },
  {
    "id": 2,
    "author_id": 1,
    "title": "Hard Times",
    "author": "Stephen King",
    "cover_image": "",
    "pages": 300,
    "releaseDate": "1854",
    "isbn": "jk654"
  },
  {
    "id": 3,
    "author_id": 3,
    "title": "Hamlet",
    "author": "William Shakesphere",
    "cover_image": "",
    "pages": 160,
    "releaseDate": "1603",
    "isbn": "po789"
  },
  {
    "id": 4,
    "author_id": 2,
    "title": "IT",
    "author": "Thomas Heven",
    "cover_image": "",
    "pages": 500,
    "releaseDate": "2017",
    "isbn": "yu098"
  },
  {
    "id": 5,
    "author_id": 4,
    "title": "Norwegian Wood",
    "author": "Jorden hil",
    "cover_image": "http://t1.gstatic.com/images?q=tbn:ANd9GcQvJJDi2mzwg9v_PlmKYL31gXIz0kvAObJak7DVFPcD_mJTIyec",
    "pages": 296,
    "releaseDate": "1987",
    "isbn": "hj846"
  },
  {
    "id": 6,
    "author_id": 4,
    "title": "Kafka on the Shore",
    "author": "Mary Mondro",
    "cover_image": "http://t0.gstatic.com/images?q=tbn:ANd9GcRHFU_j93PPsbQGqoaZJnHH6-Emk_sIxG823SkoRTL0nvdEP41f",
    "pages": 505,
    "releaseDate": "2002",
    "isbn": "op012"
  },
  {
    "id": 7,
    "author_id": 4,
    "title": "After Dark",
    "author": "Zach kane",
    "cover_image": "http://t3.gstatic.com/images?q=tbn:ANd9GcQBMNA8A19vQpNY4bkgadsLhiRUFqBKwKAA6ANrw8VEtOiPrYQJ",
    "pages": 208,
    "releaseDate": "2004",
    "isbn": "cv456"
  },
  {
    "id": 8,
    "author_id": 4,
    "title": "1Q84",
    "author": "Josheph Virutas",
    "cover_image": "http://t0.gstatic.com/images?q=tbn:ANd9GcTBQZSg-b2LFkLlt9fWndS1w8SONabDZBHf0dtdb3-bqcuKxduL",
    "pages": 928,
    "releaseDate": "2009",
    "isbn": "al207"
  }
]

export const getCustomers = () => {
  return fetch("https://dummyjson.com/users").then((res) => res.json());
};

export const getRevenue = () => {
  return fetch("https://dummyjson.com/carts").then((res) => res.json());
};

export const getInventory = () => {
  return fetch("https://dummyjson.com/products").then((res) => res.json());
};

export const getOrders = () => {
  return fetch("https://dummyjson.com/carts/1").then((res) => res.json());
};

export const getAuthor = [
  {
    "id": 1,
    "name": "Charles",
    "surname": "Dickens",
    "dob": "14/07/1980",
  },
  {
    "id": 2,
    "name": "Stephen",
    "surname": "King",
    "dob": "21/1/1988",
  },
  {
    "id": 3,
    "name": "William",
    "surname": "Shakespeare",
    "dob": "14/07/1979",

  },
  {
    "id": 4,
    "name": "Haruki",
    "surname": "Murakami",
    "dob": "14/07/1981",  
  },
  {
    "id": 5,
    "name": "Darwin",
    "surname": "Phill",
    "dob": "14/07/1973",
  },
  {
    "id": 6,
    "name": "James",
    "surname": "Cameron",
    "dob": "21/1/1978",
  },
  {
    "id": 7,
    "name": "Shane",
    "surname": "Kinwe",
    "dob": "14/07/1982",

  },
  {
    "id": 8,
    "name": "Naruto",
    "surname": "Usumaki",
    "dob": "14/07/1976",  }
]

export const getComments = async () => {
  try {
    const response = await fetch("https://dummyjson.com/comments");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};
