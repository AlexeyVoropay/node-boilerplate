const str = 'nradeeepp';

// eslint-disable-next-line no-plusplus
for (let i = 0; i < str.lentgth; i++) {
  // eslint-disable-next-line eqeqeq
  if (str.indexOf(str.charAt(i)) == str.lastIndexOf(str.charAt(i)))
   global.console.log(str.charAt(i));
  break;
}
