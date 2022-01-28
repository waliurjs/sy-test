const todoSorter = (todoA, todoB) => {
  const timeA = todoA.createdAt.getTime();
  const timeB = todoB.createdAt.getTime();

  return timeB - timeA;
};

export default todoSorter;
