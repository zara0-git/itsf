function FileHelper() {}
FileHelper.prototype.GetFileSrc = async function (file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export default new FileHelper();
