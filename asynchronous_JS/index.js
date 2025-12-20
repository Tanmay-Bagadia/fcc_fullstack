// fetch("https://apis.scrimba.com/dog.ceo/api/breeds/image/random")
//   .then((response) => response.json())
//   .then((data) => {
//     // console.log(data);
//     const imageEl = document.createElement("img");
//     imageEl.src = data.message;
//     imageEl.alt = "random dog picture";
//     document.getElementById("img-container").appendChild(imageEl);
//   });
// async function getSuggestion() {
//   const response = await fetch("https://apis.scrimba.com/bored/api/activity");
//   const data = await response.json();
//   console.log(data);
// }

// getSuggestion();

// fetch("https://apis.scrimba.com/dog.ceo/api/breeds/image/random")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("operation completed"));

/*
async function getRandomPic() {
  const response = await fetch(
    "https://apis.scrimba.com/dog.ceo/api/breeds/image/random"
  );
  //   console.log(response.ok);
  if (!response.ok) {
    throw new Error("There was a problem with the API");
  }
  const data = await response.json();
  console.log(data);
}
try {
  getRandomPic();
} catch (err) {
  console.log(err);
} finally {
  console.log("Operation completed");
}
// status code : 200-299 : successful response: true, 404: not found : false , 500:server error :  false
*/
// async function apiCall() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       title: "foo",
//       body: "bar",
//       userId: 100,
//     }),
//   });

//   if (!response.ok) {
//     throw new Error("There is some problem with the API");
//   }

//   const data = await response.json();
//   console.log(data);
// }

// async function main() {
//   try {
//     await apiCall();
//   } catch (err) {
//     console.log(err);
//   } finally {
//     console.log("Operation completed successfully");
//   }
// }

// main();

// const promise = new Promise((resolve, reject) => {
//   const success = Math.random() > 0.5;
//   if (success) {
//     resolve("Operation Successful");
//   } else {
//     reject("Operation Failed");
//   }
// });

// promise.then((response) => {
//   console.log(response);
// });

// function preLoading(url) {
//   const promise = new Promise((resolve, reject) => {
//     const img = new Image();
//     img.src = url;
//     img.alt = "placeholder image";
//     img.addEventListener("load", () => resolve(img));
//     img.addEventListener("load", () => reject("img has NOT loaded"));
//   });
//   return promise;
// }

// try {
//   const results = await preLoading(
//     "https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenic1.jpg"
//   );
//   console.log(results);
//   document.getElementById("img-container").appendChild(results);
// } catch (error) {
//   console.log(error);
// }

// function createPromise() {
//   return new Promise((resolve, reject) => {
//     const success = Math.random() > 0.5;
//     if (success) {
//       resolve("Operation Successful");
//     } else {
//       reject("Operation Failed");
//     }
//   });
// }
// async function main() {
//   try {
//     const promise1 = createPromise();
//     const promise2 = createPromise();
//     const promise3 = createPromise();
//     const result = await Promise.all([promise1, promise2, promise3]);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// }

// main();

// super-challenge
// function getImagePromise(url) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const img = new Image();
//       img.src = url;
//       img.alt = "scenic image";
//       img.addEventListener("load", () => resolve(img));
//       img.onloadeddata("load", () =>
//         reject(new Error(`Failed to load image: ${url}`))
//       );
//     }, 500);
//   });
// }

// const images = [
//   "https://scrimba.com/links/advancedjs-resources-images-scenic1",
//   "https://scrimba.com/links/advancedjs-resources-images-scenic2",
//   "https://scrimba.com/links/advancedjs-resources-images-scenic3",
// ];

// async function preloadImages(imageUrlsArr) {
//   const imgContainer = document.getElementById("img-container");
//   const uploadContainer = document.getElementById("upload-container");
//   const promises = imageUrlsArr.map((url) => getImagePromise(url));

//   try {
//     const results = await Promise.all(promises);
//     console.log("All images loaded successfully");
//     uploadContainer.style.display = "none";
//     results.forEach((img) => {
//       imgContainer.appendChild(img);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

// document
//   .getElementById("submit-imgs")
//   .addEventListener("click", () => preloadImages(images));
