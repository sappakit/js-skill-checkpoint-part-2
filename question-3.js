// เริ่มเขียนโค้ดตรงนี้
const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return data.filter((item) => item.name.length > 17).map((item) => item.name);
};

const userData = await getUsers();
console.log(userData);
