  export function add(numbers) {
    if (!numbers) return 0;
  
    let delimiter = /,|\n/; // default: comma or newline
    let numberString = numbers;
  
    // Support custom delimiter: e.g., "//;\n1;2"
    if (numbers.startsWith('//')) {
      const delimiterEndIndex = numbers.indexOf('\n');
      const customDelimiter = numbers.slice(2, delimiterEndIndex);
      delimiter = new RegExp(customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')); // escape regex chars
      numberString = numbers.slice(delimiterEndIndex + 1);
    }
  
    const parts = numberString.split(delimiter).map(n => n.trim());
    const negativeNumbers = [];
  
    const sum = parts.reduce((total, curr) => {
      if (curr === '') return total;
      const num = parseInt(curr, 10);
      if (isNaN(num)) return total;
  
      if (num < 0) {
        negativeNumbers.push(num);
      }
  
      return total + num;
    }, 0);
  
    if (negativeNumbers.length > 0) {
      throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`);
    }
  
    return sum;
  }
  