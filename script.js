const byteSize = (str) => {
  // write your code here
	const byteArray = new TextEncoder().encode(str);
    const sizeInBytes = byteArray.length;
     return sizeInBytes;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
