const baseUrl = "https://api.github.com/search/users?q=";

export const getDataUser = async (name, filter, pageNumber) => {
    if (filter === "default") {
        const response = await fetch(
            `${baseUrl}${name}+in:login&per_page=22&page=${pageNumber}`,
            {
              headers: {
                "content-type": "application/vnd.github+json",
              },
            },
          );
          const users = await response.json();
          return users; 
    }

    if (filter === "asc") {
        const response = await fetch(
            `${baseUrl}${name}+in:login&per_page=22&sort=repositories&order=asc&page=${pageNumber}`,
            {
              headers: {
                "content-type": "application/vnd.github+json",
              },
            },
          );
          const users = await response.json();
          return users; 
    }

    if (filter === "desc") {
        const response = await fetch(
            `${baseUrl}${name}+in:login&per_page=22&sort=repositories&order=desc&page=${pageNumber}`,
            {
              headers: {
                "content-type": "application/vnd.github+json",
              },
            },
          );
          const users = await response.json();
          return users; 
    }
 
};

export const getSortDataUser = async (name, sortValue) => {
  const response = await fetch(
    `${baseUrl}${name}+in:login&sort=repositories&order=${sortValue}`,
    {
      headers: {
        "content-type": "application/vnd.github+json",
      },
    },
  );
  const users = await response.json();
  return users;
};
