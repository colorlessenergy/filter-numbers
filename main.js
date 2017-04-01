function filter_list(l) {
  return l.filter(function(e) {
    return typeof e !== "string";
  })
};

filter_list([1,2,"a","b"]);
