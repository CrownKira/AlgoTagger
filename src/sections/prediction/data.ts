import {
  IPrediction,
  IPredictionResult,
  IPredictionRequest,
  IPredictionResponse,
} from 'src/@types/prediction';

// TODO: move to type
const defaultPrediction: IPrediction = {
  title: '',
  description: '',
  model_used: 'DistilBERT',
};

export const DEFAULT_PREDICTION_RESULT: IPredictionResult = {
  array: 0,
  string: 0,
  dynamic_programming: 0,
  math: 0,
  hash_table: 0,
  greedy: 0,
  sorting: 0,
  depth_first_search: 0,
  breadth_first_search: 0,
  binary_search: 0,
};

export const DEFAULT_PREDICTION_REQUEST: IPredictionRequest = defaultPrediction;

export const DEFAULT_PREDICTION_RESPONSE: IPredictionResponse = {
  id: -1,
  ...defaultPrediction,
  prediction_result: DEFAULT_PREDICTION_RESULT,
};

export const getCategories = () =>
  Object.keys(DEFAULT_PREDICTION_RESULT).map((category) =>
    category
      .split('_')
      .map((word, index) => (index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word))
      .join(' ')
  );

export const QUESTIONS_TABLE = [
  {
    question_title: 'Two Sum',
    question_text:
      'Given an array of integers nums\xa0and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order. ',
  },
  {
    question_title: 'Add Two Numbers',
    question_text:
      'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum\xa0as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself. ',
  },
  {
    question_title: 'Longest Substring Without Repeating Characters',
    question_text:
      'Given a string s, find the length of the longest substring without repeating characters. ',
  },
  {
    question_title: 'Median of Two Sorted Arrays',
    question_text:
      'Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)). ',
  },
  {
    question_title: 'Longest Palindromic Substring',
    question_text: 'Given a string s, return the longest palindromic substring in s. ',
  },
  {
    question_title: 'Zigzag Conversion',
    question_text:
      'The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility) And then read line by line: "PAHNAPLSIIGYIR" Write the code that will take a string and make this conversion given a number of rows: ',
  },
  {
    question_title: 'Reverse Integer',
    question_text:
      'Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0. Assume the environment does not allow you to store 64-bit integers (signed or unsigned). ',
  },
  {
    question_title: 'String to Integer (atoi)',
    question_text:
      "Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function). The algorithm for myAtoi(string s) is as follows: Note: ",
  },
  {
    question_title: 'Palindrome Number',
    question_text:
      'Given an integer x, return true if x is palindrome integer. An integer is a palindrome when it reads the same backward as forward. ',
  },
  {
    question_title: 'Regular Expression Matching',
    question_text:
      "Given an input string s\xa0and a pattern p, implement regular expression matching with support for '.' and '*' where: The matching should cover the entire input string (not partial). ",
  },
  {
    question_title: 'Container With Most Water',
    question_text:
      'You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store. Notice that you may not slant the container. ',
  },
  {
    question_title: 'Integer to Roman',
    question_text:
      "Roman numerals are represented by seven different symbols:\xa0I, V, X, L, C, D and M. For example,\xa02 is written as II\xa0in Roman numeral, just two one's added together. 12 is written as\xa0XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II. Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used: Given an integer, convert it to a roman numeral. ",
  },
  {
    question_title: 'Roman to Integer',
    question_text:
      "Roman numerals are represented by seven different symbols:\xa0I, V, X, L, C, D and M. For example,\xa02 is written as II\xa0in Roman numeral, just two one's added together. 12 is written as\xa0XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II. Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used: Given a roman numeral, convert it to an integer. ",
  },
  {
    question_title: 'Longest Common Prefix',
    question_text:
      'Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "". ',
  },
  {
    question_title: '3Sum',
    question_text:
      'Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set must not contain duplicate triplets. ',
  },
  {
    question_title: '3Sum Closest',
    question_text:
      'Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution. ',
  },
  {
    question_title: 'Letter Combinations of a Phone Number',
    question_text:
      'Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order. A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.  ',
  },
  {
    question_title: '4Sum',
    question_text:
      'Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that: You may return the answer in any order. ',
  },
  {
    question_title: 'Valid Parentheses',
    question_text:
      "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: ",
  },
  {
    question_title: 'Generate Parentheses',
    question_text:
      'Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses. ',
  },
  {
    question_title: 'Remove Duplicates from Sorted Array',
    question_text:
      'Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums\xa0should hold the final result. It does not matter what you leave beyond the first\xa0k\xa0elements. Return k after placing the final result in the first k slots of nums. Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory. Custom Judge: The judge will test your solution with the following code: If all assertions pass, then your solution will be accepted. ',
  },
  {
    question_title: 'Remove Element',
    question_text:
      'Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed. Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements. Return k after placing the final result in the first k slots of nums. Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory. Custom Judge: The judge will test your solution with the following code: If all assertions pass, then your solution will be accepted. ',
  },
  {
    question_title: 'Implement strStr()',
    question_text:
      "Implement strStr(). Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack. Clarification: What should we return when needle is an empty string? This is a great question to ask during an interview. For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf(). ",
  },
  {
    question_title: 'Divide Two Integers',
    question_text:
      'Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator. The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2. Return the quotient after dividing dividend by divisor. Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231. ',
  },
  {
    question_title: 'Substring with Concatenation of All Words',
    question_text:
      'You are given a string s and an array of strings words of the same length. Return\xa0all starting indices of substring(s) in s\xa0that is a concatenation of each word in words exactly once, in any order,\xa0and without any intervening characters. You can return the answer in any order. ',
  },
  {
    question_title: 'Next Permutation',
    question_text:
      'A permutation of an array of integers is an arrangement of its members into a sequence or linear order. The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order). Given an array of integers nums, find the next permutation of nums. The replacement must be in place and use only constant extra memory. ',
  },
  {
    question_title: 'Longest Valid Parentheses',
    question_text:
      "Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring. ",
  },
  {
    question_title: 'Search in Rotated Sorted Array',
    question_text:
      'There is an integer array nums sorted in ascending order (with distinct values). Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2]. Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums. You must write an algorithm with O(log n) runtime complexity. ',
  },
  {
    question_title: 'Find First and Last Position of Element in Sorted Array',
    question_text:
      'Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value. If target is not found in the array, return [-1, -1]. You must\xa0write an algorithm with\xa0O(log n) runtime complexity. ',
  },
  {
    question_title: 'Search Insert Position',
    question_text:
      'Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. You must\xa0write an algorithm with\xa0O(log n) runtime complexity. ',
  },
  {
    question_title: 'Valid Sudoku',
    question_text:
      'Determine if a\xa09 x 9 Sudoku board\xa0is valid.\xa0Only the filled cells need to be validated\xa0according to the following rules: Note: ',
  },
  {
    question_title: 'Sudoku Solver',
    question_text:
      "Write a program to solve a Sudoku puzzle by filling the empty cells. A sudoku solution must satisfy all of the following rules: The '.' character indicates empty cells. ",
  },
  {
    question_title: 'Count and Say',
    question_text:
      'The count-and-say sequence is a sequence of digit strings defined by the recursive formula: To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character. Then for each group, say the number of characters, then say the character. To convert the saying into a digit string, replace the counts with a number and concatenate every saying. For example, the saying and conversion for digit string "3322251": Given a positive integer n, return the nth term of the count-and-say sequence. ',
  },
  {
    question_title: 'Combination Sum',
    question_text:
      'Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order. The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different. It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input. ',
  },
  {
    question_title: 'Combination Sum II',
    question_text:
      'Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates\xa0where the candidate numbers sum to target. Each number in candidates\xa0may only be used once in the combination. Note:\xa0The solution set must not contain duplicate combinations. ',
  },
  {
    question_title: 'First Missing Positive',
    question_text:
      'Given an unsorted integer array nums, return the smallest missing positive integer. You must implement an algorithm that runs in O(n) time and uses constant extra space. ',
  },
  {
    question_title: 'Trapping Rain Water',
    question_text:
      'Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining. ',
  },
  {
    question_title: 'Multiply Strings',
    question_text:
      'Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string. Note:\xa0You must not use any built-in BigInteger library or convert the inputs to integer directly. ',
  },
  {
    question_title: 'Wildcard Matching',
    question_text:
      "Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where: The matching should cover the entire input string (not partial). ",
  },
  {
    question_title: 'Jump Game II',
    question_text:
      'Given an array of non-negative integers nums, you are initially positioned at the first index of the array. Each element in the array represents your maximum jump length at that position. Your goal is to reach the last index in the minimum number of jumps. You can assume that you can always reach the last index. ',
  },
  {
    question_title: 'Permutations',
    question_text:
      'Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order. ',
  },
  {
    question_title: 'Permutations II',
    question_text:
      'Given a collection of numbers, nums,\xa0that might contain duplicates, return all possible unique permutations in any order. ',
  },
  {
    question_title: 'Rotate Image',
    question_text:
      'You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise). You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation. ',
  },
  {
    question_title: 'Group Anagrams',
    question_text:
      'Given an array of strings strs, group the anagrams together. You can return the answer in any order. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. ',
  },
  {
    question_title: 'Pow(x, n)',
    question_text: 'Implement pow(x, n), which calculates x raised to the power n (i.e., xn). ',
  },
  {
    question_title: 'N-Queens',
    question_text:
      "The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other. Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order. Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively. ",
  },
  {
    question_title: 'Maximum Subarray',
    question_text:
      'Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum. A subarray is a contiguous part of an array. ',
  },
  {
    question_title: 'Spiral Matrix',
    question_text: 'Given an m x n matrix, return all elements of the matrix in spiral order. ',
  },
  {
    question_title: 'Jump Game',
    question_text:
      "You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position. Return true if you can reach the last index, or false otherwise. ",
  },
  {
    question_title: 'Merge Intervals',
    question_text:
      'Given an array\xa0of intervals\xa0where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input. ',
  },
  {
    question_title: 'Insert Interval',
    question_text:
      'You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval. Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary). Return intervals after the insertion. ',
  },
  {
    question_title: 'Length of Last Word',
    question_text:
      'Given a string s consisting\xa0of some words separated by some number of spaces, return the length of the last word in the string. A word is a maximal substring consisting of non-space characters only. ',
  },
  {
    question_title: 'Spiral Matrix II',
    question_text:
      'Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order. ',
  },
  {
    question_title: 'Permutation Sequence',
    question_text:
      'The set [1, 2, 3, ...,\xa0n] contains a total of n! unique permutations. By listing and labeling all of the permutations in order, we get the following sequence for n = 3: Given n and k, return the kth permutation sequence. ',
  },
  {
    question_title: 'Unique Paths',
    question_text:
      'There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time. Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner. The test cases are generated so that the answer will be less than or equal to 2 * 109. ',
  },
  {
    question_title: 'Unique Paths II',
    question_text:
      'You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m-1][n-1]). The robot can only move either down or right at any point in time. An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle. Return the number of possible unique paths that the robot can take to reach the bottom-right corner. The testcases are generated so that the answer will be less than or equal to 2 * 109. ',
  },
  {
    question_title: 'Minimum Path Sum',
    question_text:
      'Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path. Note: You can only move either down or right at any point in time. ',
  },
  {
    question_title: 'Valid Number',
    question_text:
      'A valid number can be split up into these components (in order): A decimal number can be split up into these components (in order): An integer can be split up into these components (in order): For example, all the following are valid numbers: ["2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789"], while the following are not valid numbers: ["abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53"]. Given a string s, return true if s is a valid number. ',
  },
  {
    question_title: 'Plus One',
    question_text:
      "You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's. Increment the large integer by one and return the resulting array of digits. ",
  },
  {
    question_title: 'Add Binary',
    question_text: 'Given two binary strings a and b, return their sum as a binary string. ',
  },
  {
    question_title: 'Text Justification',
    question_text:
      "Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified. You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters. Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right. For the last line of text, it should be left-justified and no extra space is inserted between words. Note: ",
  },
  {
    question_title: 'Sqrt(x)',
    question_text:
      'Given a non-negative integer x,\xa0compute and return the square root of x. Since the return type\xa0is an integer, the decimal digits are truncated, and only the integer part of the result\xa0is returned. Note:\xa0You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or\xa0x ** 0.5. ',
  },
  {
    question_title: 'Climbing Stairs',
    question_text:
      'You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? ',
  },
  {
    question_title: 'Simplify Path',
    question_text:
      "Given a string path, which is an absolute path (starting with a slash '/') to a file or directory in a Unix-style file system, convert it to the simplified canonical path. In a Unix-style file system, a period '.' refers to the current directory, a double period '..' refers to the directory up a level, and any multiple consecutive slashes (i.e. '//') are treated as a single slash '/'. For this problem, any other format of periods such as '...' are treated as file/directory names. The canonical path should have the following format: Return the simplified canonical path. ",
  },
  {
    question_title: 'Edit Distance',
    question_text:
      'Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2. You have the following three operations permitted on a word: ',
  },
  {
    question_title: 'Set Matrix Zeroes',
    question_text:
      "Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's. You must do it in place. ",
  },
  {
    question_title: 'Search a 2D Matrix',
    question_text:
      'Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties: ',
  },
  {
    question_title: 'Sort Colors',
    question_text:
      "Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue. We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively. You must solve this problem without using the library's sort function. ",
  },
  {
    question_title: 'Minimum Window Substring',
    question_text:
      'Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "". The testcases will be generated such that the answer is unique. A substring is a contiguous sequence of characters within the string. ',
  },
  {
    question_title: 'Subsets',
    question_text:
      'Given an integer array nums of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order. ',
  },
  {
    question_title: 'Word Search',
    question_text:
      'Given an m x n grid of characters board and a string word, return true if word exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once. ',
  },
  {
    question_title: 'Remove Duplicates from Sorted Array II',
    question_text:
      'Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same. Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums\xa0should hold the final result. It does not matter what you leave beyond the first\xa0k\xa0elements. Return k after placing the final result in the first k slots of nums. Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory. Custom Judge: The judge will test your solution with the following code: If all assertions pass, then your solution will be accepted. ',
  },
  {
    question_title: 'Search in Rotated Sorted Array II',
    question_text:
      'There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values). Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4]. Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums. You must decrease the overall operation steps as much as possible. ',
  },
  {
    question_title: 'Largest Rectangle in Histogram',
    question_text:
      "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram. ",
  },
  {
    question_title: 'Maximal Rectangle',
    question_text:
      "Given a rows x cols\xa0binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area. ",
  },
  {
    question_title: 'Scramble String',
    question_text:
      'We can scramble a string s to get a string t using the following algorithm: Given two strings s1 and s2 of the same length, return true if s2 is a scrambled string of s1, otherwise, return false. ',
  },
  {
    question_title: 'Merge Sorted Array',
    question_text:
      'You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively. Merge nums1 and nums2 into a single array sorted in non-decreasing order. The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n. ',
  },
  {
    question_title: 'Gray Code',
    question_text:
      'An n-bit gray code sequence is a sequence of 2n integers where: Given an integer n, return any valid n-bit gray code sequence. ',
  },
  {
    question_title: 'Subsets II',
    question_text:
      'Given an integer array nums that may contain duplicates, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order. ',
  },
  {
    question_title: 'Decode Ways',
    question_text:
      'A message containing letters from A-Z can be encoded into numbers using the following mapping: To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into: Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into \'F\' since "6" is different from "06". Given a string s containing only digits, return the number of ways to decode it. The test cases are generated so that the answer fits in a 32-bit integer. ',
  },
  {
    question_title: 'Restore IP Addresses',
    question_text:
      'A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros. Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s. You are not allowed to reorder or remove any digits in s. You may return the valid IP addresses in any order. ',
  },
  {
    question_title: 'Binary Tree Inorder Traversal',
    question_text:
      "Given the root of a binary tree, return the inorder traversal of its nodes' values. ",
  },
  {
    question_title: 'Unique Binary Search Trees II',
    question_text:
      "Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n. Return the answer in any order. ",
  },
  {
    question_title: 'Unique Binary Search Trees',
    question_text:
      "Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n. ",
  },
  {
    question_title: 'Interleaving String',
    question_text:
      'Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2. An interleaving of two strings s and t is a configuration where they are divided into non-empty substrings such that: Note: a + b is the concatenation of strings a and b. ',
  },
  {
    question_title: 'Validate Binary Search Tree',
    question_text:
      'Given the root of a binary tree, determine if it is a valid binary search tree (BST). A valid BST is defined as follows: ',
  },
  {
    question_title: 'Recover Binary Search Tree',
    question_text:
      'You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure. ',
  },
  {
    question_title: 'Same Tree',
    question_text:
      'Given the roots of two binary trees p and q, write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical, and the nodes have the same value. ',
  },
  {
    question_title: 'Symmetric Tree',
    question_text:
      'Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center). ',
  },
  {
    question_title: 'Binary Tree Level Order Traversal',
    question_text:
      "Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level). ",
  },
  {
    question_title: 'Binary Tree Zigzag Level Order Traversal',
    question_text:
      "Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between). ",
  },
  {
    question_title: 'Maximum Depth of Binary Tree',
    question_text:
      "Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth\xa0is the number of nodes along the longest path from the root node down to the farthest leaf node. ",
  },
  {
    question_title: 'Construct Binary Tree from Preorder and Inorder Traversal',
    question_text:
      'Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree. ',
  },
  {
    question_title: 'Construct Binary Tree from Inorder and Postorder Traversal',
    question_text:
      'Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree. ',
  },
  {
    question_title: 'Binary Tree Level Order Traversal II',
    question_text:
      "Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root). ",
  },
  {
    question_title: 'Convert Sorted Array to Binary Search Tree',
    question_text:
      'Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree. A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one. ',
  },
  {
    question_title: 'Balanced Binary Tree',
    question_text:
      'Given a binary tree, determine if it is height-balanced. For this problem, a height-balanced binary tree is defined as: a binary tree in which the left and right subtrees of every node differ in height by no more than 1. ',
  },
  {
    question_title: 'Minimum Depth of Binary Tree',
    question_text:
      'Given a binary tree, find its minimum depth. The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node. Note:\xa0A leaf is a node with no children. ',
  },
  {
    question_title: 'Path Sum',
    question_text:
      'Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum. A leaf is a node with no children. ',
  },
  {
    question_title: 'Path Sum II',
    question_text:
      'Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references. A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children. ',
  },
  {
    question_title: 'Flatten Binary Tree to Linked List',
    question_text: 'Given the root of a binary tree, flatten the tree into a "linked list": ',
  },
  {
    question_title: 'Distinct Subsequences',
    question_text:
      'Given two strings s and t, return the number of distinct subsequences of s which equals t. A string\'s subsequence is a new string formed from the original string by deleting some (can be none) of the characters without disturbing the remaining characters\' relative positions. (i.e., "ACE" is a subsequence of "ABCDE" while "AEC" is not). The test cases are generated so that the answer fits on a 32-bit signed integer. ',
  },
  {
    question_title: 'Populating Next Right Pointers in Each Node',
    question_text:
      'You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition: Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL. Initially, all next pointers are set to NULL. ',
  },
  {
    question_title: 'Populating Next Right Pointers in Each Node II',
    question_text:
      'Given a binary tree Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL. Initially, all next pointers are set to NULL. ',
  },
  {
    question_title: "Pascal's Triangle",
    question_text:
      "Given an integer numRows, return the first numRows of Pascal's triangle. In Pascal's triangle, each number is the sum of the two numbers directly above it as shown: ",
  },
  {
    question_title: "Pascal's Triangle II",
    question_text:
      "Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle. In Pascal's triangle, each number is the sum of the two numbers directly above it as shown: ",
  },
  {
    question_title: 'Triangle',
    question_text:
      'Given a triangle array, return the minimum path sum from top to bottom. For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row. ',
  },
  {
    question_title: 'Best Time to Buy and Sell Stock',
    question_text:
      'You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0. ',
  },
  {
    question_title: 'Best Time to Buy and Sell Stock II',
    question_text:
      'You are given an integer array prices where prices[i] is the price of a given stock on the ith day. On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day. Find and return the maximum profit you can achieve. ',
  },
  {
    question_title: 'Best Time to Buy and Sell Stock III',
    question_text:
      'You are given an array prices where prices[i] is the price of a given stock on the ith day. Find the maximum profit you can achieve. You may complete at most two transactions. Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again). ',
  },
  {
    question_title: 'Binary Tree Maximum Path Sum',
    question_text:
      "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root. The path sum of a path is the sum of the node's values in the path. Given the root of a binary tree, return the maximum path sum of any non-empty path. ",
  },
  {
    question_title: 'Valid Palindrome',
    question_text:
      'A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers. Given a string s, return true if it is a palindrome, or false otherwise. ',
  },
  {
    question_title: 'Word Ladder II',
    question_text:
      'A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that: Given two words, beginWord and endWord, and a dictionary wordList, return all the shortest transformation sequences from beginWord to endWord, or an empty list if no such sequence exists. Each sequence should be returned as a list of the words [beginWord, s1, s2, ..., sk]. ',
  },
  {
    question_title: 'Word Ladder',
    question_text:
      'A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that: Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists. ',
  },
  {
    question_title: 'Longest Consecutive Sequence',
    question_text:
      'Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in\xa0O(n)\xa0time. ',
  },
  {
    question_title: 'Sum Root to Leaf Numbers',
    question_text:
      'You are given the root of a binary tree containing digits from 0 to 9 only. Each root-to-leaf path in the tree represents a number. Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer. A leaf node is a node with no children. ',
  },
  {
    question_title: 'Surrounded Regions',
    question_text:
      "Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally\xa0surrounded by 'X'. A region is captured by flipping all 'O's into 'X's in that surrounded region. ",
  },
  {
    question_title: 'Palindrome Partitioning',
    question_text:
      'Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s. A palindrome string is a string that reads the same backward as forward. ',
  },
  {
    question_title: 'Palindrome Partitioning II',
    question_text:
      'Given a string s, partition s such that every substring of the partition is a palindrome. Return the minimum cuts needed for a palindrome partitioning of s. ',
  },
  {
    question_title: 'Clone Graph',
    question_text:
      "Given a reference of a node in a connected undirected graph. Return a deep copy (clone) of the graph. Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.  Test case format: For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list. An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph. The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph. ",
  },
  {
    question_title: 'Gas Station',
    question_text:
      "There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i]. You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations. Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique ",
  },
  {
    question_title: 'Candy',
    question_text:
      'There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings. You are giving candies to these children subjected to the following requirements: Return the minimum number of candies you need to have to distribute the candies to the children. ',
  },
  {
    question_title: 'Single Number',
    question_text:
      'Given a non-empty\xa0array of integers nums, every element appears twice except for one. Find that single one. You must\xa0implement a solution with a linear runtime complexity and use\xa0only constant\xa0extra space. ',
  },
  {
    question_title: 'Single Number II',
    question_text:
      'Given an integer array nums where\xa0every element appears three times except for one, which appears exactly once. Find the single element and return it. You must\xa0implement a solution with a linear runtime complexity and use\xa0only constant\xa0extra space. ',
  },
  {
    question_title: 'Copy List with Random Pointer',
    question_text:
      'A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null. Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list. For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y. Return the head of the copied linked list. The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where: Your code will only be given the head of the original linked list. ',
  },
  {
    question_title: 'Word Break',
    question_text:
      'Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words. Note that the same word in the dictionary may be reused multiple times in the segmentation. ',
  },
  {
    question_title: 'Word Break II',
    question_text:
      'Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences in any order. Note that the same word in the dictionary may be reused multiple times in the segmentation. ',
  },
  {
    question_title: 'Linked List Cycle',
    question_text:
      "Given head, the head of a linked list, determine if the linked list has a cycle in it. There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the\xa0next\xa0pointer. Internally, pos\xa0is used to denote the index of the node that\xa0tail's\xa0next\xa0pointer is connected to.\xa0Note that\xa0pos\xa0is not passed as a parameter. Return\xa0true if there is a cycle in the linked list. Otherwise, return false. ",
  },
  {
    question_title: 'Linked List Cycle II',
    question_text:
      "Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null. There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter. Do not modify the linked list. ",
  },
  {
    question_title: 'Binary Tree Preorder Traversal',
    question_text:
      "Given the root of a binary tree, return the preorder traversal of its nodes' values. ",
  },
  {
    question_title: 'Binary Tree Postorder Traversal',
    question_text:
      "Given the root of a\xa0binary tree, return the postorder traversal of its nodes' values. ",
  },
  {
    question_title: 'LRU Cache',
    question_text:
      'Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement the LRUCache class: The functions\xa0get\xa0and\xa0put\xa0must each run in O(1) average time complexity. ',
  },
  {
    question_title: 'Insertion Sort List',
    question_text:
      "Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head. The steps of the insertion sort algorithm: The following is a graphical example of the insertion sort algorithm. The partially sorted list (black) initially contains only the first element in the list. One element (red) is removed from the input data and inserted in-place into the sorted list with each iteration. ",
  },
  {
    question_title: 'Sort List',
    question_text:
      'Given the head of a linked list, return the list after sorting it in ascending order. ',
  },
  {
    question_title: 'Max Points on a Line',
    question_text:
      'Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line. ',
  },
  {
    question_title: 'Evaluate Reverse Polish Notation',
    question_text:
      'Evaluate the value of an arithmetic expression in Reverse Polish Notation. Valid operators are +, -, *, and /. Each operand may be an integer or another expression. Note that division between two integers should truncate toward zero. It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation. ',
  },
  {
    question_title: 'Reverse Words in a String',
    question_text:
      'Given an input string s, reverse the order of the words. A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space. Return a string of the words in reverse order concatenated by a single space. Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces. ',
  },
  {
    question_title: 'Maximum Product Subarray',
    question_text:
      'Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product. The test cases are generated so that the answer will fit in a 32-bit integer. A subarray is a contiguous subsequence of the array. ',
  },
  {
    question_title: 'Find Minimum in Rotated Sorted Array',
    question_text:
      'Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become: Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]]. Given the sorted rotated array nums of unique elements, return the minimum element of this array. You must write an algorithm that runs in\xa0O(log n) time. ',
  },
  {
    question_title: 'Find Minimum in Rotated Sorted Array II',
    question_text:
      'Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,4,4,5,6,7] might become: Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]]. Given the sorted rotated array nums that may contain duplicates, return the minimum element of this array. You must decrease the overall operation steps as much as possible. ',
  },
  {
    question_title: 'Intersection of Two Linked Lists',
    question_text:
      'Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null. For example, the following two linked lists begin to intersect at node c1: The test cases are generated such that there are no cycles anywhere in the entire linked structure. Note that the linked lists must retain their original structure after the function returns. Custom Judge: The inputs to the judge are given as follows (your program is not given these inputs): The judge will then create the linked structure based on these inputs and pass the two heads, headA and headB\xa0to your program. If you correctly return the intersected node, then your solution will be accepted. ',
  },
  {
    question_title: 'Find Peak Element',
    question_text:
      'A peak element is an element that is strictly greater than its neighbors. Given an integer array nums, find a peak element, and return its index. If\xa0the array contains multiple peaks, return the index to any of the peaks. You may imagine that nums[-1] = nums[n] = -∞. You must write an algorithm that runs in\xa0O(log n) time. ',
  },
  {
    question_title: 'Maximum Gap',
    question_text:
      'Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0. You must write an algorithm that runs in linear time and uses linear extra space. ',
  },
  {
    question_title: 'Compare Version Numbers',
    question_text:
      "Given two version numbers,\xa0version1 and version2, compare them. Version numbers consist of one or more revisions joined by a dot\xa0'.'. Each revision\xa0consists of digits\xa0and may contain leading zeros. Every revision contains at least one character. Revisions are 0-indexed from left to right, with the leftmost revision being revision 0, the next revision being revision 1, and so on. For example\xa02.5.33\xa0and\xa00.1\xa0are valid version numbers. To compare version numbers, compare their revisions in left-to-right order. Revisions are compared using their\xa0integer value ignoring any leading zeros. This means that revisions\xa01\xa0and\xa0001\xa0are considered\xa0equal. If a version number does not specify a revision at an index, then\xa0treat the revision as\xa00. For example, version\xa01.0 is less than version\xa01.1\xa0because their revision 0s are the same, but their revision 1s are\xa00\xa0and\xa01\xa0respectively, and\xa00 < 1. Return the following: ",
  },
  {
    question_title: 'Fraction to Recurring Decimal',
    question_text:
      'Given two integers representing the numerator and denominator of a fraction, return the fraction in string format. If the fractional part is repeating, enclose the repeating part in parentheses. If multiple answers are possible, return any of them. It is guaranteed that the length of the answer string is less than 104 for all the given inputs. ',
  },
  {
    question_title: 'Two Sum II - Input Array Is Sorted',
    question_text:
      'Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length. Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2. The tests are generated such that there is exactly one solution. You may not use the same element twice. Your solution must use only constant extra space. ',
  },
  {
    question_title: 'Excel Sheet Column Title',
    question_text:
      'Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet. For example: ',
  },
  {
    question_title: 'Majority Element',
    question_text:
      'Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array. ',
  },
  {
    question_title: 'Excel Sheet Column Number',
    question_text:
      'Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number. For example: ',
  },
  {
    question_title: 'Factorial Trailing Zeroes',
    question_text:
      'Given an integer n, return the number of trailing zeroes in n!. Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1. ',
  },
  {
    question_title: 'Dungeon Game',
    question_text:
      "The demons had captured the princess and imprisoned her in the bottom-right corner of a dungeon. The dungeon consists of m x n rooms laid out in a 2D grid. Our valiant knight was initially positioned in the top-left room and must fight his way through dungeon to rescue the princess. The knight has an initial health point represented by a positive integer. If at any point his health point drops to 0 or below, he dies immediately. Some of the rooms are guarded by demons (represented by negative integers), so the knight loses health upon entering these rooms; other rooms are either empty (represented as 0) or contain magic orbs that increase the knight's health (represented by positive integers). To reach the princess as quickly as possible, the knight decides to move only rightward or downward in each step. Return the knight's minimum initial health so that he can rescue the princess. Note that any room can contain threats or power-ups, even the first room the knight enters and the bottom-right room where the princess is imprisoned. ",
  },
  {
    question_title: 'Largest Number',
    question_text:
      'Given a list of non-negative integers nums, arrange them such that they form the largest number and return it. Since the result may be very large, so you need to return a string instead of an integer. ',
  },
  {
    question_title: 'Repeated DNA Sequences',
    question_text:
      "The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'. When studying DNA, it is useful to identify repeated sequences within the DNA. Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order. ",
  },
  {
    question_title: 'Best Time to Buy and Sell Stock IV',
    question_text:
      'You are given an integer array prices where prices[i] is the price of a given stock on the ith day, and an integer k. Find the maximum profit you can achieve. You may complete at most k transactions. Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again). ',
  },
  {
    question_title: 'Rotate Array',
    question_text:
      'Given an array, rotate the array to the right by k steps, where k is non-negative. ',
  },
  {
    question_title: 'House Robber',
    question_text:
      'You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night. Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police. ',
  },
  {
    question_title: 'Binary Tree Right Side View',
    question_text:
      'Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom. ',
  },
  {
    question_title: 'Number of Islands',
    question_text:
      "Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water. ",
  },
  {
    question_title: 'Happy Number',
    question_text:
      'Write an algorithm to determine if a number n is happy. A happy number is a number defined by the following process: Return true if n is a happy number, and false if not. ',
  },
  {
    question_title: 'Count Primes',
    question_text:
      'Given an integer n, return the number of prime numbers that are strictly less than n. ',
  },
  {
    question_title: 'Isomorphic Strings',
    question_text:
      'Given two strings s and t, determine if they are isomorphic. Two strings s and t are isomorphic if the characters in s can be replaced to get t. All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself. ',
  },
  {
    question_title: 'Course Schedule',
    question_text:
      'There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai. Return true if you can finish all courses. Otherwise, return false. ',
  },
  {
    question_title: 'Implement Trie (Prefix Tree)',
    question_text:
      'A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker. Implement the Trie class: ',
  },
  {
    question_title: 'Minimum Size Subarray Sum',
    question_text:
      'Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead. ',
  },
  {
    question_title: 'Course Schedule II',
    question_text:
      'There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai. Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array. ',
  },
  {
    question_title: 'Design Add and Search Words Data Structure',
    question_text:
      'Design a data structure that supports adding new words and finding if a string matches any previously added string. Implement the WordDictionary class:  Example:  Constraints:',
  },
  {
    question_title: 'Word Search II',
    question_text:
      'Given an m x n board\xa0of characters and a list of strings words, return all words on the board. Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word. ',
  },
  {
    question_title: 'House Robber II',
    question_text:
      'You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and\xa0it will automatically contact the police if two adjacent houses were broken into on the same night. Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police. ',
  },
  {
    question_title: 'Shortest Palindrome',
    question_text:
      'You are given a string s. You can convert s to a palindrome by adding characters in front of it. Return the shortest palindrome you can find by performing this transformation. ',
  },
  {
    question_title: 'Kth Largest Element in an Array',
    question_text:
      'Given an integer array nums and an integer k, return the kth largest element in the array. Note that it is the kth largest element in the sorted order, not the kth distinct element. ',
  },
  {
    question_title: 'Combination Sum III',
    question_text:
      'Find all valid combinations of k numbers that sum up to n such that the following conditions are true: Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order. ',
  },
  {
    question_title: 'Contains Duplicate',
    question_text:
      'Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct. ',
  },
  {
    question_title: 'The Skyline Problem',
    question_text:
      "A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Given the locations and heights of all the buildings, return the skyline formed by these buildings collectively. The geometric information of each building is given in the array buildings where buildings[i] = [lefti, righti, heighti]: You may assume all buildings are perfect rectangles grounded on an absolutely flat surface at height 0. The skyline should be represented as a list of \"key points\" sorted by their x-coordinate in the form [[x1,y1],[x2,y2],...]. Each key point is the left endpoint of some horizontal segment in the skyline except the last point in the list, which always has a y-coordinate 0 and is used to mark the skyline's termination where the rightmost building ends. Any ground between the leftmost and rightmost buildings should be part of the skyline's contour. Note: There must be no consecutive horizontal lines of equal height in the output skyline. For instance, [...,[2 3],[4 5],[7 5],[11 5],[12 7],...] is not acceptable; the three lines of height 5 should be merged into one in the final output as such: [...,[2 3],[4 5],[12 7],...] ",
  },
  {
    question_title: 'Contains Duplicate II',
    question_text:
      'Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k. ',
  },
  {
    question_title: 'Contains Duplicate III',
    question_text:
      'Given an integer array nums and two integers k and t, return true if there are two distinct indices i and j in the array such that abs(nums[i] - nums[j]) <= t and abs(i - j) <= k. ',
  },
  {
    question_title: 'Maximal Square',
    question_text:
      "Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area. ",
  },
  {
    question_title: 'Count Complete Tree Nodes',
    question_text:
      'Given the root of a complete binary tree, return the number of the nodes in the tree. According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h. Design an algorithm that runs in less than\xa0O(n)\xa0time complexity. ',
  },
  {
    question_title: 'Rectangle Area',
    question_text:
      'Given the coordinates of two rectilinear rectangles in a 2D plane, return the total area covered by the two rectangles. The first rectangle is defined by its bottom-left corner (ax1, ay1) and its top-right corner (ax2, ay2). The second rectangle is defined by its bottom-left corner (bx1, by1) and its top-right corner (bx2, by2). ',
  },
  {
    question_title: 'Basic Calculator',
    question_text:
      'Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation. Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval(). ',
  },
  {
    question_title: 'Invert Binary Tree',
    question_text: 'Given the root of a binary tree, invert the tree, and return its root. ',
  },
  {
    question_title: 'Basic Calculator II',
    question_text:
      'Given a string s which represents an expression, evaluate this expression and return its value. The integer division should truncate toward zero. You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1]. Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval(). ',
  },
  {
    question_title: 'Summary Ranges',
    question_text:
      'You are given a sorted unique integer array nums. A range [a,b] is the set of all integers from a to b (inclusive). Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums. Each range [a,b] in the list should be output as: ',
  },
  {
    question_title: 'Majority Element II',
    question_text:
      'Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times. ',
  },
  {
    question_title: 'Kth Smallest Element in a BST',
    question_text:
      'Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree. ',
  },
  {
    question_title: 'Power of Two',
    question_text:
      'Given an integer n, return true if it is a power of two. Otherwise, return false. An integer n is a power of two, if there exists an integer x such that n == 2x. ',
  },
  {
    question_title: 'Number of Digit One',
    question_text:
      'Given an integer n, count the total number of digit 1 appearing in all non-negative integers less than or equal to n. ',
  },
  {
    question_title: 'Lowest Common Ancestor of a Binary Search Tree',
    question_text:
      'Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST. According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).” ',
  },
  {
    question_title: 'Lowest Common Ancestor of a Binary Tree',
    question_text:
      'Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree. According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).” ',
  },
  {
    question_title: 'Product of Array Except Self',
    question_text:
      'Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer. You must write an algorithm that runs in\xa0O(n)\xa0time and without using the division operation. ',
  },
  {
    question_title: 'Sliding Window Maximum',
    question_text:
      'You are given an array of integers\xa0nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window. ',
  },
  {
    question_title: 'Search a 2D Matrix II',
    question_text:
      'Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties: ',
  },
  {
    question_title: 'Different Ways to Add Parentheses',
    question_text:
      'Given a string expression of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators. You may return the answer in any order. ',
  },
  {
    question_title: 'Valid Anagram',
    question_text:
      'Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. ',
  },
  {
    question_title: 'Binary Tree Paths',
    question_text:
      'Given the root of a binary tree, return all root-to-leaf paths in any order. A leaf is a node with no children. ',
  },
  {
    question_title: 'Add Digits',
    question_text:
      'Given an integer num, repeatedly add all its digits until the result has only one digit, and return it. ',
  },
  {
    question_title: 'Single Number III',
    question_text:
      'Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order. You must write an\xa0algorithm that runs in linear runtime complexity and uses\xa0only constant extra space. ',
  },
  {
    question_title: 'Ugly Number',
    question_text:
      'An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5. Given an integer n, return true if n is an ugly number. ',
  },
  {
    question_title: 'Ugly Number II',
    question_text:
      'An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5. Given an integer n, return the nth ugly number. ',
  },
  {
    question_title: 'Missing Number',
    question_text:
      'Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array. ',
  },
  {
    question_title: 'Integer to English Words',
    question_text: 'Convert a non-negative integer num to its English words representation. ',
  },
  {
    question_title: 'H-Index',
    question_text:
      "Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return compute the researcher's h-index. According to the definition of h-index on Wikipedia: A scientist has an index h if h of their n papers have at least h citations each, and the other n − h papers have no more than h citations each. If there are several possible values for h, the maximum one is taken as the h-index. ",
  },
  {
    question_title: 'H-Index II',
    question_text:
      "Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper and citations\xa0is sorted in an ascending order, return compute the researcher's h-index. According to the definition of h-index on Wikipedia: A scientist has an index h if h of their n papers have at least h citations each, and the other n − h papers have no more than h citations each. If there are several possible values for h, the maximum one is taken as the h-index. You must write an algorithm that runs in logarithmic time. ",
  },
  {
    question_title: 'First Bad Version',
    question_text:
      'You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad. Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad. You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API. ',
  },
  {
    question_title: 'Perfect Squares',
    question_text:
      'Given an integer n, return the least number of perfect square numbers that sum to n. A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not. ',
  },
  {
    question_title: 'Expression Add Operators',
    question_text:
      "Given a string num that contains only digits and an integer target, return all possibilities to insert the binary operators '+', '-', and/or '*' between the digits of num so that the resultant expression evaluates to the target value. Note that operands in the returned expressions should not contain leading zeros. ",
  },
  {
    question_title: 'Move Zeroes',
    question_text:
      "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements. Note that you must do this in-place without making a copy of the array. ",
  },
  {
    question_title: 'Peeking Iterator',
    question_text:
      'Design an iterator that supports the peek operation on an existing iterator in addition to the hasNext and the next operations. Implement the PeekingIterator class: Note: Each language may have a different implementation of the constructor and Iterator, but they all support the int next() and boolean hasNext() functions. ',
  },
  {
    question_title: 'Find the Duplicate Number',
    question_text:
      'Given an array of integers nums containing\xa0n + 1 integers where each integer is in the range [1, n] inclusive. There is only one repeated number in nums, return this\xa0repeated\xa0number. You must solve the problem without modifying the array nums\xa0and uses only constant extra space. ',
  },
  {
    question_title: 'Game of Life',
    question_text:
      'According to\xa0Wikipedia\'s article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970." The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article): The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state. ',
  },
  {
    question_title: 'Word Pattern',
    question_text:
      'Given a pattern and a string s, find if s\xa0follows the same pattern. Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. ',
  },
  {
    question_title: 'Nim Game',
    question_text:
      'You are playing the following Nim Game with your friend: Given n, the number of stones in the heap, return true if you can win the game assuming both you and your friend play optimally, otherwise return false. ',
  },
  {
    question_title: 'Find Median from Data Stream',
    question_text:
      'The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values. Implement the MedianFinder class: ',
  },
  {
    question_title: 'Serialize and Deserialize Binary Tree',
    question_text:
      'Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment. Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure. Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself. ',
  },
  {
    question_title: 'Bulls and Cows',
    question_text:
      'You are playing the Bulls and Cows game with your friend. You write down a secret number and ask your friend to guess what the number is. When your friend makes a guess, you provide a hint with the following info: Given the secret number secret and your friend\'s guess guess, return the hint for your friend\'s guess. The hint should be formatted as "xAyB", where x is the number of bulls and y is the number of cows. Note that both secret and guess may contain duplicate digits. ',
  },
  {
    question_title: 'Longest Increasing Subsequence',
    question_text:
      'Given an integer array nums, return the length of the longest strictly increasing subsequence. A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7]. ',
  },
  {
    question_title: 'Remove Invalid Parentheses',
    question_text:
      'Given a string s that contains parentheses and letters, remove the minimum number of invalid parentheses to make the input string valid. Return all the possible results. You may return the answer in any order. ',
  },
  {
    question_title: 'Range Sum Query - Immutable',
    question_text:
      'Given an integer array nums, handle multiple queries of the following type: Implement the NumArray class: ',
  },
  {
    question_title: 'Range Sum Query 2D - Immutable',
    question_text:
      'Given a 2D matrix matrix, handle multiple queries of the following type: Implement the NumMatrix class: ',
  },
  {
    question_title: 'Additive Number',
    question_text:
      'An additive number is a string whose digits can form an additive sequence. A valid additive sequence should contain at least three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two. Given a string containing only digits, return true if it is an additive number or false otherwise. Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid. ',
  },
  {
    question_title: 'Range Sum Query - Mutable',
    question_text:
      'Given an integer array nums, handle multiple queries of the following types: Implement the NumArray class: ',
  },
  {
    question_title: 'Best Time to Buy and Sell Stock with Cooldown',
    question_text:
      'You are given an array prices where prices[i] is the price of a given stock on the ith day. Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions: Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again). ',
  },
  {
    question_title: 'Minimum Height Trees',
    question_text:
      "A tree is an undirected graph in which any two vertices are connected by\xa0exactly\xa0one path. In other words, any connected graph without simple cycles is a tree. Given a tree of n nodes\xa0labelled from 0 to n - 1, and an array of\xa0n - 1\xa0edges where edges[i] = [ai, bi] indicates that there is an undirected edge between the two nodes\xa0ai and\xa0bi in the tree,\xa0you can choose any node of the tree as the root. When you select a node x as the root, the result tree has height h. Among all possible rooted trees, those with minimum height (i.e. min(h))\xa0 are called minimum height trees (MHTs). Return a list of all MHTs' root labels.\xa0You can return the answer in any order. The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf. ",
  },
  {
    question_title: 'Burst Balloons',
    question_text:
      'You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with a number on it represented by an array nums. You are asked to burst all the balloons. If you burst the ith balloon, you will get nums[i - 1] * nums[i] * nums[i + 1] coins. If i - 1 or i + 1 goes out of bounds of the array, then treat it as if there is a balloon with a 1 painted on it. Return the maximum coins you can collect by bursting the balloons wisely. ',
  },
  {
    question_title: 'Super Ugly Number',
    question_text:
      'A super ugly number is a positive integer whose prime factors are in the array primes. Given an integer n and an array of integers primes, return the nth super ugly number. The nth super ugly number is guaranteed to fit in a 32-bit signed integer. ',
  },
  {
    question_title: 'Count of Smaller Numbers After Self',
    question_text:
      'You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i]. ',
  },
  {
    question_title: 'Remove Duplicate Letters',
    question_text:
      'Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results. ',
  },
  {
    question_title: 'Maximum Product of Word Lengths',
    question_text:
      'Given a string array words, return the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. If no such two words exist, return 0. ',
  },
  {
    question_title: 'Bulb Switcher',
    question_text:
      "There are n bulbs that are initially off. You first turn on all the bulbs, then\xa0you turn off every second bulb. On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For the ith round, you toggle every i bulb. For the nth round, you only toggle the last bulb. Return the number of bulbs that are on after n rounds. ",
  },
  {
    question_title: 'Create Maximum Number',
    question_text:
      'You are given two integer arrays nums1 and nums2 of lengths m and n respectively. nums1 and nums2 represent the digits of two numbers. You are also given an integer k. Create the maximum number of length k <= m + n from digits of the two numbers. The relative order of the digits from the same array must be preserved. Return an array of the k digits representing the answer. ',
  },
  {
    question_title: 'Coin Change',
    question_text:
      'You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1. You may assume that you have an infinite number of each kind of coin. ',
  },
  {
    question_title: 'Wiggle Sort II',
    question_text:
      'Given an integer array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3].... You may assume the input array always has a valid answer. ',
  },
  {
    question_title: 'Power of Three',
    question_text:
      'Given an integer n, return true if it is a power of three. Otherwise, return false. An integer n is a power of three, if there exists an integer x such that n == 3x. ',
  },
  {
    question_title: 'Count of Range Sum',
    question_text:
      'Given an integer array nums and two integers lower and upper, return the number of range sums that lie in [lower, upper] inclusive. Range sum S(i, j) is defined as the sum of the elements in nums between indices i and j inclusive, where i <= j. ',
  },
  {
    question_title: 'Longest Increasing Path in a Matrix',
    question_text:
      'Given an m x n integers matrix, return the length of the longest increasing path in matrix. From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed). ',
  },
  {
    question_title: 'Patching Array',
    question_text:
      'Given a sorted integer array nums and an integer n, add/patch elements to the array such that any number in the range [1, n] inclusive can be formed by the sum of some elements in the array. Return the minimum number of patches required. ',
  },
  {
    question_title: 'Verify Preorder Serialization of a Binary Tree',
    question_text:
      "One way to serialize a binary tree is to use preorder traversal. When we encounter a non-null node, we record the node's value. If it is a null node, we record using a sentinel value such as '#'. For example, the above binary tree can be serialized to the string \"9,3,4,#,#,1,#,#,2,#,6,#,#\", where '#' represents a null node. Given a string of comma-separated values preorder, return true if it is a correct preorder traversal serialization of a binary tree. It is guaranteed that each comma-separated value in the string must be either an integer or a character '#' representing null pointer. You may assume that the input format is always valid. Note:\xa0You are not allowed to reconstruct the tree. ",
  },
  {
    question_title: 'Reconstruct Itinerary',
    question_text:
      'You are given a list of airline tickets where tickets[i] = [fromi, toi] represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it. All of the tickets belong to a man who departs from "JFK", thus, the itinerary must begin with "JFK". If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once. ',
  },
  {
    question_title: 'Increasing Triplet Subsequence',
    question_text:
      'Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false. ',
  },
  {
    question_title: 'Self Crossing',
    question_text:
      'You are given an array of integers distance. You start at point (0,0) on an X-Y plane and you move distance[0] meters to the north, then distance[1] meters to the west, distance[2] meters to the south, distance[3] meters to the east, and so on. In other words, after each move, your direction changes counter-clockwise. Return true if your path crosses itself, and false if it does not. ',
  },
  {
    question_title: 'Palindrome Pairs',
    question_text:
      'Given a list of unique words, return all the pairs of the\xa0distinct indices (i, j) in the given list, so that the concatenation of the two words\xa0words[i] + words[j] is a palindrome. ',
  },
  {
    question_title: 'House Robber III',
    question_text:
      'The thief has found himself a new place for his thievery again. There is only one entrance to this area, called root. Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that all houses in this place form a binary tree. It will automatically contact the police if two directly-linked houses were broken into on the same night. Given the root of the binary tree, return the maximum amount of money the thief can rob without alerting the police. ',
  },
  {
    question_title: 'Counting Bits',
    question_text:
      "Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i. ",
  },
  {
    question_title: 'Flatten Nested List Iterator',
    question_text:
      'You are given a nested list of integers nestedList. Each element is either an integer or a list whose elements may also be integers or other lists. Implement an iterator to flatten it. Implement the NestedIterator class: Your code will be tested with the following pseudocode: If res matches the expected flattened list, then your code will be judged as correct. ',
  },
  {
    question_title: 'Power of Four',
    question_text:
      'Given an integer n, return true if it is a power of four. Otherwise, return false. An integer n is a power of four, if there exists an integer x such that n == 4x. ',
  },
  {
    question_title: 'Integer Break',
    question_text:
      'Given an integer n, break it into the sum of k positive integers, where k >= 2, and maximize the product of those integers. Return the maximum product you can get. ',
  },
  {
    question_title: 'Reverse String',
    question_text:
      'Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1) extra memory. ',
  },
  {
    question_title: 'Reverse Vowels of a String',
    question_text:
      "Given a string s, reverse only all the vowels in the string and return it. The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases. ",
  },
  {
    question_title: 'Top K Frequent Elements',
    question_text:
      'Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order. ',
  },
  {
    question_title: 'Intersection of Two Arrays',
    question_text:
      'Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order. ',
  },
  {
    question_title: 'Intersection of Two Arrays II',
    question_text:
      'Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order. ',
  },
  {
    question_title: 'Data Stream as Disjoint Intervals',
    question_text:
      'Given a data stream input of non-negative integers a1, a2, ..., an, summarize the numbers seen so far as a list of disjoint intervals. Implement the SummaryRanges class: ',
  },
  {
    question_title: 'Russian Doll Envelopes',
    question_text:
      "You are given a 2D array of integers envelopes where envelopes[i] = [wi, hi] represents the width and the height of an envelope. One envelope can fit into another if and only if both the width and height of one envelope are greater than the other envelope's width and height. Return the maximum number of envelopes you can Russian doll (i.e., put one inside the other). Note: You cannot rotate an envelope. ",
  },
  {
    question_title: 'Design Twitter',
    question_text:
      "Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and is able to see the 10 most recent tweets in the user's news feed. Implement the Twitter class: ",
  },
  {
    question_title: 'Count Numbers with Unique Digits',
    question_text:
      'Given an integer n, return the count of all numbers with unique digits, x, where 0 <= x < 10n. ',
  },
  {
    question_title: 'Max Sum of Rectangle No Larger Than K',
    question_text:
      'Given an m x n matrix matrix and an integer k, return the max sum of a rectangle in the matrix such that its sum is no larger than k. It is guaranteed that there will be a rectangle with a sum no larger than k. ',
  },
  {
    question_title: 'Water and Jug Problem',
    question_text:
      'You are given two jugs with capacities jug1Capacity and jug2Capacity liters. There is an infinite amount of water supply available. Determine whether it is possible to measure exactly targetCapacity liters using these two jugs. If targetCapacity liters of water are measurable, you must have targetCapacity liters of water contained within one or both buckets by the end. Operations allowed: ',
  },
  {
    question_title: 'Valid Perfect Square',
    question_text:
      'Given a positive integer num, write a function which returns True if num is a perfect square else False. Follow up: Do not use any built-in library function such as sqrt. ',
  },
  {
    question_title: 'Largest Divisible Subset',
    question_text:
      'Given a set of distinct positive integers nums, return the largest subset answer such that every pair (answer[i], answer[j]) of elements in this subset satisfies: If there are multiple solutions, return any of them. ',
  },
  {
    question_title: 'Sum of Two Integers',
    question_text:
      'Given two integers a and b, return the sum of the two integers without using the operators + and -. ',
  },
  {
    question_title: 'Super Pow',
    question_text:
      'Your task is to calculate ab mod 1337 where a is a positive integer and b is an extremely large positive integer given in the form of an array. ',
  },
  {
    question_title: 'Find K Pairs with Smallest Sums',
    question_text:
      'You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k. Define a pair (u, v) which consists of one element from the first array and one element from the second array. Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums. ',
  },
  {
    question_title: 'Guess Number Higher or Lower',
    question_text:
      'We are playing the Guess Game. The game is as follows: I pick a number from 1 to n. You have to guess which number I picked. Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess. You call a pre-defined API int guess(int num), which returns three possible results: Return the number that I picked. ',
  },
  {
    question_title: 'Guess Number Higher or Lower II',
    question_text:
      'We are playing the Guessing Game. The game will work as follows: Given a particular\xa0n, return\xa0the minimum amount of money you need to\xa0guarantee a win regardless of what number I pick. ',
  },
  {
    question_title: 'Wiggle Subsequence',
    question_text:
      'A wiggle sequence is a sequence where the differences between successive numbers strictly alternate between positive and negative. The first difference (if one exists) may be either positive or negative. A sequence with one element and a sequence with two non-equal elements are trivially wiggle sequences. A subsequence is obtained by deleting some elements (possibly zero) from the original sequence, leaving the remaining elements in their original order. Given an integer array nums, return the length of the longest wiggle subsequence of nums. ',
  },
  {
    question_title: 'Combination Sum IV',
    question_text:
      'Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to\xa0target. The test cases are generated so that the answer can fit in a 32-bit integer. ',
  },
  {
    question_title: 'Kth Smallest Element in a Sorted Matrix',
    question_text:
      'Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth smallest element in the matrix. Note that it is the kth smallest element in the sorted order, not the kth distinct element. You must find a solution with a memory complexity better than O(n2). ',
  },
  {
    question_title: 'Insert Delete GetRandom O(1)',
    question_text:
      'Implement the RandomizedSet class: You must implement the functions of the class such that each function works in\xa0average\xa0O(1)\xa0time complexity. ',
  },
  {
    question_title: 'Insert Delete GetRandom O(1) - Duplicates allowed',
    question_text:
      'RandomizedCollection is a data structure that contains a collection of numbers, possibly duplicates (i.e., a multiset). It should support inserting and removing specific elements and also removing a random element. Implement the RandomizedCollection class: You must implement the functions of the class such that each function works on average O(1) time complexity. Note: The test cases are generated such that getRandom will only be called if there is at least one item in the RandomizedCollection. ',
  },
  {
    question_title: 'Linked List Random Node',
    question_text:
      "Given a singly linked list, return a random node's value from the linked list. Each node must have the same probability of being chosen. Implement the Solution class: ",
  },
  {
    question_title: 'Ransom Note',
    question_text:
      'Given two strings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise. Each letter in magazine can only be used once in ransomNote. ',
  },
  {
    question_title: 'Shuffle an Array',
    question_text:
      'Given an integer array nums, design an algorithm to randomly shuffle the array. All permutations of the array should be equally likely as a result of the shuffling. Implement the Solution class: ',
  },
  {
    question_title: 'Mini Parser',
    question_text:
      'Given a string s represents the serialization of a nested list, implement a parser to deserialize it and return the deserialized NestedInteger. Each element is either an integer or a list whose elements may also be integers or other lists. ',
  },
  {
    question_title: 'Lexicographical Numbers',
    question_text:
      'Given an integer n, return all the numbers in the range [1, n] sorted in lexicographical order. You must write an algorithm that runs in\xa0O(n)\xa0time and uses O(1) extra space. ',
  },
  {
    question_title: 'First Unique Character in a String',
    question_text:
      'Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1. ',
  },
  {
    question_title: 'Longest Absolute File Path',
    question_text:
      "Suppose we have a file system that stores both files and directories. An example of one system is represented in the following picture:  Here, we have dir as the only directory in the root. dir contains two subdirectories, subdir1 and subdir2. subdir1 contains a file file1.ext and subdirectory subsubdir1. subdir2 contains a subdirectory subsubdir2, which contains a file file2.ext. In text form, it looks like this (with ⟶ representing the tab character): If we were to write this representation in code, it will look like this: \"dir\\n\\tsubdir1\\n\\t\\tfile1.ext\\n\\t\\tsubsubdir1\\n\\tsubdir2\\n\\t\\tsubsubdir2\\n\\t\\t\\tfile2.ext\". Note that the '\\n' and '\\t' are the new-line and tab characters. Every file and directory has a unique absolute path in the file system, which is the order of directories that must be opened to reach the file/directory itself, all concatenated by '/'s. Using the above example, the absolute path to file2.ext is \"dir/subdir2/subsubdir2/file2.ext\". Each directory name consists of letters, digits, and/or spaces. Each file name is of the form name.extension, where name and extension consist of letters, digits, and/or spaces. Given a string input representing the file system in the explained format, return the length of the longest absolute path to a file in the abstracted file system. If there is no file in the system, return 0. ",
  },
  {
    question_title: 'Find the Difference',
    question_text:
      'You are given two strings s and t. String t is generated by random shuffling string s and then add one more letter at a random position. Return the letter that was added to t. ',
  },
  {
    question_title: 'Elimination Game',
    question_text:
      'You have a list arr of all integers in the range [1, n] sorted in a strictly increasing order. Apply the following algorithm on arr: Given the integer n, return the last number that remains in arr. ',
  },
  {
    question_title: 'Perfect Rectangle',
    question_text:
      'Given an array rectangles where rectangles[i] = [xi, yi, ai, bi] represents an axis-aligned rectangle. The bottom-left point of the rectangle is (xi, yi) and the top-right point of it is (ai, bi). Return true if all the rectangles together form an exact cover of a rectangular region. ',
  },
  {
    question_title: 'Is Subsequence',
    question_text:
      'Given two strings s and t, return true if s is a subsequence of t, or false otherwise. A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not). ',
  },
  {
    question_title: 'UTF-8 Validation',
    question_text:
      'Given an integer array data representing the data, return whether it is a valid UTF-8 encoding (i.e. it translates to a sequence of valid UTF-8 encoded characters). A character in UTF8 can be from 1 to 4 bytes long, subjected to the following rules: This is how the UTF-8 encoding would work: x denotes a bit in the binary form of a byte that may be either 0 or 1. Note: The input is an array of integers. Only the least significant 8 bits of each integer is used to store the data. This means each integer represents only 1 byte of data. ',
  },
  {
    question_title: 'Decode String',
    question_text:
      'Given an encoded string, return its decoded string. The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer. You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4]. ',
  },
  {
    question_title: 'Longest Substring with At Least K Repeating Characters',
    question_text:
      'Given a string s and an integer k, return the length of the longest substring of s such that the frequency of each character in this substring is greater than or equal to k. ',
  },
  {
    question_title: 'Rotate Function',
    question_text:
      'You are given an integer array nums of length n. Assume arrk to be an array obtained by rotating nums by k positions clock-wise. We define the rotation function F on nums as follow: Return the maximum value of F(0), F(1), ..., F(n-1). The test cases are generated so that the answer fits in a 32-bit integer. ',
  },
  {
    question_title: 'Integer Replacement',
    question_text:
      'Given a positive integer n,\xa0you can apply one of the following\xa0operations: Return the minimum number of operations needed for n to become 1. ',
  },
  {
    question_title: 'Random Pick Index',
    question_text:
      'Given an integer array nums with possible duplicates, randomly output the index of a given target number. You can assume that the given target number must exist in the array. Implement the Solution class: ',
  },
  {
    question_title: 'Evaluate Division',
    question_text:
      'You are given an array of variable pairs equations and an array of real numbers values, where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i]. Each Ai or Bi is a string that represents a single variable. You are also given some queries, where queries[j] = [Cj, Dj] represents the jth query where you must find the answer for Cj / Dj = ?. Return the answers to all queries. If a single answer cannot be determined, return -1.0. Note: The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction. ',
  },
  {
    question_title: 'Nth Digit',
    question_text:
      'Given an integer n, return the nth digit of the infinite integer sequence [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...]. ',
  },
  {
    question_title: 'Remove K Digits',
    question_text:
      'Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num. ',
  },
  {
    question_title: 'Frog Jump',
    question_text:
      "A frog is crossing a river. The river is divided into some number of units, and at each unit, there may or may not exist a stone. The frog can jump on a stone, but it must not jump into the water. Given a list of stones' positions (in units) in sorted ascending order, determine if the frog can cross the river by landing on the last stone. Initially, the frog is on the first stone and assumes the first jump must be 1 unit. If the frog's last jump was k units, its next jump must be either k - 1, k, or k + 1 units. The frog can only jump in the forward direction. ",
  },
  {
    question_title: 'Sum of Left Leaves',
    question_text:
      'Given the root of a binary tree, return the sum of all left leaves. A leaf is a node with no children. A left leaf is a leaf that is the left child of another node. ',
  },
  {
    question_title: 'Convert a Number to Hexadecimal',
    question_text:
      'Given an integer num, return a string representing its hexadecimal representation. For negative integers, two’s complement method is used. All the letters in the answer string should be lowercase characters, and there should not be any leading zeros in the answer except for the zero itself. Note:\xa0You are not allowed to use any built-in library method to directly solve this problem. ',
  },
  {
    question_title: 'Queue Reconstruction by Height',
    question_text:
      'You are given an array of people, people, which are the attributes of some people in a queue (not necessarily in order). Each people[i] = [hi, ki] represents the ith person of height hi with exactly ki other people in front who have a height greater than or equal to hi. Reconstruct and return the queue that is represented by the input array people. The returned queue should be formatted as an array queue, where queue[j] = [hj, kj] is the attributes of the jth person in the queue (queue[0] is the person at the front of the queue). ',
  },
  {
    question_title: 'Trapping Rain Water II',
    question_text:
      'Given an m x n integer matrix heightMap representing the height of each unit cell in a 2D elevation map, return the volume of water it can trap after raining. ',
  },
  {
    question_title: 'Longest Palindrome',
    question_text:
      'Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome\xa0that can be built with those letters. Letters are case sensitive, for example,\xa0"Aa" is not considered a palindrome here. ',
  },
  {
    question_title: 'Split Array Largest Sum',
    question_text:
      'Given an array nums which consists of non-negative integers and an integer m, you can split the array into m non-empty continuous subarrays. Write an algorithm to minimize the largest sum among these m subarrays. ',
  },
  {
    question_title: 'Fizz Buzz',
    question_text: 'Given an integer n, return a string array answer (1-indexed) where: ',
  },
  {
    question_title: 'Arithmetic Slices',
    question_text:
      'An integer array is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same. Given an integer array nums, return the number of arithmetic subarrays of nums. A subarray is a contiguous subsequence of the array. ',
  },
  {
    question_title: 'Third Maximum Number',
    question_text:
      'Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number. ',
  },
  {
    question_title: 'Add Strings',
    question_text:
      'Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string. You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly. ',
  },
  {
    question_title: 'Partition Equal Subset Sum',
    question_text:
      'Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal. ',
  },
  {
    question_title: 'Pacific Atlantic Water Flow',
    question_text:
      "There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges. The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c). The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean. Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans. ",
  },
  {
    question_title: 'Battleships in a Board',
    question_text:
      "Given an m x n matrix board where each cell is a battleship 'X' or empty '.', return the number of the battleships on board. Battleships can only be placed horizontally or vertically on board. In other words, they can only be made of the shape 1 x k (1 row, k columns) or k x 1 (k rows, 1 column), where k can be of any size. At least one horizontal or vertical cell separates between two battleships (i.e., there are no adjacent battleships). ",
  },
  {
    question_title: 'Strong Password Checker',
    question_text:
      'A password is considered strong if the below conditions are all met: Given a string password, return the minimum number of steps required to make password strong. if password is already strong, return 0. In one step, you can: ',
  },
  {
    question_title: 'Maximum XOR of Two Numbers in an Array',
    question_text:
      'Given an integer array nums, return the maximum result of nums[i] XOR nums[j], where 0 <= i <= j < n. ',
  },
  {
    question_title: 'Reconstruct Original Digits from English',
    question_text:
      'Given a string s containing an out-of-order English representation of digits 0-9, return the digits in ascending order. ',
  },
  {
    question_title: 'Longest Repeating Character Replacement',
    question_text:
      'You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times. Return the length of the longest substring containing the same letter you can get after performing the above operations. ',
  },
  {
    question_title: 'All O`one Data Structure',
    question_text:
      "Design a data structure to store the strings' count with the ability to return the strings with minimum and maximum counts. Implement the AllOne class: ",
  },
  {
    question_title: 'Minimum Genetic Mutation',
    question_text:
      "A gene string can be represented by an 8-character long string, with choices from 'A', 'C', 'G', and 'T'. Suppose we need to investigate a mutation from a gene string start to a gene string end where one mutation is defined as one single character changed in the gene string. There is also a gene bank bank that records all the valid gene mutations. A gene must be in bank to make it a valid gene string. Given the two gene strings start and end and the gene bank bank, return the minimum number of mutations needed to mutate from start to end. If there is no such a mutation, return -1. Note that the starting point is assumed to be valid, so it might not be included in the bank. ",
  },
  {
    question_title: 'Number of Segments in a String',
    question_text:
      'Given a string s, return the number of segments in the string. A segment is defined to be a contiguous sequence of non-space characters. ',
  },
  {
    question_title: 'Non-overlapping Intervals',
    question_text:
      'Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping. ',
  },
  {
    question_title: 'Find Right Interval',
    question_text:
      'You are given an array of intervals, where intervals[i] = [starti, endi] and each starti is unique. The right interval for an interval i is an interval j such that startj >= endi and startj is minimized. Note that i may equal j. Return an array of right interval indices for each interval i. If no right interval exists for interval i, then put -1 at index i. ',
  },
  {
    question_title: 'Path Sum III',
    question_text:
      'Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values\xa0along the path equals\xa0targetSum. The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes). ',
  },
  {
    question_title: 'Find All Anagrams in a String',
    question_text:
      "Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. ",
  },
  {
    question_title: 'Arranging Coins',
    question_text:
      'You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete. Given the integer n, return the number of complete rows of the staircase you will build. ',
  },
  {
    question_title: 'Find All Duplicates in an Array',
    question_text:
      'Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice. You must write an algorithm that runs in\xa0O(n)\xa0time and uses only constant extra space. ',
  },
  {
    question_title: 'String Compression',
    question_text:
      'Given an array of characters chars, compress it using the following algorithm: Begin with an empty string s. For each group of consecutive repeating characters in chars: The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars. After you are done modifying the input array, return the new length of the array. You must write an algorithm that uses only constant extra space. ',
  },
  {
    question_title: 'Add Two Numbers II',
    question_text:
      'You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself. ',
  },
  {
    question_title: 'Arithmetic Slices II - Subsequence',
    question_text:
      'Given an integer array nums, return the number of all the arithmetic subsequences of nums. A sequence of numbers is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same. A subsequence of an array is a sequence that can be formed by removing some elements (possibly none) of the array. The test cases are generated so that the answer fits in 32-bit integer. ',
  },
  {
    question_title: 'Number of Boomerangs',
    question_text:
      'You are given n points in the plane that are all distinct, where points[i] = [xi, yi]. A boomerang is a tuple of points (i, j, k) such that the distance between i and j equals the distance between i and k (the order of the tuple matters). Return the number of boomerangs. ',
  },
  {
    question_title: 'Find All Numbers Disappeared in an Array',
    question_text:
      'Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums. ',
  },
  {
    question_title: 'Serialize and Deserialize BST',
    question_text:
      'Serialization is converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment. Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your serialization/deserialization algorithm should work. You need to ensure that a binary search tree can be serialized to a string, and this string can be deserialized to the original tree structure. The encoded string should be as compact as possible. ',
  },
  {
    question_title: 'Sort Characters By Frequency',
    question_text:
      'Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string. Return the sorted string. If there are multiple answers, return any of them. ',
  },
  {
    question_title: 'Minimum Number of Arrows to Burst Balloons',
    question_text:
      'There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array points where points[i] = [xstart, xend] denotes a balloon whose horizontal diameter stretches between xstart and xend. You do not know the exact y-coordinates of the balloons. Arrows can be shot up directly vertically (in the positive y-direction) from different points along the x-axis. A balloon with xstart and xend is burst by an arrow shot at x if xstart <= x <= xend. There is no limit to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path. Given the array points, return the minimum number of arrows that must be shot to burst all balloons. ',
  },
  {
    question_title: 'Minimum Moves to Equal Array Elements',
    question_text:
      'Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal. In one move, you can increment n - 1 elements of the array by 1. ',
  },
  {
    question_title: '4Sum II',
    question_text:
      'Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return the number of tuples (i, j, k, l) such that: ',
  },
  {
    question_title: 'Assign Cookies',
    question_text:
      'Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie. Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number. ',
  },
  {
    question_title: '132 Pattern',
    question_text:
      'Given an array\xa0of n integers nums, a 132 pattern is a subsequence of three integers nums[i], nums[j] and nums[k] such that i < j < k and nums[i] < nums[k] < nums[j]. Return true if there is a 132 pattern in nums, otherwise, return false. ',
  },
  {
    question_title: 'Circular Array Loop',
    question_text:
      'You are playing a game involving a circular array of non-zero integers nums. Each nums[i] denotes the number of indices forward/backward you must move if you are located at index i: Since the array is circular, you may assume that moving forward from the last element puts you on the first element, and moving backwards from the first element puts you on the last element. A cycle in the array consists of a sequence of indices seq of length k where: Return true if there is a cycle in nums, or false otherwise. ',
  },
  {
    question_title: 'Poor Pigs',
    question_text:
      'There are buckets buckets of liquid, where exactly one of the buckets is poisonous. To figure out which one is poisonous, you feed some number of (poor) pigs the liquid to see whether they will die or not. Unfortunately, you only have minutesToTest minutes to determine which bucket is poisonous. You can feed the pigs according to these steps: Given buckets, minutesToDie, and minutesToTest, return the minimum number of pigs needed to figure out which bucket is poisonous within the allotted time. ',
  },
  {
    question_title: 'Repeated Substring Pattern',
    question_text:
      'Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. ',
  },
  {
    question_title: 'LFU Cache',
    question_text:
      'Design and implement a data structure for a Least Frequently Used (LFU) cache. Implement the LFUCache class: To determine the least frequently used key, a use counter is maintained for each key in the cache. The key with the smallest use counter is the least frequently used key. When a key is first inserted into the cache, its use counter is set to 1 (due to the put operation). The use counter for a key in the cache is incremented either a get or put operation is called on it. The functions\xa0get\xa0and\xa0put\xa0must each run in O(1) average time complexity. ',
  },
  {
    question_title: 'Minimum Moves to Equal Array Elements II',
    question_text:
      'Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal. In one move, you can increment or decrement an element of the array by 1. Test cases are designed so that the answer will fit in a 32-bit integer. ',
  },
  {
    question_title: 'Island Perimeter',
    question_text:
      "You are given row x col grid representing a map where grid[i][j] = 1 represents\xa0land and grid[i][j] = 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have \"lakes\", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island. ",
  },
  {
    question_title: 'Can I Win',
    question_text:
      'In the "100 game" two players take turns adding, to a running total, any integer from 1 to 10. The player who first causes the running total to reach or exceed 100 wins. What if we change the game so that players cannot re-use integers? For example, two players might take turns drawing from a common pool of numbers from 1 to 15 without replacement until they reach a total >= 100. Given two integers maxChoosableInteger and desiredTotal, return true if the first player to move can force a win, otherwise, return false. Assume both players play optimally. ',
  },
  {
    question_title: 'Count The Repetitions',
    question_text:
      'We define str = [s, n] as the string str which consists of the string s concatenated n times. We define that string s1 can be obtained from string s2 if we can remove some characters from s2 such that it becomes s1. You are given two strings s1 and s2 and two integers n1 and n2. You have the two strings str1 = [s1, n1] and str2 = [s2, n2]. Return the maximum integer m such that str = [str2, m] can be obtained from str1. ',
  },
  {
    question_title: 'Unique Substrings in Wraparound String',
    question_text:
      'We define the string s to be the infinite wraparound string of "abcdefghijklmnopqrstuvwxyz", so s will look like this: Given a string p, return the number of unique non-empty substrings of p are present in s. ',
  },
  {
    question_title: 'Validate IP Address',
    question_text:
      'Given a string queryIP, return "IPv4" if IP is a valid IPv4 address, "IPv6" if IP is a valid IPv6 address or "Neither" if IP is not a correct IP of any type. A valid IPv4 address is an IP in the form "x1.x2.x3.x4" where 0 <= xi <= 255 and xi cannot contain leading zeros. For example, "192.168.1.1" and "192.168.1.0" are valid IPv4 addresses but "192.168.01.1", while "192.168.1.00" and "192.168@1.1" are invalid IPv4 addresses. A valid IPv6 address is an IP in the form "x1:x2:x3:x4:x5:x6:x7:x8" where: For example, "2001:0db8:85a3:0000:0000:8a2e:0370:7334" and "2001:db8:85a3:0:0:8A2E:0370:7334" are valid IPv6 addresses, while "2001:0db8:85a3::8A2E:037j:7334" and "02001:0db8:85a3:0000:0000:8a2e:0370:7334" are invalid IPv6 addresses. ',
  },
  {
    question_title: 'Concatenated Words',
    question_text:
      'Given an array of strings words (without duplicates), return all the concatenated words in the given list of words. A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array. ',
  },
  {
    question_title: 'Matchsticks to Square',
    question_text:
      'You are given an integer array matchsticks where matchsticks[i] is the length of the ith matchstick. You want to use all the matchsticks to make one square. You should not break any stick, but you can link them up, and each matchstick must be used exactly one time. Return true if you can make this square and false otherwise. ',
  },
  {
    question_title: 'Ones and Zeroes',
    question_text:
      "You are given an array of binary strings strs and two integers m and n. Return the size of the largest subset of strs such that there are at most m 0's and n 1's in the subset. A set x is a subset of a set y if all elements of x are also elements of y. ",
  },
  {
    question_title: 'Heaters',
    question_text:
      "Winter is coming! During the contest, your first job is to design a standard heater with a fixed warm radius to warm all the houses. Every house can be warmed, as long as the house is within the heater's warm radius range. Given the positions of houses and heaters on a horizontal line, return the minimum radius standard of heaters\xa0so that those heaters could cover all houses. Notice that\xa0all the heaters follow your radius standard, and the warm radius will the same. ",
  },
  {
    question_title: 'Total Hamming Distance',
    question_text:
      'The Hamming distance between two integers is the number of positions at which the corresponding bits are different. Given an integer array nums, return the sum of Hamming distances between all the pairs of the integers in nums. ',
  },
  {
    question_title: 'Largest Palindrome Product',
    question_text:
      'Given an integer n, return the largest palindromic integer that can be represented as the product of two n-digits integers. Since the answer can be very large, return it modulo 1337. ',
  },
  {
    question_title: 'Sliding Window Median',
    question_text:
      'The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle values. You are given an integer array nums and an integer k. There is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the median array for each window in the original array. Answers within 10-5 of the actual value will be accepted. ',
  },
  {
    question_title: 'Magical String',
    question_text:
      "A magical string s consists of only '1' and '2' and obeys the following rules: The first few elements of s is s = \"1221121221221121122……\". If we group the consecutive 1's and 2's in s, it will be \"1 22 11 2 1 22 1 22 11 2 11 22 ......\" and the occurrences of 1's or 2's in each group are \"1 2 2 1 1 2 1 2 2 1 2 2 ......\". You can see that the occurrence sequence is s itself. Given an integer n, return the number of 1's in the first n number in the magical string s. ",
  },
  {
    question_title: 'License Key Formatting',
    question_text:
      'You are given a license key represented as a string s that consists of only alphanumeric characters and dashes. The string is separated into n + 1 groups by n dashes. You are also given an integer k. We want to reformat the string s such that each group contains exactly k characters, except for the first group, which could be shorter than k but still must contain at least one character. Furthermore, there must be a dash inserted between two groups, and you should convert all lowercase letters to uppercase. Return the reformatted license key. ',
  },
  {
    question_title: 'Smallest Good Base',
    question_text:
      "Given an integer n represented as a string, return the smallest good base of n. We call k >= 2 a good base of n, if all digits of n base k are 1's. ",
  },
  {
    question_title: 'Max Consecutive Ones',
    question_text:
      "Given a binary array nums, return the maximum number of consecutive 1's in the array. ",
  },
  {
    question_title: 'Predict the Winner',
    question_text:
      'You are given an integer array nums. Two players are playing a game with this array: player 1 and player 2. Player 1 and player 2 take turns, with player 1 starting first. Both players start the game with a score of 0. At each turn, the player takes one of the numbers from either end of the array (i.e., nums[0] or nums[nums.length - 1]) which reduces the size of the array by 1. The player adds the chosen number to their score. The game ends when there are no more elements in the array. Return true if Player 1 can win the game. If the scores of both players are equal, then player 1 is still the winner, and you should also return true. You may assume that both players are playing optimally. ',
  },
  {
    question_title: 'Zuma Game',
    question_text:
      "You are playing a variation of the game Zuma. In this variation of Zuma, there is a single row of colored balls on a board, where each ball can be colored red 'R', yellow 'Y', blue 'B', green 'G', or white 'W'. You also have several colored balls in your hand. Your goal is to clear all of the balls from the board. On each turn: Given a string board, representing the row of balls on the board, and a string hand, representing the balls in your hand, return the minimum number of balls you have to insert to clear all the balls from the board. If you cannot clear all the balls from the board using the balls in your hand, return -1. ",
  },
  {
    question_title: 'Kth Smallest Instructions',
    question_text:
      'Bob is standing at cell (0, 0), and he wants to reach destination: (row, column). He can only travel right and down. You are going to help Bob by providing instructions for him to reach destination. The instructions are represented as a string, where each character is either: Multiple instructions will lead Bob to destination. For example, if destination is (2, 3), both "HHHVV" and "HVHVH" are valid instructions. However, Bob is very picky. Bob has a lucky number k, and he wants the kth lexicographically smallest instructions that will lead him to destination. k is 1-indexed. Given an integer array destination and an integer k, return the kth lexicographically smallest instructions that will take Bob to destination. ',
  },
  {
    question_title: 'Increasing Subsequences',
    question_text:
      'Given an integer array nums, return all the different possible increasing subsequences of the given array with at least two elements. You may return the answer in any order. The given array may contain duplicates, and two equal integers should also be considered a special case of increasing sequence. ',
  },
  {
    question_title: 'Construct the Rectangle',
    question_text:
      "A web developer needs to know how to design a web page's size. So, given a specific rectangular web page’s area, your job by now is to design a rectangular web page, whose length L and width W satisfy the following requirements: Return an array [L, W] where L and W are the length and width of the\xa0web page you designed in sequence. ",
  },
  {
    question_title: 'Reverse Pairs',
    question_text:
      'Given an integer array nums, return the number of reverse pairs in the array. A reverse pair is a pair (i, j) where 0 <= i < j < nums.length and nums[i] > 2 * nums[j]. ',
  },
  {
    question_title: 'Target Sum',
    question_text:
      "You are given an integer array nums and an integer target. You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers. Return the number of different expressions that you can build, which evaluates to target. ",
  },
  {
    question_title: 'Teemo Attacking',
    question_text:
      'Our hero Teemo is attacking an enemy Ashe with poison attacks! When Teemo attacks Ashe, Ashe gets poisoned for a exactly duration seconds. More formally, an attack at second t will mean Ashe is poisoned during the inclusive time interval [t, t + duration - 1]. If Teemo attacks again before the poison effect ends, the timer for it is reset, and the poison effect will end duration seconds after the new attack. You are given a non-decreasing integer array timeSeries, where timeSeries[i] denotes that Teemo attacks Ashe at second timeSeries[i], and an integer duration. Return the total number of seconds that Ashe is poisoned. ',
  },
  {
    question_title: 'Next Greater Element I',
    question_text:
      'The next greater element of some element x in an array is the first greater element that is to the right of x in the same array. You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2. For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1. Return an array ans of length nums1.length such that ans[i] is the next greater element as described above. ',
  },
  {
    question_title: 'Diagonal Traverse',
    question_text:
      'Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order. ',
  },
  {
    question_title: 'Keyboard Row',
    question_text:
      'Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below. In the American keyboard: ',
  },
  {
    question_title: 'Find Mode in Binary Search Tree',
    question_text:
      'Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it. If the tree has more than one mode, return them in any order. Assume a BST is defined as follows: ',
  },
  {
    question_title: 'IPO',
    question_text:
      'Suppose LeetCode will start its IPO soon. In order to sell a good price of its shares to Venture Capital, LeetCode would like to work on some projects to increase its capital before the IPO. Since it has limited resources, it can only finish at most k distinct projects before the IPO. Help LeetCode design the best way to maximize its total capital after finishing at most k distinct projects. You are given n projects where the ith project has a pure profit profits[i] and a minimum capital of capital[i] is needed to start it. Initially, you have w capital. When you finish a project, you will obtain its pure profit and the profit will be added to your total capital. Pick a list of at most k distinct projects from given projects to maximize your final capital, and return the final maximized capital. The answer is guaranteed to fit in a 32-bit signed integer. ',
  },
  {
    question_title: 'Next Greater Element II',
    question_text:
      "Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums. The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number. ",
  },
  {
    question_title: 'Base 7',
    question_text: 'Given an integer num, return a string of its base 7 representation. ',
  },
  {
    question_title: 'Relative Ranks',
    question_text:
      'You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique. The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank: Return an array answer of size n where answer[i] is the rank of the ith athlete. ',
  },
  {
    question_title: 'Perfect Number',
    question_text:
      'A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly. Given an integer n, return true if n is a perfect number, otherwise return false. ',
  },
  {
    question_title: 'Most Frequent Subtree Sum',
    question_text:
      'Given the root of a binary tree, return the most frequent subtree sum. If there is a tie, return all the values with the highest frequency in any order. The subtree sum of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself). ',
  },
  {
    question_title: 'Find Bottom Left Tree Value',
    question_text:
      'Given the root of a binary tree, return the leftmost value in the last row of the tree. ',
  },
  {
    question_title: 'Freedom Trail',
    question_text:
      'In the video game Fallout 4, the quest "Road to Freedom" requires players to reach a metal dial called the "Freedom Trail Ring" and use the dial to spell a specific keyword to open the door. Given a string ring that represents the code engraved on the outer ring and another string key that represents the keyword that needs to be spelled, return the minimum number of steps to spell all the characters in the keyword. Initially, the first character of the ring is aligned at the "12:00" direction. You should spell all the characters in key one by one by rotating ring clockwise or anticlockwise to make each character of the string key aligned at the "12:00" direction and then by pressing the center button. At the stage of rotating the ring to spell the key character key[i]: ',
  },
  {
    question_title: 'Find Largest Value in Each Tree Row',
    question_text:
      'Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed). ',
  },
  {
    question_title: 'Longest Palindromic Subsequence',
    question_text:
      "Given a string s, find the longest palindromic subsequence's length in s. A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements. ",
  },
  {
    question_title: 'Super Washing Machines',
    question_text:
      'You have n super washing machines on a line. Initially, each washing machine has some dresses or is empty. For each move, you could choose any m (1 <= m <= n) washing machines, and pass one dress of each washing machine to one of its adjacent washing machines at the same time. Given an integer array machines representing the number of dresses in each washing machine from left to right on the line, return the minimum number of moves to make all the washing machines have the same number of dresses. If it is not possible to do it, return -1. ',
  },
  {
    question_title: 'Coin Change 2',
    question_text:
      'You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0. You may assume that you have an infinite number of each kind of coin. The answer is guaranteed to fit into a signed 32-bit integer. ',
  },
  {
    question_title: 'Detect Capital',
    question_text:
      'We define the usage of capitals in a word to be right when one of the following cases holds: Given a string word, return true if the usage of capitals in it is right. ',
  },
  {
    question_title: 'Longest Uncommon Subsequence I',
    question_text:
      'Given two strings a and b, return the length of the longest uncommon subsequence between a and b. If the longest uncommon subsequence does not exist, return -1. An uncommon subsequence between two strings is a string that is a subsequence of one but not the other. A subsequence of a string s is a string that can be obtained after deleting any number of characters from s. ',
  },
  {
    question_title: 'Longest Uncommon Subsequence II',
    question_text:
      'Given an array of strings strs, return the length of the longest uncommon subsequence between them. If the longest uncommon subsequence does not exist, return -1. An uncommon subsequence between an array of strings is a string that is a subsequence of one string but not the others. A subsequence of a string s is a string that can be obtained after deleting any number of characters from s. ',
  },
  {
    question_title: 'Continuous Subarray Sum',
    question_text:
      'Given an integer array nums and an integer k, return true if nums has a continuous subarray of size at least two whose elements sum up to a multiple of k, or false otherwise. An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k. ',
  },
  {
    question_title: 'Longest Word in Dictionary through Deleting',
    question_text:
      'Given a string s and a string array dictionary, return the longest string in the dictionary that can be formed by deleting some of the given string characters. If there is more than one possible result, return the longest word with the smallest lexicographical order. If there is no possible result, return the empty string. ',
  },
  {
    question_title: 'Contiguous Array',
    question_text:
      'Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1. ',
  },
  {
    question_title: 'Beautiful Arrangement',
    question_text:
      'Suppose you have n integers labeled 1 through n. A permutation of those n integers perm (1-indexed) is considered a beautiful arrangement if for every i (1 <= i <= n), either of the following is true: Given an integer n, return the number of the beautiful arrangements that you can construct. ',
  },
  {
    question_title: 'Minesweeper',
    question_text:
      "Let's play the minesweeper game (Wikipedia, online game)! You are given an m x n char matrix board representing the game board where: You are also given an integer array click where click = [clickr, clickc] represents the next click position among all the unrevealed squares ('M' or 'E'). Return the board after revealing this position according to the following rules: ",
  },
  {
    question_title: 'Minimum Absolute Difference in BST',
    question_text:
      'Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree. ',
  },
  {
    question_title: 'K-diff Pairs in an Array',
    question_text:
      'Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array. A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true: Notice that |val| denotes the absolute value of val. ',
  },
  {
    question_title: 'Encode and Decode TinyURL',
    question_text:
      'TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk. Design a class to encode a URL and decode a tiny URL. There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL. Implement the Solution class: ',
  },
  {
    question_title: 'Complex Number Multiplication',
    question_text:
      'A complex number can be represented as a string on the form "real+imaginaryi" where: Given two complex numbers num1 and num2 as strings, return a string of the complex number that represents their multiplications. ',
  },
  {
    question_title: 'Convert BST to Greater Tree',
    question_text:
      'Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus the sum of all keys greater than the original key in BST. As a reminder, a binary search tree is a tree that satisfies these constraints: ',
  },
  {
    question_title: 'Single Element in a Sorted Array',
    question_text:
      'You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Return the single element that appears only once. Your solution must run in O(log n) time and O(1) space. ',
  },
  {
    question_title: 'Reverse String II',
    question_text:
      'Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string. If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original. ',
  },
  {
    question_title: '01 Matrix',
    question_text:
      'Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell. The distance between two adjacent cells is 1. ',
  },
  {
    question_title: 'Diameter of Binary Tree',
    question_text:
      'Given the root of a binary tree, return the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root. The length of a path between two nodes is represented by the number of edges between them. ',
  },
  {
    question_title: 'Remove Boxes',
    question_text:
      'You are given several boxes with different colors represented by different positive numbers. You may experience several rounds to remove boxes until there is no box left. Each time you can choose some continuous boxes with the same color (i.e., composed of k boxes, k >= 1), remove them and get k * k points. Return the maximum points you can get. ',
  },
  {
    question_title: 'Number of Provinces',
    question_text:
      'There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c. A province is a group of directly or indirectly connected cities and no other cities outside of the group. You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise. Return the total number of provinces. ',
  },
  {
    question_title: 'Student Attendance Record I',
    question_text:
      'You are given a string s representing an attendance record for a student where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters: The student is eligible for an attendance award if they meet both of the following criteria: Return true if the student is eligible for an attendance award, or false otherwise. ',
  },
  {
    question_title: 'Student Attendance Record II',
    question_text:
      'An attendance record for a student can be represented as a string where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters: Any student is eligible for an attendance award if they meet both of the following criteria: Given an integer n, return the number of possible attendance records of length n that make a student eligible for an attendance award. The answer may be very large, so return it modulo 109 + 7. ',
  },
  {
    question_title: 'Optimal Division',
    question_text:
      'You are given an integer array nums. The adjacent integers in nums will perform the float division. However, you can add any number of parenthesis at any position to change the priority of operations. You want to add these parentheses such the value of the expression after the evaluation is maximum. Return the corresponding expression that has the maximum value in string format. Note: your expression should not contain redundant parenthesis. ',
  },
  {
    question_title: 'Brick Wall',
    question_text:
      'There is a rectangular brick wall in front of you with n rows of bricks. The ith row has some number of bricks each of the same height (i.e., one unit) but they can be of different widths. The total width of each row is the same. Draw a vertical line from the top to the bottom and cross the least bricks. If your line goes through the edge of a brick, then the brick is not considered as crossed. You cannot draw a line just along one of the two vertical edges of the wall, in which case the line will obviously cross no bricks. Given the 2D array wall that contains the information about the wall, return the minimum number of crossed bricks after drawing such a vertical line. ',
  },
  {
    question_title: 'Next Greater Element III',
    question_text:
      'Given a positive integer n, find the smallest integer which has exactly the same digits existing in the integer n and is greater in value than n. If no such positive integer exists, return -1. Note that the returned integer should fit in 32-bit integer, if there is a valid answer but it does not fit in 32-bit integer, return -1. ',
  },
  {
    question_title: 'Reverse Words in a String III',
    question_text:
      'Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order. ',
  },
  {
    question_title: 'Subarray Sum Equals K',
    question_text:
      'Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k. ',
  },
  {
    question_title: 'Array Partition I',
    question_text:
      'Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum. ',
  },
  {
    question_title: 'Binary Tree Tilt',
    question_text:
      "Given the root of a binary tree, return the sum of every tree node's tilt. The tilt of a tree node is the absolute difference between the sum of all left subtree node values and all right subtree node values. If a node does not have a left child, then the sum of the left subtree node values is treated as 0. The rule is similar if the node does not have a right child. ",
  },
  {
    question_title: 'Find the Closest Palindrome',
    question_text:
      'Given a string n representing an integer, return the closest integer (not including itself), which is a palindrome. If there is a tie, return the smaller one. The closest is defined as the absolute difference minimized between two integers. ',
  },
  {
    question_title: 'Array Nesting',
    question_text:
      'You are given an integer array nums of length n where nums is a permutation of the numbers in the range [0, n - 1]. You should build a set s[k] = {nums[k], nums[nums[k]], nums[nums[nums[k]]], ... } subjected to the following rule: Return the longest length of a set s[k]. ',
  },
  {
    question_title: 'Reshape the Matrix',
    question_text:
      'In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data. You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix. The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were. If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix. ',
  },
  {
    question_title: 'Permutation in String',
    question_text:
      "Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise. In other words, return true if one of s1's permutations is the substring of s2. ",
  },
  {
    question_title: 'Subtree of Another Tree',
    question_text:
      "Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise. A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself. ",
  },
  {
    question_title: 'Distribute Candies',
    question_text:
      "Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor. The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice. Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them. ",
  },
  {
    question_title: 'Out of Boundary Paths',
    question_text:
      'There is an m x n grid with a ball. The ball is initially at the position [startRow, startColumn]. You are allowed to move the ball to one of the four adjacent cells in the grid (possibly out of the grid crossing the grid boundary). You can apply at most maxMove moves to the ball. Given the five integers m, n, maxMove, startRow, startColumn, return the number of paths to move the ball out of the grid boundary. Since the answer can be very large, return it modulo 109 + 7. ',
  },
  {
    question_title: 'Shortest Unsorted Continuous Subarray',
    question_text:
      'Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order. Return the shortest such subarray and output its length. ',
  },
  {
    question_title: 'Delete Operation for Two Strings',
    question_text:
      'Given two strings word1 and word2, return the minimum number of steps required to make word1 and word2 the same. In one step, you can delete exactly one character in either string. ',
  },
  {
    question_title: 'Erect the Fence',
    question_text:
      'You are given an array trees where trees[i] = [xi, yi] represents the location of a tree in the garden. You are asked to fence the entire garden using the minimum length of rope as it is expensive. The garden is well fenced only if all the trees are enclosed. Return the coordinates of trees that are exactly located on the fence perimeter. ',
  },
  {
    question_title: 'Tag Validator',
    question_text:
      'Given a string representing a code snippet, implement a tag validator to parse the code and return whether it is valid. A code snippet is valid if all the following rules hold: ',
  },
  {
    question_title: 'Fraction Addition and Subtraction',
    question_text:
      'Given a string expression representing an expression of fraction addition and subtraction, return the calculation result in string format. The final result should be an irreducible fraction. If your final result is an integer, change it to the format of a fraction that has a denominator 1. So in this case, 2 should be converted to 2/1. ',
  },
  {
    question_title: 'Valid Square',
    question_text:
      'Given the coordinates of four points in 2D space p1, p2, p3 and p4, return true if the four points construct a square. The coordinate of a point pi is represented as [xi, yi]. The input is not given in any order. A valid square has four equal sides with positive length and four equal angles (90-degree angles). ',
  },
  {
    question_title: 'Longest Harmonious Subsequence',
    question_text:
      'We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1. Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences. A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements. ',
  },
  {
    question_title: 'Range Addition II',
    question_text:
      "You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi. Count and return the number of maximum integers in the matrix after performing all the operations. ",
  },
  {
    question_title: 'Minimum Index Sum of Two Lists',
    question_text:
      'Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings. You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer. ',
  },
  {
    question_title: 'Non-negative Integers without Consecutive Ones',
    question_text:
      'Given a positive integer n, return the number of the integers in the range [0, n] whose binary representations do not contain consecutive ones. ',
  },
  {
    question_title: 'Can Place Flowers',
    question_text:
      "You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots. Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule. ",
  },
  {
    question_title: 'Construct String from Binary Tree',
    question_text:
      'Given the root of a binary tree, construct a string consisting of parenthesis and integers from a binary tree with the preorder traversal way, and return it. Omit all the empty parenthesis pairs that do not affect the one-to-one mapping relationship between the string and the original binary tree. ',
  },
  {
    question_title: 'Find Duplicate File in System',
    question_text:
      'Given a list paths of directory info, including the directory path, and all the files with contents in this directory, return all the duplicate files in the file system in terms of their paths. You may return the answer in any order. A group of duplicate files consists of at least two files that have the same content. A single directory info string in the input list has the following format: It means there are n files (f1.txt, f2.txt ... fn.txt) with content (f1_content, f2_content ... fn_content) respectively in the directory "root/d1/d2/.../dm". Note that n >= 1 and m >= 0. If m = 0, it means the directory is just the root directory. The output is a list of groups of duplicate file paths. For each group, it contains all the file paths of the files that have the same content. A file path is a string that has the following format: ',
  },
  {
    question_title: 'Valid Triangle Number',
    question_text:
      'Given an integer array nums, return the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle. ',
  },
  {
    question_title: 'Merge Two Binary Trees',
    question_text:
      'You are given two binary trees root1 and root2. Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree. Return the merged tree. Note: The merging process must start from the root nodes of both trees. ',
  },
  {
    question_title: 'Task Scheduler',
    question_text:
      'Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle. However, there is a non-negative integer\xa0n that represents the cooldown period between\xa0two same tasks\xa0(the same letter in the array), that is that there must be at least n units of time between any two same tasks. Return the least number of units of times that the CPU will take to finish all the given tasks. ',
  },
  {
    question_title: 'Add One Row to Tree',
    question_text:
      'Given the root of a binary tree and two integers val and depth, add a row of nodes with value val at the given depth depth. Note that the root node is at depth 1. The adding rule is: ',
  },
  {
    question_title: 'Maximum Product of Three Numbers',
    question_text:
      'Given an integer array nums, find three numbers whose product is maximum and return the maximum product. ',
  },
  {
    question_title: 'K Inverse Pairs Array',
    question_text:
      'For an integer array nums, an inverse pair is a pair of integers [i, j] where 0 <= i < j < nums.length and nums[i] > nums[j]. Given two integers n and k, return the number of different arrays consist of numbers from 1 to n such that there are exactly k inverse pairs. Since the answer can be huge, return it modulo 109 + 7. ',
  },
  {
    question_title: 'Course Schedule III',
    question_text:
      'There are n different online courses numbered from 1 to n. You are given an array courses where courses[i] = [durationi, lastDayi] indicate that the ith course should be taken continuously for durationi days and must be finished before or on lastDayi. You will start on the 1st day and you cannot take two or more courses simultaneously. Return the maximum number of courses that you can take. ',
  },
  {
    question_title: 'Smallest Range Covering Elements from K Lists',
    question_text:
      'You have k lists of sorted integers in non-decreasing\xa0order. Find the smallest range that includes at least one number from each of the k lists. We define the range [a, b] is smaller than range [c, d] if b - a < d - c or a < c if b - a == d - c. ',
  },
  {
    question_title: 'Sum of Square Numbers',
    question_text:
      "Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c. ",
  },
  {
    question_title: 'Exclusive Time of Functions',
    question_text:
      'On a single-threaded CPU, we execute a program containing n functions. Each function has a unique ID between 0 and n-1. Function calls are stored in a call stack: when a function call starts, its ID is pushed onto the stack, and when a function call ends, its ID is popped off the stack. The function whose ID is at the top of the stack is the current function being executed. Each time a function starts or ends, we write a log with the ID, whether it started or ended, and the timestamp. You are given a list logs, where logs[i] represents the ith log message formatted as a string "{function_id}:{"start" | "end"}:{timestamp}". For example, "0:start:3" means a function call with function ID 0 started at the beginning of timestamp 3, and "1:end:2" means a function call with function ID 1 ended at the end of timestamp 2. Note that a function can be called multiple times, possibly recursively. A function\'s exclusive time is the sum of execution times for all function calls in the program. For example, if a function is called twice, one call executing for 2 time units and another call executing for 1 time unit, the exclusive time is 2 + 1 = 3. Return the exclusive time of each function in an array, where the value at the ith index represents the exclusive time for the function with ID i. ',
  },
  {
    question_title: 'Shopping Offers',
    question_text:
      'In LeetCode Store, there are n items to sell. Each item has a price. However, there are some special offers, and a special offer consists of one or more different kinds of items with a sale price. You are given an integer array price where price[i] is the price of the ith item, and an integer array needs where needs[i] is the number of pieces of the ith item you want to buy. You are also given an array special where special[i] is of size n + 1 where special[i][j] is the number of pieces of the jth item in the ith offer and special[i][n] (i.e., the last integer in the array) is the price of the ith offer. Return the lowest price you have to pay for exactly certain items as given, where you could make optimal use of the special offers. You are not allowed to buy more items than you want, even if that would lower the overall price. You could use any of the special offers as many times as you want. ',
  },
  {
    question_title: 'Decode Ways II',
    question_text:
      'A message containing letters from A-Z can be encoded into numbers using the following mapping: To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into: Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into \'F\' since "6" is different from "06". In addition to the mapping above, an encoded message may contain the \'*\' character, which can represent any digit from \'1\' to \'9\' (\'0\' is excluded). For example, the encoded message "1*" may represent any of the encoded messages "11", "12", "13", "14", "15", "16", "17", "18", or "19". Decoding "1*" is equivalent to decoding any of the encoded messages it can represent. Given a string s consisting of digits and \'*\' characters, return the number of ways to decode it. Since the answer may be very large, return it modulo 109 + 7. ',
  },
  {
    question_title: 'Solve the Equation',
    question_text:
      "Solve a given equation and return the value of 'x' in the form of a string \"x=#value\". The equation contains only '+', '-' operation, the variable 'x' and its coefficient. You should return \"No solution\" if there is no solution for the equation, or \"Infinite solutions\" if there are infinite solutions for the equation. If there is exactly one solution for the equation, we ensure that the value of 'x' is an integer. ",
  },
  {
    question_title: 'Maximum Average Subarray I',
    question_text:
      'You are given an integer array nums consisting of n elements, and an integer k. Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted. ',
  },
  {
    question_title: 'Set Mismatch',
    question_text:
      'You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number. You are given an integer array nums representing the data status of this set after the error. Find the number that occurs twice and the number that is missing and return them in the form of an array. ',
  },
  {
    question_title: 'Maximum Length of Pair Chain',
    question_text:
      'You are given an array of n pairs pairs where pairs[i] = [lefti, righti] and lefti < righti. A pair p2 = [c, d] follows a pair p1 = [a, b] if b < c. A chain of pairs can be formed in this fashion. Return the length longest chain which can be formed. You do not need to use up all the given intervals. You can select pairs in any order. ',
  },
  {
    question_title: 'Palindromic Substrings',
    question_text:
      'Given a string s, return the number of palindromic substrings in it. A string is a palindrome when it reads the same backward as forward. A substring is a contiguous sequence of characters within the string. ',
  },
  {
    question_title: 'Replace Words',
    question_text:
      'In English, we have a concept called root, which can be followed by some other word to form another longer word - let\'s call this word successor. For example, when the root "an" is followed by the successor word "other", we can form a new word "another". Given a dictionary consisting of many roots and a sentence consisting of words separated by spaces, replace all the successors in the sentence with the root forming it. If a successor can be replaced by more than one root, replace it with the root that has the shortest length. Return the sentence after the replacement. ',
  },
  {
    question_title: 'Dota2 Senate',
    question_text:
      "In the world of Dota2, there are two parties: the Radiant and the Dire. The Dota2 senate consists of senators coming from two parties. Now the Senate wants to decide on a change in the Dota2 game. The voting for this change is a round-based procedure. In each round, each senator can exercise one of the two rights: Given a string senate representing each senator's party belonging. The character 'R' and 'D' represent the Radiant party and the Dire party. Then if there are n senators, the size of the given string will be n. The round-based procedure starts from the first senator to the last senator in the given order. This procedure will last until the end of voting. All the senators who have lost their rights will be skipped during the procedure. Suppose every senator is smart enough and will play the best strategy for his own party. Predict which party will finally announce the victory and change the Dota2 game. The output should be \"Radiant\" or \"Dire\". ",
  },
  {
    question_title: '2 Keys Keyboard',
    question_text:
      "There is only one character 'A' on the screen of a notepad. You can perform one of two operations on this notepad for each step: Given an integer n, return the minimum number of operations to get the character 'A' exactly n times on the screen. ",
  },
  {
    question_title: 'Find Duplicate Subtrees',
    question_text:
      'Given the root\xa0of a binary tree, return all duplicate subtrees. For each kind of duplicate subtrees, you only need to return the root node of any one of them. Two trees are duplicate if they have the same structure with the same node values. ',
  },
  {
    question_title: 'Two Sum IV - Input is a BST',
    question_text:
      'Given the root of a Binary Search Tree and a target number k, return true if there exist two elements in the BST such that their sum is equal to the given target. ',
  },
  {
    question_title: 'Maximum Binary Tree',
    question_text:
      'You are given an integer array nums with no duplicates. A maximum binary tree can be built recursively from nums using the following algorithm: Return the maximum binary tree built from nums. ',
  },
  {
    question_title: 'Print Binary Tree',
    question_text:
      'Given the root of a binary tree, construct a 0-indexed m x n string matrix res that represents a formatted layout of the tree. The formatted layout matrix should be constructed using the following rules: Return the constructed matrix res. ',
  },
  {
    question_title: 'Robot Return to Origin',
    question_text:
      "There is a robot starting at the position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves. You are given a string moves that represents the move sequence of the robot where moves[i] represents its ith move. Valid moves are 'R' (right), 'L' (left), 'U' (up), and 'D' (down). Return true if the robot returns to the origin after it finishes all of its moves, or false otherwise. Note: The way that the robot is \"facing\" is irrelevant. 'R' will always make the robot move to the right once, 'L' will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move. ",
  },
  {
    question_title: 'Find K Closest Elements',
    question_text:
      'Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order. An integer a is closer to x than an integer b if: ',
  },
  {
    question_title: 'Split Array into Consecutive Subsequences',
    question_text:
      'You are given an integer array nums that is sorted in non-decreasing order. Determine if it is possible to split nums into one or more subsequences such that both of the following conditions are true: Return true if you can split nums according to the above conditions, or false otherwise. A subsequence of an array is a new array that is formed from the original array by deleting some (can be none) of the elements without disturbing the relative positions of the remaining elements. (i.e., [1,3,5] is a subsequence of [1,2,3,4,5] while [1,3,2] is not). ',
  },
  {
    question_title: 'Image Smoother',
    question_text:
      'An image smoother is a filter of the size 3 x 3 that can be applied to each cell of an image by rounding down the average of the cell and the eight surrounding cells (i.e., the average of the nine cells in the blue smoother). If one or more of the surrounding cells of a cell is not present, we do not consider it in the average (i.e., the average of the four cells in the red smoother). Given an m x n integer matrix img representing the grayscale of an image, return the image after applying the smoother on each cell of it. ',
  },
  {
    question_title: 'Maximum Width of Binary Tree',
    question_text:
      'Given the root of a binary tree, return the maximum width of the given tree. The maximum width of a tree is the maximum width among all levels. The width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes that would be present in a complete binary tree extending down to that level are also counted into the length calculation. It is guaranteed that the answer will in the range of a 32-bit signed integer. ',
  },
  {
    question_title: 'Strange Printer',
    question_text:
      'There is a strange printer with the following two special properties: Given a string s, return the minimum number of turns the printer needed to print it. ',
  },
  {
    question_title: 'Non-decreasing Array',
    question_text:
      'Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most one element. We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2). ',
  },
  {
    question_title: 'Beautiful Arrangement II',
    question_text:
      'Given two integers n and k, construct a list answer that contains n different positive integers ranging from 1 to n and obeys the following requirement: Return the list answer. If there multiple valid answers, return any of them. ',
  },
  {
    question_title: 'Kth Smallest Number in Multiplication Table',
    question_text:
      'Nearly everyone has used the Multiplication Table. The multiplication table of size m x n is an integer matrix mat where mat[i][j] == i * j (1-indexed). Given three integers m, n, and k, return the kth smallest element in the m x n multiplication table. ',
  },
  {
    question_title: 'Trim a Binary Search Tree',
    question_text:
      "Given the root of a binary search tree and the lowest and highest boundaries as low and high, trim the tree so that all its elements lies in [low, high]. Trimming the tree should not change the relative structure of the elements that will remain in the tree (i.e., any node's descendant should remain a descendant). It can be proven that there is a unique answer. Return the root of the trimmed binary search tree. Note that the root may change depending on the given bounds. ",
  },
  {
    question_title: 'Maximum Swap',
    question_text:
      'You are given an integer num. You can swap two digits at most once to get the maximum valued number. Return the maximum valued number you can get. ',
  },
  {
    question_title: 'Second Minimum Node In a Binary Tree',
    question_text:
      "Given a non-empty special binary tree consisting of nodes with the non-negative value, where each node in this tree has exactly two or zero sub-node. If the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes. More formally, the property\xa0root.val = min(root.left.val, root.right.val)\xa0always holds. Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' value in the whole tree. If no such second minimum value exists, output -1 instead.  ",
  },
  {
    question_title: 'Bulb Switcher II',
    question_text:
      'There is a room with n bulbs labeled from 1 to n that all are turned on initially, and four buttons on the wall. Each of the four buttons has a different functionality where: You must make exactly presses button presses in total. For each press, you may pick any of the four buttons to press. Given the two integers n and presses, return the number of different possible statuses after performing all presses button presses. ',
  },
  {
    question_title: 'Number of Longest Increasing Subsequence',
    question_text:
      'Given an integer array\xa0nums, return the number of longest increasing subsequences. Notice that the sequence has to be strictly increasing. ',
  },
  {
    question_title: 'Longest Continuous Increasing Subsequence',
    question_text:
      'Given an unsorted array of integers nums, return the length of the longest continuous increasing subsequence (i.e. subarray). The subsequence must be strictly increasing. A continuous increasing subsequence is defined by two indices l and r (l < r) such that it is [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] and for each l <= i < r, nums[i] < nums[i + 1]. ',
  },
  {
    question_title: 'Cut Off Trees for Golf Event',
    question_text:
      'You are asked to cut off all the trees in a forest for a golf event. The forest is represented as an m x n matrix. In this matrix: In one step, you can walk in any of the four directions: north, east, south, and west. If you are standing in a cell with a tree, you can choose whether to cut it off. You must cut off the trees in order from shortest to tallest. When you cut off a tree, the value at its cell becomes 1 (an empty cell). Starting from the point (0, 0), return the minimum steps you need to walk to cut off all the trees. If you cannot cut off all the trees, return -1. You are guaranteed that no two trees have the same height, and there is at least one tree needs to be cut off. ',
  },
  {
    question_title: 'Implement Magic Dictionary',
    question_text:
      'Design a data structure that is initialized with a list of different words. Provided a string, you should determine if you can change exactly one character in this string to match any word in the data structure. Implement the\xa0MagicDictionary\xa0class: ',
  },
  {
    question_title: 'Map Sum Pairs',
    question_text: 'Design a map that allows you to do the following: Implement the MapSum class: ',
  },
  {
    question_title: 'Valid Parenthesis String',
    question_text:
      "Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid. The following rules define a valid string: ",
  },
  {
    question_title: '24 Game',
    question_text:
      "You are given an integer array cards of length 4. You have four cards, each containing a number in the range [1, 9]. You should arrange the numbers on these cards in a mathematical expression using the operators ['+', '-', '*', '/'] and the parentheses '(' and ')' to get the value 24. You are restricted with the following rules: Return true if you can get such expression that evaluates to 24, and false otherwise. ",
  },
  {
    question_title: 'Valid Palindrome II',
    question_text:
      'Given a string s, return true if the s can be palindrome after deleting at most one character from it. ',
  },
  {
    question_title: 'Baseball Game',
    question_text:
      "You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect future rounds' scores. At the beginning of the game, you start with an empty record. You are given a list of strings ops, where ops[i] is the ith operation you must apply to the record and is one of the following: Return the sum of all the scores on the record. The test cases are generated so that the answer fits in a 32-bit integer. ",
  },
  {
    question_title: 'Redundant Connection',
    question_text:
      'In this problem, a tree is an undirected graph that is connected and has no cycles. You are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added. The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed. The graph is represented as an array edges of length n where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the graph. Return an edge that can be removed so that the resulting graph is a tree of n nodes. If there are multiple answers, return the answer that occurs last in the input. ',
  },
  {
    question_title: 'Redundant Connection II',
    question_text:
      'In this problem, a rooted tree is a directed graph such that, there is exactly one node (the root) for which all other nodes are descendants of this node, plus every node has exactly one parent, except for the root node which has no parents. The given input is a directed graph that started as a rooted tree with n nodes (with distinct values from 1 to n), with one additional directed edge added. The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed. The resulting graph is given as a 2D-array of edges. Each element of edges is a pair [ui, vi] that represents a directed edge connecting nodes ui and vi, where ui is a parent of child vi. Return an edge that can be removed so that the resulting graph is a rooted tree of n nodes. If there are multiple answers, return the answer that occurs last in the given 2D-array. ',
  },
  {
    question_title: 'Repeated String Match',
    question_text:
      'Given two strings a and b, return the minimum number of times you should repeat string a so that string b is a substring of it. If it is impossible for b\u200b\u200b\u200b\u200b\u200b\u200b to be a substring of a after repeating it, return -1. Notice: string "abc" repeated 0 times is "", repeated 1 time is "abc" and repeated 2 times is "abcabc". ',
  },
  {
    question_title: 'Longest Univalue Path',
    question_text:
      'Given the root of a binary tree, return the length of the longest path, where each node in the path has the same value. This path may or may not pass through the root. The length of the path between two nodes is represented by the number of edges between them. ',
  },
  {
    question_title: 'Knight Probability in Chessboard',
    question_text:
      'On an n x n chessboard, a knight starts at the cell (row, column) and attempts to make exactly k moves. The rows and columns are 0-indexed, so the top-left cell is (0, 0), and the bottom-right cell is (n - 1, n - 1). A chess knight has eight possible moves it can make, as illustrated below. Each move is two cells in a cardinal direction, then one cell in an orthogonal direction. Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there. The knight continues moving until it has made exactly k moves or has moved off the chessboard. Return the probability that the knight remains on the board after it has stopped moving. ',
  },
  {
    question_title: 'Maximum Sum of 3 Non-Overlapping Subarrays',
    question_text:
      'Given an integer array nums and an integer k, find three non-overlapping subarrays of length k with maximum sum and return them. Return the result as a list of indices representing the starting position of each interval (0-indexed). If there are multiple answers, return the lexicographically smallest one. ',
  },
  {
    question_title: 'Employee Importance',
    question_text:
      "You have a data structure of employee information, including the employee's unique ID, importance value, and direct subordinates' IDs. You are given an array of employees employees where: Given an integer id that represents an employee's ID, return the total importance value of this employee and all their direct and indirect subordinates. ",
  },
  {
    question_title: 'Stickers to Spell Word',
    question_text:
      'We are given n different types of stickers. Each sticker has a lowercase English word on it. You would like to spell out the given string target by cutting individual letters from your collection of stickers and rearranging them. You can use each sticker more than once if you want, and you have infinite quantities of each sticker. Return the minimum number of stickers that you need to spell out target. If the task is impossible, return -1. Note: In all test cases, all words were chosen randomly from the 1000 most common US English words, and target was chosen as a concatenation of two random words. ',
  },
  {
    question_title: 'Top K Frequent Words',
    question_text:
      'Given an array of strings words and an integer k, return the k most frequent strings. Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order. ',
  },
  {
    question_title: 'Max Area of Island',
    question_text:
      "You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water. The area of an island is the number of cells with a value 1 in the island. Return the maximum area of an island in grid. If there is no island, return 0. ",
  },
  {
    question_title: 'Count Binary Substrings',
    question_text:
      "Give a binary string s, return the number of non-empty substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively. Substrings that occur multiple times are counted the number of times they occur. ",
  },
  {
    question_title: 'Degree of an Array',
    question_text:
      'Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements. Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums. ',
  },
  {
    question_title: 'Partition to K Equal Sum Subsets',
    question_text:
      'Given an integer array nums and an integer k, return true if it is possible to divide this array into k non-empty subsets whose sums are all equal. ',
  },
  {
    question_title: 'Falling Squares',
    question_text:
      'There are several squares being dropped onto the X-axis of a 2D plane. You are given a 2D integer array positions where positions[i] = [lefti, sideLengthi] represents the ith square with a side length of sideLengthi that is dropped with its left edge aligned with X-coordinate lefti. Each square is dropped one at a time from a height above any landed squares. It then falls downward (negative Y direction) until it either lands on the top side of another square or on the X-axis. A square brushing the left/right side of another square does not count as landing on it. Once it lands, it freezes in place and cannot be moved. After each square is dropped, you must record the height of the current tallest stack of squares. Return an integer array ans where ans[i] represents the height described above after dropping the ith square. ',
  },
  {
    question_title: 'Minimum ASCII Delete Sum for Two Strings',
    question_text:
      'Given two strings s1 and\xa0s2, return the lowest ASCII sum of deleted characters to make two strings equal. ',
  },
  {
    question_title: 'Subarray Product Less Than K',
    question_text:
      'Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k. ',
  },
  {
    question_title: 'Best Time to Buy and Sell Stock with Transaction Fee',
    question_text:
      'You are given an array prices where prices[i] is the price of a given stock on the ith day, and an integer fee representing a transaction fee. Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction. Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again). ',
  },
  {
    question_title: '1-bit and 2-bit Characters',
    question_text:
      'We have two special characters: Given a binary array bits that ends with 0, return true if the last character must be a one-bit character. ',
  },
  {
    question_title: 'Maximum Length of Repeated Subarray',
    question_text:
      'Given two integer arrays nums1 and nums2, return the maximum length of a subarray that appears in both arrays. ',
  },
  {
    question_title: 'Find K-th Smallest Pair Distance',
    question_text:
      'The distance of a pair of integers a and b is defined as the absolute difference between a and b. Given an integer array nums and an integer k, return the kth smallest distance among all the pairs nums[i] and nums[j] where 0 <= i < j < nums.length. ',
  },
  {
    question_title: 'Longest Word in Dictionary',
    question_text:
      'Given an array of strings words representing an English Dictionary, return the longest word in words that can be built one character at a time by other words in words. If there is more than one possible answer, return the longest word with the smallest lexicographical order. If there is no answer, return the empty string. ',
  },
  {
    question_title: 'Accounts Merge',
    question_text:
      'Given a list of accounts where each element accounts[i] is a list of strings, where the first element accounts[i][0] is a name, and the rest of the elements are emails representing emails of the account. Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some common email to both accounts. Note that even if two accounts have the same name, they may belong to different people as people could have the same name. A person can have any number of accounts initially, but all of their accounts definitely have the same name. After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails in sorted order. The accounts themselves can be returned in any order. ',
  },
  {
    question_title: 'Remove Comments',
    question_text:
      'Given a C++ program, remove comments from it. The program source is an array of strings source where source[i] is the ith line of the source code. This represents the result of splitting the original source code string by the newline character \'\\n\'. In C++, there are two types of comments, line comments, and block comments. The first effective comment takes precedence over others. If a certain line of code is empty after removing comments, you must not output that line: each string in the answer list will be non-empty. There will be no control characters, single quote, or double quote characters. Also, nothing else such as defines or macros will interfere with the comments. It is guaranteed that every open block comment will eventually be closed, so "/*" outside of a line or block comment always starts a new comment. Finally, implicit newline characters can be deleted by block comments. Please see the examples below for details. After removing the comments from the source code, return the source code in the same format. ',
  },
  {
    question_title: 'Find Pivot Index',
    question_text:
      "Given an array of integers nums, calculate the pivot index of this array. The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right. If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array. Return the leftmost pivot index. If no such index exists, return -1. ",
  },
  {
    question_title: 'Number of Atoms',
    question_text:
      "Given a string formula representing a chemical formula, return the count of each atom. The atomic element always starts with an uppercase character, then zero or more lowercase letters, representing the name. One or more digits representing that element's count may follow if the count is greater than 1. If the count is 1, no digits will follow. Two formulas are concatenated together to produce another formula. A formula placed in parentheses, and a count (optionally added) is also a formula. Return the count of all elements as a string in the following form: the first name (in sorted order), followed by its count (if that count is more than 1), followed by the second name (in sorted order), followed by its count (if that count is more than 1), and so on. The test cases are generated so that all the values in the output fit in a 32-bit integer. ",
  },
  {
    question_title: 'Self Dividing Numbers',
    question_text:
      'A self-dividing number is a number that is divisible by every digit it contains. A self-dividing number is not allowed to contain the digit zero. Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right]. ',
  },
  {
    question_title: 'Count Different Palindromic Subsequences',
    question_text:
      'Given a string s, return the number of different non-empty palindromic subsequences in s. Since the answer may be very large, return it modulo 109 + 7. A subsequence of a string is obtained by deleting zero or more characters from the string. A sequence is palindromic if it is equal to the sequence reversed. Two sequences a1, a2, ... and b1, b2, ... are different if there is some i for which ai != bi. ',
  },
  {
    question_title: 'Flood Fill',
    question_text:
      'An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image. You are also given three integers sr, sc, and newColor. You should perform a flood fill on the image starting from the pixel image[sr][sc]. To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with newColor. Return the modified image after performing the flood fill. ',
  },
  {
    question_title: 'Asteroid Collision',
    question_text:
      'We are given an array asteroids of integers representing asteroids in a row. For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed. Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet. ',
  },
  {
    question_title: 'Parse Lisp Expression',
    question_text:
      'You are given a string expression representing a Lisp-like expression to return the integer value of. The syntax for these expressions is given as follows. ',
  },
  {
    question_title: 'Monotone Increasing Digits',
    question_text:
      'An integer has monotone increasing digits if and only if each pair of adjacent digits x and y satisfy x <= y. Given an integer n, return the largest number that is less than or equal to n with monotone increasing digits. ',
  },
  {
    question_title: 'Daily Temperatures',
    question_text:
      'Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead. ',
  },
  {
    question_title: 'Delete and Earn',
    question_text:
      'You are given an integer array nums. You want to maximize the number of points you get by performing the following operation any number of times: Return the maximum number of points you can earn by applying the above operation some number of times. ',
  },
  {
    question_title: 'Cherry Pickup',
    question_text:
      'You are given an n x n grid representing a field of cherries, each cell is one of three possible integers. Return the maximum number of cherries you can collect by following the rules below: ',
  },
  {
    question_title: 'To Lower Case',
    question_text:
      'Given a string s, return the string after replacing every uppercase letter with the same lowercase letter. ',
  },
  {
    question_title: 'Network Delay Time',
    question_text:
      'You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target. We will send a signal from a given node k. Return the time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1. ',
  },
  {
    question_title: 'Find Smallest Letter Greater Than Target',
    question_text:
      'Given a characters array letters that is sorted in non-decreasing order and a character target, return the smallest character in the array that is larger than target. Note that the letters wrap around. ',
  },
  {
    question_title: 'Prefix and Suffix Search',
    question_text:
      'Design a special dictionary with some words that searchs the words in it by a prefix and a suffix. Implement the WordFilter class: ',
  },
  {
    question_title: 'Min Cost Climbing Stairs',
    question_text:
      'You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps. You can either start from the step with index 0, or the step with index 1. Return the minimum cost to reach the top of the floor. ',
  },
  {
    question_title: 'Largest Number At Least Twice of Others',
    question_text:
      'You are given an integer array nums where the largest integer is unique. Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise. ',
  },
  {
    question_title: 'Shortest Completing Word',
    question_text:
      'Given a string licensePlate and an array of strings words, find the shortest completing word in words. A completing word is a word that contains all the letters in licensePlate. Ignore numbers and spaces in licensePlate, and treat letters as case insensitive. If a letter appears more than once in licensePlate, then it must appear in the word the same number of times or more. For example, if licensePlate = "aBc 12c", then it contains letters \'a\', \'b\' (ignoring case), and \'c\' twice. Possible completing words are "abccdef", "caaacab", and "cbca". Return the shortest completing word in words. It is guaranteed an answer exists. If there are multiple shortest completing words, return the first one that occurs in words. ',
  },
  {
    question_title: 'Contain Virus',
    question_text:
      'A virus is spreading rapidly, and your task is to quarantine the infected area by installing walls. The world is modeled as an m x n binary grid isInfected, where isInfected[i][j] == 0 represents uninfected cells, and isInfected[i][j] == 1 represents cells contaminated with the virus. A wall (and only one wall) can be installed between any two 4-directionally adjacent cells, on the shared boundary. Every night, the virus spreads to all neighboring cells in all four directions unless blocked by a wall. Resources are limited. Each day, you can install walls around only one region (i.e., the affected area (continuous block of infected cells) that threatens the most uninfected cells the following night). There will never be a tie. Return the number of walls used to quarantine all the infected regions. If the world will become fully infected, return the number of walls used. ',
  },
  {
    question_title: 'Open the Lock',
    question_text:
      "You have a lock in front of you with 4 circular wheels. Each wheel has 10 slots: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'. The wheels can rotate freely and wrap around: for example we can turn '9' to be '0', or '0' to be '9'. Each move consists of turning one wheel one slot. The lock initially starts at '0000', a string representing the state of the 4 wheels. You are given a list of deadends dead ends, meaning if the lock displays any of these codes, the wheels of the lock will stop turning and you will be unable to open it. Given a target representing the value of the wheels that will unlock the lock, return the minimum total number of turns required to open the lock, or -1 if it is impossible. ",
  },
  {
    question_title: 'Cracking the Safe',
    question_text:
      'There is a safe protected by a password. The password is a sequence of n digits where each digit can be in the range [0, k - 1]. The safe has a peculiar way of checking the password. When you enter in a sequence, it checks the most recent n digits that were entered each time you type a digit. Return any string of minimum length that will unlock the safe at some point of entering it. ',
  },
  {
    question_title: 'Reach a Number',
    question_text:
      'You are standing at position 0 on an infinite number line. There is a destination at position target. You can make some number of moves numMoves so that: Given the integer target, return the minimum number of moves required (i.e., the minimum numMoves) to reach the destination. ',
  },
  {
    question_title: 'Pyramid Transition Matrix',
    question_text:
      'You are stacking blocks to form a pyramid. Each block has a color, which is represented by a single letter. Each row of blocks contains one less block than the row beneath it and is centered on top. To make the pyramid aesthetically pleasing, there are only specific triangular patterns that are allowed. A triangular pattern consists of a single block stacked on top of two blocks. The patterns are given\xa0as a list of\xa0three-letter strings allowed, where the first two characters of a pattern represent the left and right bottom blocks respectively, and the third character is the top block. You start with a bottom row of blocks bottom, given as a single string, that you must use as the base of the pyramid. Given bottom and allowed, return true if you can build the pyramid all the way to the top such that every triangular pattern in the pyramid is in allowed, or false otherwise. ',
  },
  {
    question_title: 'Set Intersection Size At Least Two',
    question_text:
      'An integer interval [a, b] (for integers a < b) is a set of all consecutive integers from a to b, including a and b. Find the minimum size of a set S such that for every integer interval A in intervals, the intersection of S with A has a size of at least two. ',
  },
  {
    question_title: 'Special Binary String',
    question_text:
      'Special binary strings are binary strings with the following two properties: You are given a special binary string s. A move consists of choosing two consecutive, non-empty, special substrings of s, and swapping them. Two strings are consecutive if the last character of the first string is exactly one index before the first character of the second string. Return the lexicographically largest resulting string possible after applying the mentioned operations on the string. ',
  },
  {
    question_title: 'N-ary Tree Level Order Traversal',
    question_text:
      "Given an n-ary tree, return the level order traversal of its nodes' values. Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples). ",
  },
  {
    question_title: 'Flatten a Multilevel Doubly Linked List',
    question_text:
      'You are given a doubly linked list, which contains nodes that have a next pointer, a previous pointer, and an additional child pointer. This child pointer may or may not point to a separate doubly linked list, also containing these special nodes. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure as shown in the example below. Given the head of the first level of the list, flatten the list so that all the nodes appear in a single-level, doubly linked list. Let curr be a node with a child list. The nodes in the child list should appear after curr and before curr.next in the flattened list. Return the head of the flattened list. The nodes in the list must have all of their child pointers set to null. ',
  },
  {
    question_title: 'Prime Number of Set Bits in Binary Representation',
    question_text:
      "Given two integers left and right, return the count of numbers in the inclusive range [left, right] having a prime number of set bits in their binary representation. Recall that the number of set bits an integer has is the number of 1's present when written in binary. ",
  },
  {
    question_title: 'Partition Labels',
    question_text:
      'You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part. Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s. Return a list of integers representing the size of these parts. ',
  },
  {
    question_title: 'Largest Plus Sign',
    question_text:
      "You are given an integer n. You have an n x n binary grid grid with all values initially 1's except for some indices given in the array mines. The ith element of the array mines is defined as mines[i] = [xi, yi] where grid[xi][yi] == 0. Return the order of the largest axis-aligned plus sign of 1's contained in grid. If there is none, return 0. An axis-aligned plus sign of 1's of order k has some center grid[r][c] == 1 along with four arms of length k - 1 going up, down, left, and right, and made of 1's. Note that there could be 0's or 1's beyond the arms of the plus sign, only the relevant area of the plus sign is checked for 1's. ",
  },
  {
    question_title: 'Couples Holding Hands',
    question_text:
      'There are n couples sitting in 2n seats arranged in a row and want to hold hands. The people and seats are represented by an integer array row where row[i] is the ID of the person sitting in the ith seat. The couples are numbered in order, the first couple being (0, 1), the second couple being (2, 3), and so on with the last couple being (2n - 2, 2n - 1). Return the minimum number of swaps so that every couple is sitting side by side. A swap consists of choosing any two people, then they stand up and switch seats. ',
  },
  {
    question_title: 'Construct Quad Tree',
    question_text:
      "Given a n * n matrix grid of 0's and 1's only. We want to represent the grid with a Quad-Tree. Return the root of the Quad-Tree representing the grid. Notice that you can assign the value of a node to True or False when isLeaf is False, and both are accepted in the answer. A Quad-Tree is a tree data structure in which each internal node has exactly four children. Besides, each node has two attributes: We can construct a Quad-Tree from a two-dimensional area using the following steps: If you want to know more about the Quad-Tree, you can refer to the wiki. Quad-Tree format: The output represents the serialized format of a Quad-Tree using level order traversal, where null signifies a path terminator where no node exists below. It is very similar to the serialization of the binary tree. The only difference is that the node is represented as a list [isLeaf, val]. If the value of isLeaf or val is True we represent it as 1 in the list [isLeaf, val] and if the value of isLeaf or val is False we represent it as 0. ",
  },
  {
    question_title: 'Maximum Depth of N-ary Tree',
    question_text:
      'Given a n-ary tree, find its maximum depth. The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node. Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples). ',
  },
  {
    question_title: 'N-ary Tree Preorder Traversal',
    question_text:
      "Given the root of an n-ary tree, return the preorder traversal of its nodes' values. Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples) ",
  },
  {
    question_title: 'N-ary Tree Postorder Traversal',
    question_text:
      "Given the root of an n-ary tree, return the postorder traversal of its nodes' values. Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples) ",
  },
  {
    question_title: 'Toeplitz Matrix',
    question_text:
      'Given an m x n matrix, return\xa0true\xa0if the matrix is Toeplitz. Otherwise, return false. A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements. ',
  },
  {
    question_title: 'Reorganize String',
    question_text:
      'Given a string s, rearrange the characters of s so that any two adjacent characters are not the same. Return any possible rearrangement of s or return "" if not possible. ',
  },
  {
    question_title: 'Max Chunks To Make Sorted II',
    question_text:
      'You are given an integer array arr. We split arr into some number of chunks (i.e., partitions), and individually sort each chunk. After concatenating them, the result should equal the sorted array. Return the largest number of chunks we can make to sort the array. ',
  },
  {
    question_title: 'Max Chunks To Make Sorted',
    question_text:
      'You are given an integer array arr of length n that represents a permutation of the integers in the range [0, n - 1]. We split arr into some number of chunks (i.e., partitions), and individually sort each chunk. After concatenating them, the result should equal the sorted array. Return the largest number of chunks we can make to sort the array. ',
  },
  {
    question_title: 'Basic Calculator IV',
    question_text:
      'Given an expression such as expression = "e + 8 - a + 5" and an evaluation map such as {"e": 1} (given in terms of evalvars = ["e"] and evalints = [1]), return a list of tokens representing the simplified expression, such as ["-1*a","14"] Expressions are evaluated in the usual order: brackets first, then multiplication, then addition and subtraction. The format of the output is as follows: ',
  },
  {
    question_title: 'Jewels and Stones',
    question_text:
      'You\'re given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels. Letters are case sensitive, so "a" is considered a different type of stone from "A". ',
  },
  {
    question_title: 'Sliding Puzzle',
    question_text:
      'On an 2 x 3 board, there are five tiles labeled from 1 to 5, and an empty square represented by 0. A move consists of choosing 0 and a 4-directionally adjacent number and swapping it. The state of the board is solved if and only if the board is [[1,2,3],[4,5,0]]. Given the puzzle board board, return the least number of moves required so that the state of the board is solved. If it is impossible for the state of the board to be solved, return -1. ',
  },
  {
    question_title: 'Global and Local Inversions',
    question_text:
      'You are given an integer array nums of length n which represents a permutation of all the integers in the range [0, n - 1]. The number of global inversions is the number of the different pairs (i, j) where: The number of local inversions is the number of indices i where: Return true if the number of global inversions is equal to the number of local inversions. ',
  },
  {
    question_title: 'Binary Search',
    question_text:
      'Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1. You must write an algorithm with O(log n) runtime complexity. ',
  },
  {
    question_title: 'Swap Adjacent in LR String',
    question_text:
      'In a string composed of \'L\', \'R\', and \'X\' characters, like "RXXLRXRXL", a move consists of either replacing one occurrence of "XL" with "LX", or replacing one occurrence of "RX" with "XR". Given the starting string start and the ending string end, return True if and only if there exists a sequence of moves to transform one string to the other. ',
  },
  {
    question_title: 'Swim in Rising Water',
    question_text:
      'You are given an n x n integer matrix grid where each value grid[i][j] represents the elevation at that point (i, j). The rain starts to fall. At time t, the depth of the water everywhere is t. You can swim from a square to another 4-directionally adjacent square if and only if the elevation of both squares individually are at most t. You can swim infinite distances in zero time. Of course, you must stay within the boundaries of the grid during your swim. Return the least time until you can reach the bottom right square (n - 1, n - 1) if you start at the top left square (0, 0). ',
  },
  {
    question_title: 'K-th Symbol in Grammar',
    question_text:
      'We build a table of n rows (1-indexed). We start by writing 0 in the 1st row. Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10. Given two integer n and k, return the kth (1-indexed) symbol in the nth row of a table of n rows. ',
  },
  {
    question_title: 'Reaching Points',
    question_text:
      'Given four integers sx, sy, tx, and ty, return true if it is possible to convert the point (sx, sy) to the point (tx, ty) through some operations, or false otherwise. The allowed operation on some point (x, y) is to convert it to either (x, x + y) or (x + y, y). ',
  },
  {
    question_title: 'Rabbits in Forest',
    question_text:
      'There is a forest with an unknown number of rabbits. We asked n rabbits "How many rabbits have the same color as you?" and collected the answers in an integer array answers where answers[i] is the answer of the ith rabbit. Given the array answers, return the minimum number of rabbits that could be in the forest. ',
  },
  {
    question_title: 'Transform to Chessboard',
    question_text:
      "You are given an n x n binary grid board. In each move, you can swap any two rows with each other, or any two columns with each other. Return the minimum number of moves to transform the board into a chessboard board. If the task is impossible, return -1. A chessboard board is a board where no 0's and no 1's are 4-directionally adjacent. ",
  },
  {
    question_title: 'Minimum Distance Between BST Nodes',
    question_text:
      'Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree. ',
  },
  {
    question_title: 'Letter Case Permutation',
    question_text:
      'Given a string s, you\xa0can transform every letter individually to be lowercase or uppercase to create another string. Return a list of all possible strings we could create. Return the output in any order. ',
  },
  {
    question_title: 'Is Graph Bipartite?',
    question_text:
      'There is an undirected graph with n nodes, where each node is numbered between 0 and n - 1. You are given a 2D array graph, where graph[u] is an array of nodes that node u is adjacent to. More formally, for each v in graph[u], there is an undirected edge between node u and node v. The graph has the following properties: A graph is bipartite if the nodes can be partitioned into two independent sets A and B such that every edge in the graph connects a node in set A and a node in set B. Return true if and only if it is bipartite. ',
  },
  {
    question_title: 'K-th Smallest Prime Fraction',
    question_text:
      'You are given a sorted integer array arr containing 1 and prime numbers, where all the integers of arr are unique. You are also given an integer k. For every i and j where 0 <= i < j < arr.length, we consider the fraction arr[i] / arr[j]. Return the kth smallest fraction considered. Return your answer as an array of integers of size 2, where answer[0] == arr[i] and answer[1] == arr[j]. ',
  },
  {
    question_title: 'Cheapest Flights Within K Stops',
    question_text:
      'There are n cities connected by some number of flights. You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi with cost pricei. You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops. If there is no such route, return -1. ',
  },
  {
    question_title: 'Rotated Digits',
    question_text:
      'An integer x is a good if after rotating each digit individually by 180 degrees, we get a valid number that is different from x. Each digit must be rotated - we cannot choose to leave it alone. A number is valid if each digit remains a digit after rotation. For example: Given an integer n, return the number of good integers in the range [1, n]. ',
  },
  {
    question_title: 'Escape The Ghosts',
    question_text:
      'You are playing a simplified PAC-MAN game on an infinite 2-D grid. You start at the point [0, 0], and you are given a destination point target = [xtarget, ytarget] that you are trying to get to. There are several ghosts on the map with their starting positions given as a 2D array ghosts, where ghosts[i] = [xi, yi] represents the starting position of the ith ghost. All inputs are integral coordinates. Each turn, you and all the ghosts may independently choose to either move 1 unit in any of the four cardinal directions: north, east, south, or west, or stay still. All actions happen simultaneously. You escape if and only if you can reach the target before any ghost reaches you. If you reach any square (including the target) at the same time as a ghost, it does not count as an escape. Return true if it is possible to escape regardless of how the ghosts move, otherwise return false. ',
  },
  {
    question_title: 'Domino and Tromino Tiling',
    question_text:
      'You have two types of tiles: a 2 x 1 domino shape and a tromino shape. You may rotate these shapes. Given an integer n, return the number of ways to tile an 2 x n board. Since the answer may be very large, return it modulo 109 + 7. In a tiling, every square must be covered by a tile. Two tilings are different if and only if there are two 4-directionally adjacent cells on the board such that exactly one of the tilings has both squares occupied by a tile. ',
  },
  {
    question_title: 'Custom Sort String',
    question_text:
      'You are given two strings order and s. All the words of order are unique and were sorted in some custom order previously. Permute the characters of s so that they match the order that order was sorted. More specifically, if a character x occurs before a character y in order, then x should occur before y in the permuted string. Return any permutation of s that satisfies this property. ',
  },
  {
    question_title: 'Number of Matching Subsequences',
    question_text:
      'Given a string s and an array of strings words, return the number of words[i] that is a subsequence of s. A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters. ',
  },
  {
    question_title: 'Preimage Size of Factorial Zeroes Function',
    question_text:
      'Let f(x) be the number of zeroes at the end of x!. Recall that x! = 1 * 2 * 3 * ... * x and by convention, 0! = 1. Given an integer k, return the number of non-negative integers x have the property that f(x) = k. ',
  },
  {
    question_title: 'Valid Tic-Tac-Toe State',
    question_text:
      "Given a Tic-Tac-Toe board as a string array board, return true if and only if it is possible to reach this board position during the course of a valid tic-tac-toe game. The board is a 3 x 3 array that consists of characters ' ', 'X', and 'O'. The ' ' character represents an empty square. Here are the rules of Tic-Tac-Toe: ",
  },
  {
    question_title: 'Number of Subarrays with Bounded Maximum',
    question_text:
      'Given an integer array nums and two integers left and right, return the number of contiguous non-empty subarrays such that the value of the maximum array element in that subarray is in the range [left, right]. The test cases are generated so that the answer will fit in a 32-bit integer. ',
  },
  {
    question_title: 'Rotate String',
    question_text:
      'Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s. A shift on s consists of moving the leftmost character of s to the rightmost position. ',
  },
  {
    question_title: 'All Paths From Source to Target',
    question_text:
      'Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order. The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]). ',
  },
  {
    question_title: 'Smallest Rotation with Highest Score',
    question_text:
      'You are given an array nums. You can rotate it by a non-negative integer k so that the array becomes [nums[k], nums[k + 1], ... nums[nums.length - 1], nums[0], nums[1], ..., nums[k-1]]. Afterward, any entries that are less than or equal to their index are worth one point. Return the rotation index k that corresponds to the highest score we can achieve if we rotated nums by it. If there are multiple answers, return the smallest such index k. ',
  },
  {
    question_title: 'Champagne Tower',
    question_text:
      'We stack glasses in a pyramid, where the first row has 1 glass, the second row has 2 glasses, and so on until the 100th row.\xa0 Each glass holds one cup\xa0of champagne. Then, some champagne is poured into the first glass at the top.\xa0 When the topmost glass is full, any excess liquid poured will fall equally to the glass immediately to the left and right of it.\xa0 When those glasses become full, any excess champagne will fall equally to the left and right of those glasses, and so on.\xa0 (A glass at the bottom row has its excess champagne fall on the floor.) For example, after one cup of champagne is poured, the top most glass is full.\xa0 After two cups of champagne are poured, the two glasses on the second row are half full.\xa0 After three cups of champagne are poured, those two cups become full - there are 3 full glasses total now.\xa0 After four cups of champagne are poured, the third row has the middle glass half full, and the two outside glasses are a quarter full, as pictured below.  Now after pouring some non-negative integer cups of champagne, return how full the jth glass in the ith row is (both i and j are 0-indexed.) ',
  },
  {
    question_title: 'Design HashSet',
    question_text:
      'Design a HashSet without using any built-in hash table libraries. Implement MyHashSet class: ',
  },
  {
    question_title: 'Design HashMap',
    question_text:
      'Design a HashMap without using any built-in hash table libraries. Implement the MyHashMap class: ',
  },
  {
    question_title: 'Minimum Swaps To Make Sequences Increasing',
    question_text:
      'You are given two integer arrays of the same length nums1 and nums2. In one operation, you are allowed to swap nums1[i] with nums2[i]. Return the minimum number of needed operations to make nums1 and nums2 strictly increasing. The test cases are generated so that the given input always makes it possible. An array arr is strictly increasing if and only if arr[0] < arr[1] < arr[2] < ... < arr[arr.length - 1]. ',
  },
  {
    question_title: 'Find Eventual Safe States',
    question_text:
      'There is a directed graph of n nodes with each node labeled from 0 to n - 1. The graph is represented by a 0-indexed 2D integer array graph where graph[i] is an integer array of nodes adjacent to node i, meaning there is an edge from node i to each node in graph[i]. A node is a terminal node if there are no outgoing edges. A node is a safe node if every possible path starting from that node leads to a terminal node. Return an array containing all the safe nodes of the graph. The answer should be sorted in ascending order. ',
  },
  {
    question_title: 'Bricks Falling When Hit',
    question_text:
      'You are given an m x n binary grid, where each 1 represents a brick and 0 represents an empty space. A brick is stable if: You are also given an array hits, which is a sequence of erasures we want to apply. Each time we want to erase the brick at the location hits[i] = (rowi, coli). The brick on that location\xa0(if it exists) will disappear. Some other bricks may no longer be stable because of that erasure and will fall. Once a brick falls, it is immediately erased from the grid (i.e., it does not land on other stable bricks). Return an array result, where each result[i] is the number of bricks that will fall after the ith erasure is applied. Note that an erasure may refer to a location with no brick, and if it does, no bricks drop. ',
  },
  {
    question_title: 'Unique Morse Code Words',
    question_text:
      'International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: For convenience, the full table for the 26 letters of the English alphabet is given below: Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter. Return the number of different transformations among all words we have. ',
  },
  {
    question_title: 'Split Array With Same Average',
    question_text:
      'You are given an integer array nums. You should move each element of nums into one of the two arrays A and B such that A and B are non-empty, and average(A) == average(B). Return true if it is possible to achieve that and false otherwise. Note that for an array arr, average(arr) is the sum of all the elements of arr over the length of arr. ',
  },
  {
    question_title: 'Number of Lines To Write String',
    question_text:
      "You are given a string s of lowercase English letters and an array widths denoting how many pixels wide each lowercase English letter is. Specifically, widths[0] is the width of 'a', widths[1] is the width of 'b', and so on. You are trying to write s across several lines, where each line is no longer than 100 pixels. Starting at the beginning of s, write as many letters on the first line such that the total width does not exceed 100 pixels. Then, from where you stopped in s, continue writing as many letters as you can on the second line. Continue this process until you have written all of s. Return an array result of length 2 where: ",
  },
  {
    question_title: 'Max Increase to Keep City Skyline',
    question_text:
      "There is a city composed of n x n blocks, where each block contains a single building shaped like a vertical square prism. You are given a 0-indexed n x n integer matrix grid where grid[r][c] represents the height of the building located in the block at row r and column c. A city's skyline is the the outer contour formed by all the building when viewing the side of the city from a distance. The skyline from each cardinal direction north, east, south, and west may be different. We are allowed to increase the height of any number of buildings by any amount (the amount can be different per building). The height of a 0-height building can also be increased. However, increasing the height of a building should not affect the city's skyline from any cardinal direction. Return the maximum total sum that the height of the buildings can be increased by without changing the city's skyline from any cardinal direction. ",
  },
  {
    question_title: 'Soup Servings',
    question_text:
      "There are two types of soup: type A and type B. Initially, we have n ml of each type of soup. There are four kinds of operations: When we serve some soup, we give it to someone, and we no longer have it. Each turn, we will choose from the four operations with an equal probability 0.25. If the remaining volume of soup is not enough to complete the operation, we will serve as much as possible. We stop once we no longer have some quantity of both types of soup. Note that we do not have an operation where all 100 ml's of soup B are used first. Return the probability that soup A will be empty first, plus half the probability that A and B become empty at the same time. Answers within 10-5 of the actual answer will be accepted. ",
  },
  {
    question_title: 'Expressive Words',
    question_text:
      'Sometimes people repeat letters to represent extra feeling. For example: In these strings like "heeellooo", we have groups of adjacent letters that are all the same: "h", "eee", "ll", "ooo". You are given a string s and an array of query strings words. A query word is stretchy if it can be made to be equal to s by any number of applications of the following extension operation: choose a group consisting of characters c, and add some number of characters c to the group so that the size of the group is three or more. Return the number of query strings that are stretchy. ',
  },
  {
    question_title: 'Chalkboard XOR Game',
    question_text:
      'You are given an array of integers nums represents the numbers written on a chalkboard. Alice and Bob take turns erasing exactly one number from the chalkboard, with Alice starting first. If erasing a number causes the bitwise XOR of all the elements of the chalkboard to become 0, then that player loses. The bitwise XOR of one element is that element itself, and the bitwise XOR of no elements is 0. Also, if any player starts their turn with the bitwise XOR of all the elements of the chalkboard equal to 0, then that player wins. Return true if and only if Alice wins the game, assuming both players play optimally. ',
  },
  {
    question_title: 'Subdomain Visit Count',
    question_text:
      'A website domain "discuss.leetcode.com" consists of various subdomains. At the top level, we have "com", at the next level, we have "leetcode.com"\xa0and at the lowest level, "discuss.leetcode.com". When we visit a domain like "discuss.leetcode.com", we will also visit the parent domains "leetcode.com" and "com" implicitly. A count-paired domain is a domain that has one of the two formats "rep d1.d2.d3" or "rep d1.d2" where rep is the number of visits to the domain and d1.d2.d3 is the domain itself. Given an array of count-paired domains cpdomains, return an array of the count-paired domains of each subdomain in the input. You may return the answer in any order. ',
  },
  {
    question_title: 'Largest Triangle Area',
    question_text:
      'Given an array of points on the X-Y plane points where points[i] = [xi, yi], return the area of the largest triangle that can be formed by any three different points. Answers within 10-5 of the actual answer will be accepted. ',
  },
  {
    question_title: 'Largest Sum of Averages',
    question_text:
      'You are given an integer array nums and an integer k. You can partition the array into at most k non-empty adjacent subarrays. The score of a partition is the sum of the averages of each subarray. Note that the partition must use every integer in nums, and that the score is not necessarily an integer. Return the maximum score you can achieve of all the possible partitions. Answers within 10-6 of the actual answer will be accepted. ',
  },
  {
    question_title: 'Binary Tree Pruning',
    question_text:
      'Given the root of a binary tree, return the same tree where every subtree (of the given tree) not containing a 1 has been removed. A subtree of a node node is node plus every node that is a descendant of node. ',
  },
  {
    question_title: 'Bus Routes',
    question_text:
      'You are given an array routes representing bus routes where routes[i] is a bus route that the ith bus repeats forever. You will start at the bus stop source (You are not on any bus initially), and you want to go to the bus stop target. You can travel between bus stops by buses only. Return the least number of buses you must take to travel from source to target. Return -1 if it is not possible. ',
  },
  {
    question_title: 'Ambiguous Coordinates',
    question_text:
      'We had some 2-dimensional coordinates, like "(1, 3)" or "(2, 0.5)". Then, we removed all commas, decimal points, and spaces and ended up with the string s. Return a list of strings representing all possibilities for what our original coordinates could have been. Our original representation never had extraneous zeroes, so we never started with numbers like "00", "0.0", "0.00", "1.0", "001", "00.01", or any other number that can be represented with fewer digits. Also, a decimal point within a number never occurs without at least one digit occurring before it, so we never started with numbers like ".1". The final answer list can be returned in any order. All coordinates in the final answer have exactly one space between them (occurring after the comma.) ',
  },
  {
    question_title: 'Linked List Components',
    question_text:
      'You are given the head of a linked list containing unique integer values and an integer array nums that is a subset of the linked list values. Return the number of connected components in nums where two values are connected if they appear consecutively in the linked list. ',
  },
  {
    question_title: 'Race Car',
    question_text:
      "Your car starts at position 0 and speed +1 on an infinite number line. Your car can go into negative positions. Your car drives automatically according to a sequence of instructions 'A' (accelerate) and 'R' (reverse): For example, after commands \"AAR\", your car goes to positions 0 --> 1 --> 3 --> 3, and your speed goes to 1 --> 2 --> 4 --> -1. Given a target position target, return the length of the shortest sequence of instructions to get there. ",
  },
  {
    question_title: 'Most Common Word',
    question_text:
      'Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique. The words in paragraph are case-insensitive and the answer should be returned in lowercase. ',
  },
  {
    question_title: 'Short Encoding of Words',
    question_text:
      'A valid encoding of an array of words is any reference string s and array of indices indices such that: Given an array of words, return the length of the shortest reference string s possible of any valid encoding of words. ',
  },
  {
    question_title: 'Shortest Distance to a Character',
    question_text:
      'Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the distance from index i to the closest occurrence of character c in s. The distance between two indices i and j is abs(i - j), where abs is the absolute value function. ',
  },
  {
    question_title: 'Card Flipping Game',
    question_text:
      'You are given n cards, with a positive integer printed on the front and back of each card (possibly different). You can flip any number of cards (possibly zero). After choosing the front and the back of each card, you will pick each card, and if the integer printed on the back of this card is not printed on the front of any other card, then this integer is good. You are given two integer array fronts and backs where fronts[i] and backs[i] are the integers printer on the front and the back of the ith card respectively. Return the smallest good and integer after flipping the cards. If there are no good integers, return 0. Note that a flip swaps the front and back numbers, so the value on the front is now on the back and vice versa. ',
  },
  {
    question_title: 'Binary Trees With Factors',
    question_text:
      "Given an array of unique integers, arr, where each integer arr[i] is strictly greater than 1. We make a binary tree using these integers, and each number may be used for any number of times. Each non-leaf node's value should be equal to the product of the values of its children. Return the number of binary trees we can make. The answer may be too large so return the answer modulo 109 + 7. ",
  },
  {
    question_title: 'Goat Latin',
    question_text:
      'You are given a string sentence that consist of words separated by spaces. Each word consists of lowercase and uppercase letters only. We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.) The rules of Goat Latin are as follows: Return the final sentence representing the conversion from sentence to Goat Latin. ',
  },
  {
    question_title: 'Friends Of Appropriate Ages',
    question_text:
      'There are n persons on a social media website. You are given an integer array ages where ages[i] is the age of the ith person. A Person x will not send a friend request to a person y (x != y) if any of the following conditions is true: Otherwise, x will send a friend request to y. Note that if x sends a request to y, y will not necessarily send a request to x. Also, a person will not send a friend request to themself. Return the total number of friend requests made. ',
  },
  {
    question_title: 'Most Profit Assigning Work',
    question_text:
      'You have n jobs and m workers. You are given three arrays: difficulty, profit, and worker where: Every worker can be assigned at most one job, but one job can be completed multiple times. Return the maximum profit we can achieve after assigning the workers to the jobs. ',
  },
  {
    question_title: 'Making A Large Island',
    question_text:
      'You are given an n x n binary matrix grid. You are allowed to change at most one 0 to be 1. Return the size of the largest island in grid after applying this operation. An island is a 4-directionally connected group of 1s. ',
  },
  {
    question_title: 'Count Unique Characters of All Substrings of a Given String',
    question_text:
      "Let's define a function countUniqueChars(s) that returns the number of unique characters on s. Given a string s, return the sum of countUniqueChars(t) where t is a substring of s. Notice that some substrings can be repeated so in this case you have to count the repeated ones too. ",
  },
  {
    question_title: 'Consecutive Numbers Sum',
    question_text:
      'Given an integer n, return the number of ways you can write n as the sum of consecutive positive integers. ',
  },
  {
    question_title: 'Positions of Large Groups',
    question_text:
      'In a string s\xa0of lowercase letters, these letters form consecutive groups of the same character. For example, a string like s = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z", and\xa0"yy". A group is identified by an interval\xa0[start, end], where\xa0start\xa0and\xa0end\xa0denote the start and end\xa0indices (inclusive) of the group. In the above example,\xa0"xxxx"\xa0has the interval\xa0[3,6]. A group is considered\xa0large\xa0if it has 3 or more characters. Return\xa0the intervals of every large group sorted in\xa0increasing order by start index. ',
  },
  {
    question_title: 'Masking Personal Information',
    question_text:
      'You are given a personal information string s, representing either an email address or a phone number. Return the masked personal information using the below rules. Email address: An email address is: To mask an email: Phone number: A phone number is formatted as follows: To mask a phone number: ',
  },
  {
    question_title: 'Design Circular Deque',
    question_text:
      'Design your implementation of the circular double-ended queue (deque). Implement the MyCircularDeque class: ',
  },
  {
    question_title: 'Design Circular Queue',
    question_text:
      'Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer". One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values. Implementation the MyCircularQueue class: You must solve the problem without using the built-in queue data structure in your programming language. ',
  },
  {
    question_title: 'Flipping an Image',
    question_text:
      'Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image. To flip an image horizontally means that each row of the image is reversed. To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. ',
  },
  {
    question_title: 'Find And Replace in String',
    question_text:
      'You are given a 0-indexed string s that you must perform k replacement operations on. The replacement operations are given as three 0-indexed parallel arrays, indices, sources, and targets, all of length k. To complete the ith replacement operation: For example, if s = "abcd", indices[i] = 0, sources[i] = "ab", and targets[i] = "eee", then the result of this replacement will be "eeecd". All replacement operations must occur simultaneously, meaning the replacement operations should not affect the indexing of each other. The testcases will be generated such that the replacements will not overlap. Return the resulting string after performing all replacement operations on s. A substring is a contiguous sequence of characters in a string. ',
  },
  {
    question_title: 'Sum of Distances in Tree',
    question_text:
      'There is an undirected connected tree with n nodes labeled from 0 to n - 1 and n - 1 edges. You are given the integer n and the array edges where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the tree. Return an array answer of length n where answer[i] is the sum of the distances between the ith node in the tree and all other nodes. ',
  },
  {
    question_title: 'Image Overlap',
    question_text:
      'You are given two images, img1 and img2, represented as binary, square matrices of size n x n. A binary matrix has only 0s and 1s as values. We translate one image however we choose by sliding all the 1 bits left, right, up, and/or down any number of units. We then place it on top of the other image. We can then calculate the overlap by counting the number of positions that have a 1 in both images. Note also that a translation does not include any kind of rotation. Any 1 bits that are translated outside of the matrix borders are erased. Return the largest possible overlap. ',
  },
  {
    question_title: 'Rectangle Overlap',
    question_text:
      'An axis-aligned rectangle is represented as a list [x1, y1, x2, y2], where (x1, y1) is the coordinate of its bottom-left corner, and (x2, y2) is the coordinate of its top-right corner. Its top and bottom edges are parallel to the X-axis, and its left and right edges are parallel to the Y-axis. Two rectangles overlap if the area of their intersection is positive. To be clear, two rectangles that only touch at the corner or edges do not overlap. Given two axis-aligned rectangles rec1 and rec2, return true if they overlap, otherwise return false. ',
  },
  {
    question_title: 'New 21 Game',
    question_text:
      'Alice plays the following game, loosely based on the card game "21". Alice starts with 0 points and draws numbers while she has less than k points. During each draw, she gains an integer number of points randomly from the range [1, maxPts], where maxPts is an integer. Each draw is independent and the outcomes have equal probabilities. Alice stops drawing numbers when she gets k or more points. Return the probability that Alice has n or fewer points. Answers within 10-5 of the actual answer are considered accepted. ',
  },
  {
    question_title: 'Push Dominoes',
    question_text:
      'There are n dominoes in a line, and we place each domino vertically upright. In the beginning, we simultaneously push some of the dominoes either to the left or to the right. After each second, each domino that is falling to the left pushes the adjacent domino on the left. Similarly, the dominoes falling to the right push their adjacent dominoes standing on the right. When a vertical domino has dominoes falling on it from both sides, it stays still due to the balance of the forces. For the purposes of this question, we will consider that a falling domino expends no additional force to a falling or already fallen domino. You are given a string dominoes representing the initial state where: Return a string representing the final state. ',
  },
  {
    question_title: 'Similar String Groups',
    question_text:
      'Two strings X\xa0and Y\xa0are similar if we can swap two letters (in different positions) of X, so that\xa0it equals Y. Also two strings X and Y are similar if they are equal. For example, "tars"\xa0and "rats"\xa0are similar (swapping at positions 0 and 2), and "rats" and "arts" are similar, but "star" is not similar to "tars", "rats", or "arts". Together, these form two connected groups by similarity: {"tars", "rats", "arts"} and {"star"}.\xa0 Notice that "tars" and "arts" are in the same group even though they are not similar.\xa0 Formally, each group is such that a word is in the group if and only if it is similar to at least one other word in the group. We are given a list strs of strings where every string in strs is an anagram of every other string in strs. How many groups are there? ',
  },
  {
    question_title: 'Magic Squares In Grid',
    question_text:
      'A 3 x 3 magic square is a 3 x 3 grid filled with distinct numbers from 1 to 9 such that each row, column, and both diagonals all have the same sum. Given a row x col\xa0grid\xa0of integers, how many 3 x 3 "magic square" subgrids are there?\xa0 (Each subgrid is contiguous). ',
  },
  {
    question_title: 'Keys and Rooms',
    question_text:
      'There are n rooms labeled from 0 to n - 1\xa0and all the rooms are locked except for room 0. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key. When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms. Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise. ',
  },
  {
    question_title: 'Split Array into Fibonacci Sequence',
    question_text:
      'You are given a string of digits num, such as "123456579". We can split it into a Fibonacci-like sequence [123, 456, 579]. Formally, a Fibonacci-like sequence is a list f of non-negative integers such that: Note that when splitting the string into pieces, each piece must not have extra leading zeroes, except if the piece is the number 0 itself. Return any Fibonacci-like sequence split from num, or return [] if it cannot be done. ',
  },
  {
    question_title: 'Guess the Word',
    question_text:
      'This is an interactive problem. You are given an array of unique strings wordlist where wordlist[i] is 6 letters long, and one word in this list is chosen as secret. You may call Master.guess(word) to guess a word. The guessed word should have type string and must be from the original list with 6 lowercase letters. This function returns an integer type, representing the number of exact matches (value and position) of your guess to the secret word. Also, if your guess is not in the given wordlist, it will return -1 instead. For each test case, you have exactly 10 guesses to guess the word. At the end of any number of calls, if you have made 10 or fewer calls to Master.guess and at least one of these guesses was secret, then you pass the test case. ',
  },
  {
    question_title: 'Backspace String Compare',
    question_text:
      "Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character. Note that after backspacing an empty text, the text will continue empty. ",
  },
  {
    question_title: 'Longest Mountain in Array',
    question_text:
      'You may recall that an array arr is a mountain array if and only if: Given an integer array arr, return the length of the longest subarray, which is a mountain. Return 0 if there is no mountain subarray. ',
  },
  {
    question_title: 'Hand of Straights',
    question_text:
      'Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards. Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, return true if she can rearrange the cards, or false otherwise. ',
  },
  {
    question_title: 'Shortest Path Visiting All Nodes',
    question_text:
      'You have an undirected, connected graph of n nodes labeled from 0 to n - 1. You are given an array graph where graph[i] is a list of all the nodes connected with node i by an edge. Return the length of the shortest path that visits every node. You may start and stop at any node, you may revisit nodes multiple times, and you may reuse edges. ',
  },
  {
    question_title: 'Shifting Letters',
    question_text:
      "You are given a string s of lowercase English letters and an integer array shifts of the same length. Call the shift() of a letter, the next letter in the alphabet, (wrapping around so that 'z' becomes 'a'). Now for each shifts[i] = x, we want to shift the first i + 1 letters of s, x times. Return the final string after all such shifts to s are applied. ",
  },
  {
    question_title: 'Maximize Distance to Closest Person',
    question_text:
      'You are given an array representing a row of seats where seats[i] = 1 represents a person sitting in the ith seat, and seats[i] = 0 represents that the ith seat is empty (0-indexed). There is at least one empty seat, and at least one person sitting. Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized. Return that maximum distance to the closest person. ',
  },
  {
    question_title: 'Rectangle Area II',
    question_text:
      'You are given a 2D array of axis-aligned rectangles. Each rectangle[i] = [xi1, yi1, xi2, yi2] denotes the ith rectangle where (xi1, yi1) are the coordinates of the bottom-left corner, and (xi2, yi2) are the coordinates of the top-right corner. Calculate the total area covered by all rectangles in the plane. Any area covered by two or more rectangles should only be counted once. Return the total area. Since the answer may be too large, return it modulo 109 + 7. ',
  },
  {
    question_title: 'Loud and Rich',
    question_text:
      'There is a group of n people labeled from 0 to n - 1 where each person has a different amount of money and a different level of quietness. You are given an array richer where richer[i] = [ai, bi] indicates that ai has more money than bi and an integer array quiet where quiet[i] is the quietness of the ith person. All the given data in richer are logically correct (i.e., the data will not lead you to a situation where x is richer than y and y is richer than x at the same time). Return an integer array answer where answer[x] = y if y is the least quiet person (that is, the person y with the smallest value of quiet[y]) among all people who definitely have equal to or more money than the person x. ',
  },
  {
    question_title: 'Peak Index in a Mountain Array',
    question_text:
      "Let's call an array arr a mountain\xa0if the following properties hold: Given an integer array arr that is guaranteed to be\xa0a mountain, return any\xa0i\xa0such that\xa0arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1]. ",
  },
  {
    question_title: 'Car Fleet',
    question_text:
      "There are n cars going to the same destination along a one-lane road. The destination is target miles away. You are given two integer array position and speed, both of length n, where position[i] is the position of the ith car and speed[i] is the speed of the ith car (in miles per hour). A car can never pass another car ahead of it, but it can catch up to it\xa0and drive bumper to bumper at the same speed. The faster car will slow down to match the slower car's speed. The distance between these two cars is ignored (i.e., they are assumed to have the same position). A car fleet is some non-empty set of cars driving at the same position and same speed. Note that a single car is also a car fleet. If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet. Return the number of car fleets that will arrive at the destination. ",
  },
  {
    question_title: 'K-Similar Strings',
    question_text:
      'Strings s1 and s2 are k-similar (for some non-negative integer k) if we can swap the positions of two letters in s1 exactly k times so that the resulting string equals s2. Given two anagrams s1 and s2, return the smallest k for which s1 and s2 are k-similar. ',
  },
  {
    question_title: 'Score of Parentheses',
    question_text:
      'Given a balanced parentheses string s, return the score of the string. The score of a balanced parentheses string is based on the following rule: ',
  },
  {
    question_title: 'Minimum Cost to Hire K Workers',
    question_text:
      'There are n workers. You are given two integer arrays quality and wage where quality[i] is the quality of the ith worker and wage[i] is the minimum wage expectation for the ith worker. We want to hire exactly k workers to form a paid group. To hire a group of k workers, we must pay them according to the following rules: Given the integer k, return the least amount of money needed to form a paid group satisfying the above conditions. Answers within 10-5 of the actual answer will be accepted. ',
  },
  {
    question_title: 'Mirror Reflection',
    question_text:
      'There is a special square room with mirrors on each of the four walls. Except for the southwest corner, there are receptors on each of the remaining corners, numbered 0, 1, and 2. The square room has walls of length p\xa0and a laser ray from the southwest corner first meets the east wall at a distance q from the 0th receptor. Given the two integers p and q, return the number of the receptor that the ray meets first. The test cases are guaranteed so that the ray will meet a receptor eventually. ',
  },
  {
    question_title: 'Buddy Strings',
    question_text:
      'Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false. Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j]. ',
  },
  {
    question_title: 'Lemonade Change',
    question_text:
      'At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5. Note that you do not have any change in hand at first. Given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can provide every customer with the correct change, or false otherwise. ',
  },
  {
    question_title: 'Score After Flipping Matrix',
    question_text:
      "You are given an m x n binary matrix grid. A move consists of choosing any row or column and toggling each value in that row or column (i.e., changing all 0's to 1's, and all 1's to 0's). Every row of the matrix is interpreted as a binary number, and the score of the matrix is the sum of these numbers. Return the highest possible score after making any number of moves (including zero moves). ",
  },
  {
    question_title: 'Shortest Subarray with Sum at Least K',
    question_text:
      'Given an integer array nums and an integer k, return the length of the shortest non-empty subarray of nums with a sum of at least k. If there is no such subarray, return -1. A subarray is a contiguous part of an array. ',
  },
  {
    question_title: 'All Nodes Distance K in Binary Tree',
    question_text:
      'Given the root of a binary tree, the value of a target node target, and an integer k, return an array of the values of all nodes that have a distance k from the target node. You can return the answer in any order. ',
  },
  {
    question_title: 'Random Pick with Blacklist',
    question_text:
      'You are given an integer n and an array of unique integers blacklist. Design an algorithm to pick a random integer in the range [0, n - 1] that is not in blacklist. Any integer that is in the mentioned range and not in blacklist should be equally likely to be returned. Optimize your algorithm such that it minimizes the number of calls to the built-in random function of your language. Implement the Solution class: ',
  },
  {
    question_title: 'Shortest Path to Get All Keys',
    question_text:
      'You are given an m x n grid grid where: You start at the starting point and one move consists of walking one space in one of the four cardinal directions. You cannot walk outside the grid, or walk into a wall. If you walk over a key, you can pick it up and you cannot walk over a lock unless you have its corresponding key. For some 1 <= k <= 6, there is exactly one lowercase and one uppercase letter of the first k letters of the English alphabet in the grid. This means that there is exactly one key for each lock, and one lock for each key; and also that the letters used to represent the keys and locks were chosen in the same order as the English alphabet. Return the lowest number of moves to acquire all keys. If it is impossible, return -1. ',
  },
  {
    question_title: 'Smallest Subtree with all the Deepest Nodes',
    question_text:
      'Given the root of a binary tree, the depth of each node is the shortest distance to the root. Return the smallest subtree such that it contains all the deepest nodes in the original tree. A node is called the deepest if it has the largest depth possible among any node in the entire tree. The subtree of a node is a tree consisting of that node, plus the set of all descendants of that node. ',
  },
  {
    question_title: 'Prime Palindrome',
    question_text:
      'Given an integer n, return the smallest prime palindrome greater than or equal to n. An integer is prime if it has exactly two divisors: 1 and itself. Note that 1 is not a prime number. An integer is a palindrome if it reads the same from left to right as it does from right to left. The test cases are generated so that the answer always exists and is in the range [2, 2 * 108]. ',
  },
  {
    question_title: 'Transpose Matrix',
    question_text:
      "Given a 2D integer array matrix, return the transpose of matrix. The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.  ",
  },
  {
    question_title: 'Binary Gap',
    question_text:
      "Given a positive integer n, find and return the longest distance between any two adjacent 1's in the binary representation of n. If there are no two adjacent 1's, return 0. Two 1's are adjacent if there are only 0's separating them (possibly no 0's). The distance between two 1's is the absolute difference between their bit positions. For example, the two 1's in \"1001\" have a distance of 3. ",
  },
  {
    question_title: 'Reordered Power of 2',
    question_text:
      'You are given an integer n. We reorder the digits in any order (including the original order) such that the leading digit is not zero. Return true if and only if we can do this so that the resulting number is a power of two. ',
  },
  {
    question_title: 'Advantage Shuffle',
    question_text:
      'You are given two integer arrays nums1 and nums2 both of the same length. The advantage of nums1 with respect to nums2 is the number of indices i for which nums1[i] > nums2[i]. Return any permutation of nums1 that maximizes its advantage with respect to nums2. ',
  },
  {
    question_title: 'Minimum Number of Refueling Stops',
    question_text:
      'A car travels from a starting position to a destination which is target miles east of the starting position. There are gas stations along the way. The gas stations are represented as an array stations where stations[i] = [positioni, fueli] indicates that the ith gas station is positioni miles east of the starting position and has fueli liters of gas. The car starts with an infinite tank of gas, which initially has startFuel liters of fuel in it. It uses one liter of gas per one mile that it drives. When the car reaches a gas station, it may stop and refuel, transferring all the gas from the station into the car. Return the minimum number of refueling stops the car must make in order to reach its destination. If it cannot reach the destination, return -1. Note that if the car reaches a gas station with 0 fuel left, the car can still refuel there. If the car reaches the destination with 0 fuel left, it is still considered to have arrived. ',
  },
  {
    question_title: 'Implement Rand10() Using Rand7()',
    question_text:
      "Given the API rand7() that generates a uniform random integer in the range [1, 7], write a function rand10() that generates a uniform random integer in the range [1, 10]. You can only call the API rand7(), and you shouldn't call any other API. Please do not use a language's built-in random API. Each test case will have one internal argument n, the number of times that your implemented function rand10() will be called while testing. Note that this is not an argument passed to rand10(). ",
  },
  {
    question_title: 'Leaf-Similar Trees',
    question_text:
      'Consider all the leaves of a binary tree, from\xa0left to right order, the values of those\xa0leaves form a leaf value sequence.  For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8). Two binary trees are considered leaf-similar\xa0if their leaf value sequence is the same. Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar. ',
  },
  {
    question_title: 'Length of Longest Fibonacci Subsequence',
    question_text:
      'A sequence x1, x2, ..., xn is Fibonacci-like if: Given a strictly increasing array arr of positive integers forming a sequence, return the length of the longest Fibonacci-like subsequence of arr. If one does not exist, return 0. A subsequence is derived from another sequence arr by deleting any number of elements (including none) from arr, without changing the order of the remaining elements. For example, [3, 5, 8] is a subsequence of [3, 4, 5, 6, 7, 8]. ',
  },
  {
    question_title: 'Walking Robot Simulation',
    question_text:
      'A robot on an infinite XY-plane starts at point (0, 0) facing north. The robot can receive a sequence of these three possible types of commands: Some of the grid squares are obstacles. The ith obstacle is at grid point obstacles[i] = (xi, yi). If the robot runs into an obstacle, then it will instead stay in its current location and move on to the next command. Return the maximum Euclidean distance that the robot ever gets from the origin squared (i.e. if the distance is 5, return 25). Note: ',
  },
  {
    question_title: 'Koko Eating Bananas',
    question_text:
      'Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours. Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour. Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return. Return the minimum integer k such that she can eat all the bananas within h hours. ',
  },
  {
    question_title: 'Stone Game',
    question_text:
      'Alice and Bob play a game with piles of stones. There are an even number of piles arranged in a row, and each pile has a positive integer number of stones piles[i]. The objective of the game is to end with the most stones. The total number of stones across all the piles is odd, so there are no ties. Alice and Bob take turns, with Alice starting first. Each turn, a player takes the entire pile of stones either from the beginning or from the end of the row. This continues until there are no more piles left, at which point the person with the most stones wins. Assuming Alice and Bob play optimally, return true if Alice wins the game, or false if Bob wins. ',
  },
  {
    question_title: 'Nth Magical Number',
    question_text:
      'A positive integer is magical if it is divisible by either a or b. Given the three integers n, a, and b, return the nth magical number. Since the answer may be very large, return it modulo 109 + 7. ',
  },
  {
    question_title: 'Profitable Schemes',
    question_text:
      "There is a group of n members, and a list of various crimes they could commit. The ith crime generates a profit[i] and requires group[i] members to participate in it. If a member participates in one crime, that member can't participate in another crime. Let's call a profitable scheme any subset of these crimes that generates at least minProfit profit, and the total number of members participating in that subset of crimes is at most n. Return the number of schemes that can be chosen. Since the answer may be very large, return it modulo 109 + 7. ",
  },
  {
    question_title: 'Random Pick with Weight',
    question_text:
      'You are given a 0-indexed array of positive integers w where w[i] describes the weight of the ith index. You need to implement the function pickIndex(), which randomly picks an index in the range [0, w.length - 1] (inclusive) and returns it. The probability of picking an index i is w[i] / sum(w). ',
  },
  {
    question_title: 'Random Flip Matrix',
    question_text:
      'There is an m x n binary grid matrix with all the values set 0 initially. Design an algorithm to randomly pick an index (i, j) where matrix[i][j] == 0 and flips it to 1. All the indices (i, j) where matrix[i][j] == 0 should be equally likely to be returned. Optimize your algorithm to minimize the number of calls made to the built-in random function of your language and optimize the time and space complexity. Implement the Solution class: ',
  },
  {
    question_title: 'Random Point in Non-overlapping Rectangles',
    question_text:
      'You are given an array of non-overlapping axis-aligned rectangles rects where rects[i] = [ai, bi, xi, yi] indicates that (ai, bi) is the bottom-left corner point of the ith rectangle and (xi, yi) is the top-right corner point of the ith rectangle. Design an algorithm to pick a random integer point inside the space covered by one of the given rectangles. A point on the perimeter of a rectangle is included in the space covered by the rectangle. Any integer point inside the space covered by one of the given rectangles should be equally likely to be returned. Note that an integer point is a point that has integer coordinates. Implement the Solution class: ',
  },
  {
    question_title: 'Generate Random Point in a Circle',
    question_text:
      'Given the radius and the position of the center of a circle, implement the function randPoint which generates a uniform random point inside the circle. Implement the Solution class: ',
  },
  {
    question_title: 'Decoded String at Index',
    question_text:
      'You are given an encoded string s. To decode the string to a tape, the encoded string is read one character at a time and the following steps are taken: Given an integer k, return the kth letter (1-indexed) in the decoded string. ',
  },
  {
    question_title: 'Boats to Save People',
    question_text:
      'You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit. Return the minimum number of boats to carry every given person. ',
  },
  {
    question_title: 'Projection Area of 3D Shapes',
    question_text:
      'You are given an n x n grid where we place some 1 x 1 x 1 cubes that are axis-aligned with the x, y, and z axes. Each value v = grid[i][j] represents a tower of v cubes placed on top of the cell (i, j). We view the projection of these cubes onto the xy, yz, and zx planes. A projection is like a shadow, that maps our 3-dimensional figure to a 2-dimensional plane. We are viewing the "shadow" when looking at the cubes from the top, the front, and the side. Return the total area of all three projections. ',
  },
  {
    question_title: 'Uncommon Words from Two Sentences',
    question_text:
      'A sentence is a string of single-space separated words where each word consists only of lowercase letters. A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence. Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order. ',
  },
  {
    question_title: 'Spiral Matrix III',
    question_text:
      "You start at the cell (rStart, cStart) of an rows x cols grid facing east. The northwest corner is at the first row and column in the grid, and the southeast corner is at the last row and column. You will walk in a clockwise spiral shape to visit every position in this grid. Whenever you move outside the grid's boundary, we continue our walk outside the grid (but may return to the grid boundary later.). Eventually, we reach all rows * cols spaces of the grid. Return an array of coordinates representing the positions of the grid in the order you visited them. ",
  },
  {
    question_title: 'Possible Bipartition',
    question_text:
      'We want to split a group of n people (labeled from 1 to n) into two groups of any size. Each person may dislike some other people, and they should not go into the same group. Given the integer n and the array dislikes where dislikes[i] = [ai, bi] indicates that the person labeled ai does not like the person labeled bi, return true if it is possible to split everyone into two groups in this way. ',
  },
  {
    question_title: 'Super Egg Drop',
    question_text:
      'You are given k identical eggs and you have access to a building with n floors labeled from 1 to n. You know that there exists a floor f where 0 <= f <= n such that any egg dropped at a floor higher than f will break, and any egg dropped at or below floor f will not break. Each move, you may take an unbroken egg and drop it from any floor x (where 1 <= x <= n). If the egg breaks, you can no longer use it. However, if the egg does not break, you may reuse it in future moves. Return the minimum number of moves that you need to determine with certainty what the value of f is. ',
  },
  {
    question_title: 'Fair Candy Swap',
    question_text:
      'Alice and Bob have a different total number of candies. You are given two integer arrays aliceSizes and bobSizes where aliceSizes[i] is the number of candies of the ith box of candy that Alice has and bobSizes[j] is the number of candies of the jth box of candy that Bob has. Since they are friends, they would like to exchange one candy box each so that after the exchange, they both have the same total amount of candy. The total amount of candy a person has is the sum of the number of candies in each box they have. Return an integer array answer where answer[0] is the number of candies in the box that Alice must exchange, and answer[1] is the number of candies in the box that Bob must exchange. If there are multiple answers, you may return any one of them. It is guaranteed that at least one answer exists. ',
  },
  {
    question_title: 'Construct Binary Tree from Preorder and Postorder Traversal',
    question_text:
      'Given two integer arrays, preorder and postorder where preorder is the preorder traversal of a binary tree of distinct values and postorder is the postorder traversal of the same tree, reconstruct and return the binary tree. If there exist multiple answers, you can return any of them. ',
  },
  {
    question_title: 'Find and Replace Pattern',
    question_text:
      'Given a list of strings words and a string pattern, return a list of words[i] that match pattern. You may return the answer in any order. A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we get the desired word. Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter. ',
  },
  {
    question_title: 'Sum of Subsequence Widths',
    question_text:
      'The width of a sequence is the difference between the maximum and minimum elements in the sequence. Given an array of integers nums, return the sum of the widths of all the non-empty subsequences of nums. Since the answer may be very large, return it modulo 109 + 7. A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7]. ',
  },
  {
    question_title: 'Surface Area of 3D Shapes',
    question_text:
      'You are given an n x n grid where you have placed some 1 x 1 x 1 cubes. Each value v = grid[i][j] represents a tower of v cubes placed on top of cell (i, j). After placing these cubes, you have decided to glue any directly adjacent cubes to each other, forming several irregular 3D shapes. Return the total surface area of the resulting shapes. Note: The bottom face of each shape counts toward its surface area. ',
  },
  {
    question_title: 'Groups of Special-Equivalent Strings',
    question_text:
      'You are given an array of strings of the same length words. In one move, you can swap any two even indexed characters or any two odd indexed characters of a string words[i]. Two strings words[i] and words[j] are special-equivalent if after any number of moves, words[i] == words[j]. A group of special-equivalent strings from words is a non-empty subset of words such that: Return the number of groups of special-equivalent strings from words. ',
  },
  {
    question_title: 'All Possible Full Binary Trees',
    question_text:
      'Given an integer n, return a list of all possible full binary trees with n nodes. Each node of each tree in the answer must have Node.val == 0. Each element of the answer is the root node of one possible tree. You may return the final list of trees in any order. A full binary tree is a binary tree where each node has exactly 0 or 2 children. ',
  },
  {
    question_title: 'Maximum Frequency Stack',
    question_text:
      'Design a stack-like data structure to push elements to the stack and pop the most frequent element from the stack. Implement the FreqStack class: ',
  },
  {
    question_title: 'Monotonic Array',
    question_text:
      'An array is monotonic if it is either monotone increasing or monotone decreasing. An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j]. Given an integer array nums, return true if the given array is monotonic, or false otherwise. ',
  },
  {
    question_title: 'Increasing Order Search Tree',
    question_text:
      'Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child. ',
  },
  {
    question_title: 'Bitwise ORs of Subarrays',
    question_text:
      'We have an array arr of non-negative integers. For every (contiguous) subarray sub = [arr[i], arr[i + 1], ..., arr[j]] (with i <= j), we take the bitwise OR of all the elements in sub, obtaining a result arr[i] | arr[i + 1] | ... | arr[j]. Return the number of possible results. Results that occur more than once are only counted once in the final answer ',
  },
  {
    question_title: 'Orderly Queue',
    question_text:
      'You are given a string s and an integer k. You can choose one of the first k letters of s and append it at the end of the string.. Return the lexicographically smallest string you could have after applying the mentioned step any number of moves. ',
  },
  {
    question_title: 'RLE Iterator',
    question_text:
      'We can use run-length encoding (i.e., RLE) to encode a sequence of integers. In a run-length encoded array of even length encoding (0-indexed), for all even i, encoding[i] tells us the number of times that the non-negative integer value encoding[i + 1] is repeated in the sequence. Given a run-length encoded array, design an iterator that iterates through it. Implement the RLEIterator class: ',
  },
  {
    question_title: 'Numbers At Most N Given Digit Set',
    question_text:
      "Given an array of digits which is sorted in non-decreasing order. You can write numbers using each digits[i] as many times as we want. For example, if digits = ['1','3','5'], we may write numbers such as '13', '551', and '1351315'. Return the number of positive integers that can be generated that are less than or equal to a given integer n. ",
  },
  {
    question_title: 'Valid Permutations for DI Sequence',
    question_text:
      'You are given a string s of length n where s[i] is either: A permutation perm of n + 1 integers of all the integers in the range [0, n] is called a valid permutation if for all valid i: Return the number of valid permutations perm. Since the answer may be large, return it modulo 109 + 7. ',
  },
  {
    question_title: 'Fruit Into Baskets',
    question_text:
      'You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces. You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow: Given the integer array fruits, return the maximum number of fruits you can pick. ',
  },
  {
    question_title: 'Sort Array By Parity',
    question_text:
      'Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers. Return any array that satisfies this condition. ',
  },
  {
    question_title: 'Super Palindromes',
    question_text:
      "Let's say a positive integer is a super-palindrome if it is a palindrome, and it is also the square of a palindrome. Given two positive integers left and right represented as strings, return the number of super-palindromes integers in the inclusive range [left, right]. ",
  },
  {
    question_title: 'Sum of Subarray Minimums',
    question_text:
      'Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr. Since the answer may be large, return the answer modulo 109 + 7. ',
  },
  {
    question_title: 'Smallest Range I',
    question_text:
      'You are given an integer array nums and an integer k. In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i. The score of nums is the difference between the maximum and minimum elements in nums. Return the minimum score of nums after applying the mentioned operation at most once for each index in it. ',
  },
  {
    question_title: 'Snakes and Ladders',
    question_text:
      'You are given an n x n integer matrix board where the cells are labeled from 1 to n2 in a Boustrophedon style starting from the bottom left of the board (i.e. board[n - 1][0]) and alternating direction each row. You start on square 1 of the board. In each move, starting from square curr, do the following: A board square on row r and column c has a snake or ladder if board[r][c] != -1. The destination of that snake or ladder is board[r][c]. Squares 1 and n2 do not have a snake or ladder. Note that you only take a snake or ladder at most once per move. If the destination to a snake or ladder is the start of another snake or ladder, you do not follow the subsequent\xa0snake or ladder. Return the least number of moves required to reach the square n2. If it is not possible to reach the square, return -1. ',
  },
  {
    question_title: 'Smallest Range II',
    question_text:
      'You are given an integer array nums and an integer k. For each index i where 0 <= i < nums.length, change nums[i] to be either nums[i] + k or nums[i] - k. The score of nums is the difference between the maximum and minimum elements in nums. Return the minimum score of nums after changing the values at each index. ',
  },
  {
    question_title: 'Online Election',
    question_text:
      'You are given two integer arrays persons and times. In an election, the ith vote was cast for persons[i] at time times[i]. For each query at a time t, find the person that was leading the election at time t. Votes cast at time t will count towards our query. In the case of a tie, the most recent vote (among tied candidates) wins. Implement the TopVotedCandidate class: ',
  },
  {
    question_title: 'Sort an Array',
    question_text: 'Given an array of integers nums, sort the array in ascending order. ',
  },
  {
    question_title: 'Cat and Mouse',
    question_text:
      "A game on an undirected graph is played by two players, Mouse and Cat, who alternate turns. The graph is given as follows: graph[a] is a list of all nodes b such that ab is an edge of the graph. The mouse starts at node 1 and goes first, the cat starts at node 2 and goes second, and there is a hole at node 0. During each player's turn, they must travel along one\xa0edge of the graph that meets where they are.\xa0 For example, if the Mouse is at node 1, it must travel to any node in graph[1]. Additionally, it is not allowed for the Cat to travel to the Hole (node 0.) Then, the game can end in three\xa0ways: Given a graph, and assuming both players play optimally, return ",
  },
  {
    question_title: 'X of a Kind in a Deck of Cards',
    question_text:
      'In a deck of cards, each card has an integer written on it. Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where: ',
  },
  {
    question_title: 'Partition Array into Disjoint Intervals',
    question_text:
      'Given an integer array nums, partition it into two (contiguous) subarrays left and right so that: Return the length of left after such a partitioning. Test cases are generated such that partitioning exists. ',
  },
  {
    question_title: 'Word Subsets',
    question_text:
      'You are given two string arrays words1 and words2. A string b is a subset of string a if every letter in b occurs in a including multiplicity. A string a from words1 is universal if for every string b in words2, b is a subset of a. Return an array of all the universal strings in words1. You may return the answer in any order. ',
  },
  {
    question_title: 'Reverse Only Letters',
    question_text:
      'Given a string s, reverse the string according to the following rules: Return s after reversing it. ',
  },
  {
    question_title: 'Maximum Sum Circular Subarray',
    question_text:
      'Given a circular integer array nums of length n, return the maximum possible sum of a non-empty subarray of nums. A circular array means the end of the array connects to the beginning of the array. Formally, the next element of nums[i] is nums[(i + 1) % n] and the previous element of nums[i] is nums[(i - 1 + n) % n]. A subarray may only include each element of the fixed buffer nums at most once. Formally, for a subarray nums[i], nums[i + 1], ..., nums[j], there does not exist i <= k1, k2 <= j with k1 % n == k2 % n. ',
  },
  {
    question_title: 'Complete Binary Tree Inserter',
    question_text:
      'A complete binary tree is a binary tree in which every level, except possibly the last, is completely filled, and all nodes are as far left as possible. Design an algorithm to insert a new node to a complete binary tree keeping it complete after the insertion. Implement the CBTInserter class: ',
  },
  {
    question_title: 'Number of Music Playlists',
    question_text:
      'Your music player contains n different songs. You want to listen to goal songs (not necessarily different) during your trip. To avoid boredom, you will create a playlist so that: Given n, goal, and k, return the number of possible playlists that you can create. Since the answer can be very large, return it modulo 109 + 7. ',
  },
  {
    question_title: 'Minimum Add to Make Parentheses Valid',
    question_text:
      'A parentheses string is valid if and only if: You are given a parentheses string s. In one move, you can insert a parenthesis at any position of the string. Return the minimum number of moves required to make s valid. ',
  },
  {
    question_title: 'Sort Array By Parity II',
    question_text:
      'Given an array of integers nums, half of the integers in nums are odd, and the other half are even. Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even. Return any answer array that satisfies this condition. ',
  },
  {
    question_title: '3Sum With Multiplicity',
    question_text:
      'Given an integer array arr, and an integer target, return the number of tuples i, j, k such that i < j < k and arr[i] + arr[j] + arr[k] == target. As the answer can be very large, return it modulo 109 + 7. ',
  },
  {
    question_title: 'Minimize Malware Spread',
    question_text:
      'You are given a network of n nodes represented as an n x n adjacency matrix graph, where the ith node is directly connected to the jth node if graph[i][j] == 1. Some nodes initial are initially infected by malware. Whenever two nodes are directly connected, and at least one of those two nodes is infected by malware, both nodes will be infected by malware. This spread of malware will continue until no more nodes can be infected in this manner. Suppose M(initial) is the final number of nodes infected with malware in the entire network after the spread of malware stops. We will remove exactly one node from initial. Return the node that, if removed, would minimize M(initial). If multiple nodes could be removed to minimize M(initial), return such a node with the smallest index. Note that if a node was removed from the initial list of infected nodes, it might still be infected later due to the malware spread. ',
  },
  {
    question_title: 'Long Pressed Name',
    question_text:
      'Your friend is typing his name into a keyboard. Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times. You examine the typed characters of the keyboard. Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed. ',
  },
  {
    question_title: 'Flip String to Monotone Increasing',
    question_text:
      "A binary string is monotone increasing if it consists of some number of 0's (possibly none), followed by some number of 1's (also possibly none). You are given a binary string s. You can flip s[i] changing it from 0 to 1 or from 1 to 0. Return the minimum number of flips to make s monotone increasing. ",
  },
  {
    question_title: 'Three Equal Parts',
    question_text:
      'You are given an array arr which consists of only zeros and ones, divide the array into three non-empty parts such that all of these parts represent the same binary value. If it is possible, return any [i, j] with i + 1 < j, such that: If it is not possible, return [-1, -1]. Note that the entire part is used when considering what binary value it represents. For example, [1,1,0] represents 6 in decimal, not 3. Also, leading zeros are allowed, so [0,1,1] and [1,1] represent the same value. ',
  },
  {
    question_title: 'Minimize Malware Spread II',
    question_text:
      'You are given a network of n nodes represented as an n x n adjacency matrix graph, where the ith node is directly connected to the jth node if graph[i][j] == 1. Some nodes initial are initially infected by malware. Whenever two nodes are directly connected, and at least one of those two nodes is infected by malware, both nodes will be infected by malware. This spread of malware will continue until no more nodes can be infected in this manner. Suppose M(initial) is the final number of nodes infected with malware in the entire network after the spread of malware stops. We will remove exactly one node from initial, completely removing it and any connections from this node to any other node. Return the node that, if removed, would minimize M(initial). If multiple nodes could be removed to minimize M(initial), return such a node with the smallest index. ',
  },
  {
    question_title: 'Unique Email Addresses',
    question_text:
      "Every valid email consists of a local name and a domain name, separated by the '@' sign. Besides lowercase letters, the email may contain one or more '.' or '+'. If you add periods '.' between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name. Note that this rule does not apply to domain names. If you add a plus '+' in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered. Note that this rule does not apply to domain names. It is possible to use both of these rules at the same time. Given an array of strings emails where we send one email to each emails[i], return the number of different addresses that actually receive mails. ",
  },
  {
    question_title: 'Binary Subarrays With Sum',
    question_text:
      'Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal. A subarray is a contiguous part of the array. ',
  },
  {
    question_title: 'Minimum Falling Path Sum',
    question_text:
      'Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix. A falling path starts at any element in the first row and chooses the element in the next row that is either directly below or diagonally left/right. Specifically, the next element from position (row, col) will be (row + 1, col - 1), (row + 1, col), or (row + 1, col + 1). ',
  },
  {
    question_title: 'Beautiful Array',
    question_text:
      'An array nums of length n is beautiful if: Given the integer n, return any beautiful array nums of length n. There will be at least one valid answer for the given n. ',
  },
  {
    question_title: 'Shortest Bridge',
    question_text:
      "You are given an n x n binary matrix grid where 1 represents land and 0 represents water. An island is a 4-directionally connected group of 1's not connected to any other 1's. There are exactly two islands in grid. You may change 0's to 1's to connect the two islands to form one island. Return the smallest number of 0's you must flip to connect the two islands. ",
  },
  {
    question_title: 'Knight Dialer',
    question_text:
      'The chess knight has a unique movement,\xa0it may move two squares vertically and one square horizontally, or two squares horizontally and one square vertically (with both forming the shape of an L). The possible movements of chess knight are shown in this diagaram: A chess knight can move as indicated in the chess diagram below: We have a chess knight and a phone pad as shown below, the knight can only stand on a numeric cell\xa0(i.e. blue cell). Given an integer n, return how many distinct phone numbers of length n we can dial. You are allowed to place the knight on any numeric cell initially and then you should perform n - 1 jumps to dial a number of length n. All jumps should be valid knight jumps. As the answer may be very large, return the answer modulo 109 + 7. ',
  },
  {
    question_title: 'Stamping The Sequence',
    question_text:
      "You are given two strings stamp and target. Initially, there is a string s of length target.length with all s[i] == '?'. In one turn, you can place stamp over s and replace every letter in the s with the corresponding letter from stamp. We want to convert s to target using at most 10 * target.length turns. Return an array of the index of the left-most letter being stamped at each turn. If we cannot obtain target from s within 10 * target.length turns, return an empty array. ",
  },
  {
    question_title: 'Reorder Data in Log Files',
    question_text:
      'You are given an array of logs. Each log is a space-delimited string of words, where the first word is the identifier. There are two types of logs: Reorder these logs so that: Return the final order of the logs. ',
  },
  {
    question_title: 'Range Sum of BST',
    question_text:
      'Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high]. ',
  },
  {
    question_title: 'Minimum Area Rectangle',
    question_text:
      'You are given an array of points in the X-Y plane points where points[i] = [xi, yi]. Return the minimum area of a rectangle formed from these points, with sides parallel to the X and Y axes. If there is not any such rectangle, return 0. ',
  },
  {
    question_title: 'Distinct Subsequences II',
    question_text:
      'Given a string s, return the number of distinct non-empty subsequences of s. Since the answer may be very large, return it modulo 109 + 7. ',
  },
  {
    question_title: 'Valid Mountain Array',
    question_text:
      'Given an array of integers arr, return true if and only if it is a valid mountain array. Recall that arr is a mountain array if and only if: ',
  },
  {
    question_title: 'DI String Match',
    question_text:
      'A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where: Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them. ',
  },
  {
    question_title: 'Find the Shortest Superstring',
    question_text:
      'Given an array of strings words, return the smallest string that contains each string in words as a substring. If there are multiple valid strings of the smallest length, return any of them. You may assume that no string in words is a substring of another string in words. ',
  },
  {
    question_title: 'Delete Columns to Make Sorted',
    question_text:
      "You are given an array of n strings strs, all of the same length. The strings can be arranged such that there is one on each line, making a grid. For example, strs = [\"abc\", \"bce\", \"cae\"] can be arranged as: You want to delete the columns that are not sorted lexicographically. In the above example (0-indexed), columns 0 ('a', 'b', 'c') and 2 ('c', 'e', 'e') are sorted while column 1 ('b', 'c', 'a') is not, so you would delete column 1. Return the number of columns that you will delete. ",
  },
  {
    question_title: 'Minimum Increment to Make Array Unique',
    question_text:
      'You are given an integer array nums. In one move, you can pick an index i where 0 <= i < nums.length and increment nums[i] by 1. Return the minimum number of moves to make every value in nums unique. ',
  },
  {
    question_title: 'Validate Stack Sequences',
    question_text:
      'Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, or false otherwise. ',
  },
  {
    question_title: 'Most Stones Removed with Same Row or Column',
    question_text:
      'On a 2D plane, we place n stones at some integer coordinate points. Each coordinate point may have at most one stone. A stone can be removed if it shares either the same row or the same column as another stone that has not been removed. Given an array stones of length n where stones[i] = [xi, yi] represents the location of the ith stone, return the largest possible number of stones that can be removed. ',
  },
  {
    question_title: 'Bag of Tokens',
    question_text:
      'You have an initial power of power, an initial score of 0, and a bag of tokens where tokens[i] is the value of the ith token (0-indexed). Your goal is to maximize your total score by potentially playing each token in one of two ways: Each token may be played at most once and in any order. You do not have to play all the tokens. Return the largest possible score you can achieve after playing any number of tokens. ',
  },
  {
    question_title: 'Largest Time for Given Digits',
    question_text:
      'Given an array arr of 4 digits, find the latest 24-hour time that can be made using each digit exactly once. 24-hour times are formatted as "HH:MM", where HH is between 00 and 23, and MM is between 00 and 59. The earliest 24-hour time is 00:00, and the latest is 23:59. Return the latest 24-hour time in "HH:MM" format. If no valid time can be made, return an empty string. ',
  },
  {
    question_title: 'Reveal Cards In Increasing Order',
    question_text:
      'You are given an integer array deck. There is a deck of cards where every card has a unique integer. The integer on the ith card is deck[i]. You can order the deck in any order you want. Initially, all the cards start face down (unrevealed) in one deck. You will do the following steps repeatedly until all cards are revealed: Return an ordering of the deck that would reveal the cards in increasing order. Note that the first entry in the answer is considered to be the top of the deck. ',
  },
  {
    question_title: 'Flip Equivalent Binary Trees',
    question_text:
      'For a binary tree T, we can define a flip operation as follows: choose any node, and swap the left and right child subtrees. A binary tree X\xa0is flip equivalent to a binary tree Y if and only if we can make X equal to Y after some number of flip operations. Given the roots of two binary trees root1 and root2, return true if the two trees are flip equivalent or false otherwise. ',
  },
  {
    question_title: 'Largest Component Size by Common Factor',
    question_text:
      'You are given an integer array of unique positive integers nums. Consider the following graph: Return the size of the largest connected component in the graph. ',
  },
  {
    question_title: 'Verifying an Alien Dictionary',
    question_text:
      'In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters. Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language. ',
  },
  {
    question_title: 'Array of Doubled Pairs',
    question_text:
      'Given an integer array of even length arr, return true if it is possible to reorder arr such that arr[2 * i + 1] = 2 * arr[2 * i] for every 0 <= i < len(arr) / 2, or false otherwise. ',
  },
  {
    question_title: 'Delete Columns to Make Sorted II',
    question_text:
      'You are given an array of n strings strs, all of the same length. We may choose any deletion indices, and we delete all the characters in those indices for each string. For example, if we have strs = ["abcdef","uvwxyz"] and deletion indices {0, 2, 3}, then the final array after deletions is ["bef", "vyz"]. Suppose we chose a set of deletion indices answer such that after deletions, the final array has its elements in lexicographic order (i.e., strs[0] <= strs[1] <= strs[2] <= ... <= strs[n - 1]). Return the minimum possible value of answer.length. ',
  },
  {
    question_title: 'Tallest Billboard',
    question_text:
      'You are installing a billboard and want it to have the largest height. The billboard will have two steel supports, one on each side. Each steel support must be an equal height. You are given a collection of rods that can be welded together. For example, if you have rods of lengths 1, 2, and 3, you can weld them together to make a support of length 6. Return the largest possible height of your billboard installation. If you cannot support the billboard, return 0. ',
  },
  {
    question_title: 'Prison Cells After N Days',
    question_text:
      "There are 8 prison cells in a row and each cell is either occupied or vacant. Each day, whether the cell is occupied or vacant changes according to the following rules: Note that because the prison is a row, the first and the last cells in the row can't have two adjacent neighbors. You are given an integer array cells where cells[i] == 1 if the ith cell is occupied and cells[i] == 0 if the ith cell is vacant, and you are given an integer n. Return the state of the prison after n days (i.e., n such changes described above). ",
  },
  {
    question_title: 'Check Completeness of a Binary Tree',
    question_text:
      'Given the root of a binary tree, determine if it is a complete binary tree. In a complete binary tree, every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h. ',
  },
  {
    question_title: 'Regions Cut By Slashes',
    question_text:
      "An n x n grid is composed of 1 x 1 squares where each 1 x 1 square consists of a '/', '\\', or blank space ' '. These characters divide the square into contiguous regions. Given the grid grid represented as a string array, return the number of regions. Note that backslash characters are escaped, so a '\\' is represented as '\\\\'. ",
  },
  {
    question_title: 'Delete Columns to Make Sorted III',
    question_text:
      'You are given an array of n strings strs, all of the same length. We may choose any deletion indices, and we delete all the characters in those indices for each string. For example, if we have strs = ["abcdef","uvwxyz"] and deletion indices {0, 2, 3}, then the final array after deletions is ["bef", "vyz"]. Suppose we chose a set of deletion indices answer such that after deletions, the final array has every string (row) in lexicographic order. (i.e., (strs[0][0] <= strs[0][1] <= ... <= strs[0][strs[0].length - 1]), and (strs[1][0] <= strs[1][1] <= ... <= strs[1][strs[1].length - 1]), and so on). Return the minimum possible value of answer.length. ',
  },
  {
    question_title: 'N-Repeated Element in Size 2N Array',
    question_text:
      'You are given an integer array nums with the following properties: Return the element that is repeated n times. ',
  },
  {
    question_title: 'Maximum Width Ramp',
    question_text:
      'A ramp in an integer array nums is a pair (i, j) for which i < j and nums[i] <= nums[j]. The width of such a ramp is j - i. Given an integer array nums, return the maximum width of a ramp in nums. If there is no ramp in nums, return 0. ',
  },
  {
    question_title: 'Minimum Area Rectangle II',
    question_text:
      'You are given an array of points in the X-Y plane points where points[i] = [xi, yi]. Return the minimum area of any rectangle formed from these points, with sides not necessarily parallel to the X and Y axes. If there is not any such rectangle, return 0. Answers within 10-5 of the actual answer will be accepted. ',
  },
  {
    question_title: 'Least Operators to Express Number',
    question_text:
      'Given a single positive integer x, we will write an expression of the form x (op1) x (op2) x (op3) x ... where each operator op1, op2, etc. is either addition, subtraction, multiplication, or division (+, -, *, or /). For example, with x = 3, we might write 3 * 3 / 3 + 3 - 3 which is a value of 3. When writing such an expression, we adhere to the following conventions: We would like to write an expression with the least number of operators such that the expression equals the given target. Return the least number of operators used. ',
  },
  {
    question_title: 'Univalued Binary Tree',
    question_text:
      'A binary tree is uni-valued if every node in the tree has the same value. Given the root of a binary tree, return true if the given tree is uni-valued, or false otherwise. ',
  },
  {
    question_title: 'Vowel Spellchecker',
    question_text:
      'Given a wordlist, we want to implement a spellchecker that converts a query word into a correct word. For a given query word, the spell checker handles two categories of spelling mistakes: In addition, the spell checker operates under the following precedence rules: Given some queries, return a list of words answer, where answer[i] is the correct word for query = queries[i]. ',
  },
  {
    question_title: 'Numbers With Same Consecutive Differences',
    question_text:
      'Return all non-negative integers of length n such that the absolute difference between every two consecutive digits is k. Note that every number in the answer must not have leading zeros. For example, 01 has one leading zero and is invalid. You may return the answer in any order. ',
  },
  {
    question_title: 'Binary Tree Cameras',
    question_text:
      'You are given the root of a binary tree. We install cameras on the tree nodes where each camera at a node can monitor its parent, itself, and its immediate children. Return the minimum number of cameras needed to monitor all nodes of the tree. ',
  },
  {
    question_title: 'Pancake Sorting',
    question_text:
      'Given an array of integers arr, sort the array by performing a series of pancake flips. In one pancake flip we do the following steps: For example, if arr = [3,2,1,4] and we performed a pancake flip choosing k = 3, we reverse the sub-array [3,2,1], so arr = [1,2,3,4] after the pancake flip at k = 3. Return an array of the k-values corresponding to a sequence of pancake flips that sort arr. Any valid answer that sorts the array within 10 * arr.length flips will be judged as correct. ',
  },
  {
    question_title: 'Powerful Integers',
    question_text:
      'Given three integers x, y, and bound, return a list of all the powerful integers that have a value less than or equal to bound. An integer is powerful if it can be represented as xi + yj for some integers i >= 0 and j >= 0. You may return the answer in any order. In your answer, each value should occur at most once. ',
  },
  {
    question_title: 'Flip Binary Tree To Match Preorder Traversal',
    question_text:
      'You are given the root of a binary tree with n nodes, where each node is uniquely assigned a value from 1 to n. You are also given a sequence of n values voyage, which is the desired pre-order traversal of the binary tree. Any node in the binary tree can be flipped by swapping its left and right subtrees. For example, flipping node 1 will have the following effect: Flip the smallest number of nodes so that the pre-order traversal of the tree matches voyage. Return a list of the values of all flipped nodes. You may return the answer in any order. If it is impossible to flip the nodes in the tree to make the pre-order traversal match voyage, return the list [-1]. ',
  },
  {
    question_title: 'Equal Rational Numbers',
    question_text:
      'Given two strings s and t, each of which represents a non-negative rational number, return true if and only if they represent the same number. The strings may use parentheses to denote the repeating part of the rational number. A rational number can be represented using up to three parts: <IntegerPart>, <NonRepeatingPart>, and a <RepeatingPart>. The number will be represented in one of the following three ways: The repeating portion of a decimal expansion is conventionally denoted within a pair of round brackets. For example: ',
  },
  {
    question_title: 'Fibonacci Number',
    question_text:
      'The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is, Given n, calculate F(n). ',
  },
  {
    question_title: 'K Closest Points to Origin',
    question_text:
      'Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0). The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2). You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in). ',
  },
  {
    question_title: 'Subarray Sums Divisible by K',
    question_text:
      'Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k. A subarray is a contiguous part of an array. ',
  },
  {
    question_title: 'Odd Even Jump',
    question_text:
      'You are given an integer array arr. From some starting index, you can make a series of jumps. The (1st, 3rd, 5th, ...) jumps in the series are called odd-numbered jumps, and the (2nd, 4th, 6th, ...) jumps in the series are called even-numbered jumps. Note that the jumps are numbered, not the indices. You may jump forward from index i to index j (with i < j) in the following way: A starting index is good if, starting from that index, you can reach the end of the array (index arr.length - 1) by jumping some number of times (possibly 0 or more than once). Return the number of good starting indices. ',
  },
  {
    question_title: 'Largest Perimeter Triangle',
    question_text:
      'Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0. ',
  },
  {
    question_title: 'Squares of a Sorted Array',
    question_text:
      'Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order. ',
  },
  {
    question_title: 'Longest Turbulent Subarray',
    question_text:
      'Given an integer array arr, return the length of a maximum size turbulent subarray of arr. A subarray is turbulent if the comparison sign flips between each adjacent pair of elements in the subarray. More formally, a subarray [arr[i], arr[i + 1], ..., arr[j]] of arr is said to be turbulent if and only if: ',
  },
  {
    question_title: 'Distribute Coins in Binary Tree',
    question_text:
      'You are given the root of a binary tree with n nodes where each node in the tree has node.val coins. There are n coins in total throughout the whole tree. In one move, we may choose two adjacent nodes and move one coin from one node to another. A move may be from parent to child, or from child to parent. Return the minimum number of moves required to make every node have exactly one coin. ',
  },
  {
    question_title: 'Unique Paths III',
    question_text:
      'You are given an m x n integer array grid where grid[i][j] could be: Return the number of 4-directional walks from the starting square to the ending square, that walk over every non-obstacle square exactly once. ',
  },
  {
    question_title: 'Time Based Key-Value Store',
    question_text:
      "Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp. Implement the TimeMap class: ",
  },
  {
    question_title: 'Triples with Bitwise AND Equal To Zero',
    question_text:
      'Given an integer array nums, return the number of AND triples. An AND triple is a triple of indices (i, j, k) such that: ',
  },
  {
    question_title: 'Minimum Cost For Tickets',
    question_text:
      'You have planned some train traveling one year in advance. The days of the year in which you will travel are given as an integer array days. Each day is an integer from 1 to 365. Train tickets are sold in three different ways: The passes allow that many days of consecutive travel. Return the minimum number of dollars you need to travel every day in the given list of days. ',
  },
  {
    question_title: 'String Without AAA or BBB',
    question_text: 'Given two integers a and b, return any string s such that: ',
  },
  {
    question_title: 'Sum of Even Numbers After Queries',
    question_text:
      'You are given an integer array nums and an array queries where queries[i] = [vali, indexi]. For each query i, first, apply nums[indexi] = nums[indexi] + vali, then print the sum of the even values of nums. Return an integer array answer where answer[i] is the answer to the ith query. ',
  },
  {
    question_title: 'Interval List Intersections',
    question_text:
      'You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. Each list of intervals is pairwise disjoint and in sorted order. Return the intersection of these two interval lists. A closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b. The intersection of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of [1, 3] and [2, 4] is [2, 3]. ',
  },
  {
    question_title: 'Vertical Order Traversal of a Binary Tree',
    question_text:
      'Given the root of a binary tree, calculate the vertical order traversal of the binary tree. For each node at position (row, col), its left and right children will be at positions (row + 1, col - 1) and (row + 1, col + 1) respectively. The root of the tree is at (0, 0). The vertical order traversal of a binary tree is a list of top-to-bottom orderings for each column index starting from the leftmost column and ending on the rightmost column. There may be multiple nodes in the same row and same column. In such a case, sort these nodes by their values. Return the vertical order traversal of the binary tree. ',
  },
  {
    question_title: 'Smallest String Starting From Leaf',
    question_text:
      "You are given the root of a binary tree where each node has a value in the range [0, 25] representing the letters 'a' to 'z'. Return the lexicographically smallest string that starts at a leaf of this tree and ends at the root. As a reminder, any shorter prefix of a string is lexicographically smaller. A leaf of a node is a node that has no children. ",
  },
  {
    question_title: 'Add to Array-Form of Integer',
    question_text:
      'The array-form of an integer num is an array representing its digits in left to right order. Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k. ',
  },
  {
    question_title: 'Satisfiability of Equality Equations',
    question_text:
      'You are given an array of strings equations that represent relationships between variables where each string equations[i] is of length 4 and takes one of two different forms: "xi==yi" or "xi!=yi".Here, xi and yi are lowercase letters (not necessarily different) that represent one-letter variable names. Return true if it is possible to assign integers to variable names so as to satisfy all the given equations, or false otherwise. ',
  },
  {
    question_title: 'Broken Calculator',
    question_text:
      'There is a broken calculator that has the integer startValue on its display initially. In one operation, you can: Given two integers startValue and target, return the minimum number of operations needed to display target on the calculator. ',
  },
  {
    question_title: 'Subarrays with K Different Integers',
    question_text:
      'Given an integer array nums and an integer k, return the number of good subarrays of nums. A good array is an array where the number of different integers in that array is exactly k. A subarray is a contiguous part of an array. ',
  },
  {
    question_title: 'Cousins in Binary Tree',
    question_text:
      'Given the root of a binary tree with unique values and the values of two different nodes of the tree x and y, return true if the nodes corresponding to the values x and y in the tree are cousins, or false otherwise. Two nodes of a binary tree are cousins if they have the same depth with different parents. Note that in a binary tree, the root node is at the depth 0, and children of each depth k node are at the depth k + 1. ',
  },
  {
    question_title: 'Rotting Oranges',
    question_text:
      'You are given an m x n grid where each cell can have one of three values: Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten. Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1. ',
  },
  {
    question_title: 'Minimum Number of K Consecutive Bit Flips',
    question_text:
      'You are given a binary array nums and an integer k. A k-bit flip is choosing a subarray of length k from nums and simultaneously changing every 0 in the subarray to 1, and every 1 in the subarray to 0. Return the minimum number of k-bit flips required so that there is no 0 in the array. If it is not possible, return -1. A subarray is a contiguous part of an array. ',
  },
  {
    question_title: 'Number of Squareful Arrays',
    question_text:
      'An array is squareful if the sum of every pair of adjacent elements is a perfect square. Given an integer array nums, return the number of permutations of nums that are squareful. Two permutations perm1 and perm2 are different if there is some index i such that perm1[i] != perm2[i]. ',
  },
  {
    question_title: 'Find the Town Judge',
    question_text:
      'In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge. If the town judge exists, then: You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi. Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise. ',
  },
  {
    question_title: 'Available Captures for Rook',
    question_text:
      "On an 8 x 8 chessboard, there is exactly one white rook 'R' and some number of white bishops 'B', black pawns 'p', and empty squares '.'. When the rook moves, it chooses one of four cardinal directions (north, east, south, or west), then moves in that direction until it chooses to stop, reaches the edge of the board, captures a black pawn, or is blocked by a white bishop. A rook is considered attacking a pawn if the rook can capture the pawn on the rook's turn. The number of available captures for the white rook is the number of pawns that the rook is attacking. Return the number of available captures for the white rook. ",
  },
  {
    question_title: 'Minimum Cost to Merge Stones',
    question_text:
      'There are n piles of stones arranged in a row. The ith pile has stones[i] stones. A move consists of merging exactly k consecutive piles into one pile, and the cost of this move is equal to the total number of stones in these k piles. Return the minimum cost to merge all piles of stones into one pile. If it is impossible, return -1. ',
  },
  {
    question_title: 'Grid Illumination',
    question_text:
      'There is a 2D grid of size n x n where each cell of this grid has a lamp that is initially turned off. You are given a 2D array of lamp positions lamps, where lamps[i] = [rowi, coli] indicates that the lamp at grid[rowi][coli] is turned on. Even if the same lamp is listed more than once, it is turned on. When a lamp is turned on, it illuminates its cell and all other cells in the same row, column, or diagonal. You are also given another 2D array queries, where queries[j] = [rowj, colj]. For the jth query, determine whether grid[rowj][colj] is illuminated or not. After answering the jth query, turn off the lamp at grid[rowj][colj] and its 8 adjacent lamps if they exist. A lamp is adjacent if its cell shares either a side or corner with grid[rowj][colj]. Return an array of integers ans, where ans[j] should be 1 if the cell in the jth query was illuminated, or 0 if the lamp was not. ',
  },
  {
    question_title: 'Find Common Characters',
    question_text:
      'Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order. ',
  },
  {
    question_title: 'Check If Word Is Valid After Substitutions',
    question_text:
      'Given a string s, determine if it is valid. A string s is valid if, starting with an empty string t = "", you can transform t into s after performing the following operation any number of times: Return true if s is a valid string, otherwise, return false. ',
  },
  {
    question_title: 'Max Consecutive Ones III',
    question_text:
      "Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's. ",
  },
  {
    question_title: 'Maximize Sum Of Array After K Negations',
    question_text:
      'Given an integer array nums and an integer k, modify the array in the following way: You should apply this process exactly k times. You may choose the same index i multiple times. Return the largest possible sum of the array after modifying it in this way. ',
  },
  {
    question_title: 'Clumsy Factorial',
    question_text:
      "The factorial of a positive integer n is the product of all positive integers less than or equal to n. We make a clumsy factorial using the integers in decreasing order by swapping out the multiply operations for a fixed rotation of operations with multiply '*', divide '/', add '+', and subtract '-' in this order. However, these operations are still applied using the usual order of operations of arithmetic. We do all multiplication and division steps before any addition or subtraction steps, and multiplication and division steps are processed left to right. Additionally, the division that we use is floor division such that 10 * 9 / 8 = 90 / 8 = 11. Given an integer n, return the clumsy factorial of n. ",
  },
  {
    question_title: 'Minimum Domino Rotations For Equal Row',
    question_text:
      'In a row of dominoes, tops[i] and bottoms[i] represent the top and bottom halves of the ith domino. (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.) We may rotate the ith domino, so that tops[i] and bottoms[i] swap values. Return the minimum number of rotations so that all the values in tops are the same, or all the values in bottoms are the same. If it cannot be done, return -1. ',
  },
  {
    question_title: 'Construct Binary Search Tree from Preorder Traversal',
    question_text:
      'Given an array of integers preorder, which represents the preorder traversal of a BST (i.e., binary search tree), construct the tree and return its root. It is guaranteed that there is always possible to find a binary search tree with the given requirements for the given test cases. A binary search tree is a binary tree where for every node, any descendant of Node.left has a value strictly less than Node.val, and any descendant of Node.right has a value strictly greater than Node.val. A preorder traversal of a binary tree displays the value of the node first, then traverses Node.left, then traverses Node.right. ',
  },
  {
    question_title: 'Pairs of Songs With Total Durations Divisible by 60',
    question_text:
      'You are given a list of songs where the ith song has a duration of time[i] seconds. Return the number of pairs of songs for which their total duration in seconds is divisible by 60. Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0. ',
  },
  {
    question_title: 'Capacity To Ship Packages Within D Days',
    question_text:
      'A conveyor belt has packages that must be shipped from one port to another within days days. The ith package on the conveyor belt has a weight of weights[i]. Each day, we load the ship with packages on the conveyor belt (in the order given by weights). We may not load more weight than the maximum weight capacity of the ship. Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within days days. ',
  },
  {
    question_title: 'Numbers With Repeated Digits',
    question_text:
      'Given an integer n, return the number of positive integers in the range [1, n] that have at least one repeated digit. ',
  },
  {
    question_title: 'Partition Array Into Three Parts With Equal Sum',
    question_text:
      'Given an array of integers arr, return true if we can partition the array into three non-empty parts with equal sums. Formally, we can partition the array if we can find indexes i + 1 < j with (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1]) ',
  },
  {
    question_title: 'Best Sightseeing Pair',
    question_text:
      'You are given an integer array values where values[i] represents the value of the ith sightseeing spot. Two sightseeing spots i and j have a distance j - i between them. The score of a pair (i < j) of sightseeing spots is values[i] + values[j] + i - j: the sum of the values of the sightseeing spots, minus the distance between them. Return the maximum score of a pair of sightseeing spots. ',
  },
  {
    question_title: 'Smallest Integer Divisible by K',
    question_text:
      'Given a positive integer k, you need to find the length of the smallest positive integer n such that n is divisible by k, and n only contains the digit 1. Return the length of n. If there is no such n, return -1. Note: n may not fit in a 64-bit signed integer. ',
  },
  {
    question_title: 'Binary String With Substrings Representing 1 To N',
    question_text:
      'Given a binary string s and a positive integer n, return true if the binary representation of all the integers in the range [1, n] are substrings of s, or false otherwise. A substring is a contiguous sequence of characters within a string. ',
  },
  {
    question_title: 'Convert to Base -2',
    question_text:
      'Given an integer n, return a binary string representing its representation in base -2. Note that the returned string should not have leading zeros unless the string is "0". ',
  },
  {
    question_title: 'Binary Prefix Divisible By 5',
    question_text:
      'You are given a binary array nums (0-indexed). We define xi as the number whose binary representation is the subarray nums[0..i] (from most-significant-bit to least-significant-bit). Return an array of booleans answer where answer[i] is true if xi is divisible by 5. ',
  },
  {
    question_title: 'Next Greater Node In Linked List',
    question_text:
      'You are given the head of a linked list with n nodes. For each node in the list, find the value of the next greater node. That is, for each node, find the value of the first node that is next to it and has a strictly larger value than it. Return an integer array answer where answer[i] is the value of the next greater node of the ith node (1-indexed). If the ith node does not have a next greater node, set answer[i] = 0. ',
  },
  {
    question_title: 'Number of Enclaves',
    question_text:
      'You are given an m x n binary matrix grid, where 0 represents a sea cell and 1 represents a land cell. A move consists of walking from one land cell to another adjacent (4-directionally) land cell or walking off the boundary of the grid. Return the number of land cells in grid for which we cannot walk off the boundary of the grid in any number of moves. ',
  },
  {
    question_title: 'Remove Outermost Parentheses',
    question_text:
      'A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation. A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings. Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings. Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s. ',
  },
  {
    question_title: 'Sum of Root To Leaf Binary Numbers',
    question_text:
      'You are given the root of a binary tree where each node has a value 0 or 1. Each root-to-leaf path represents a binary number starting with the most significant bit. For all leaves in the tree, consider the numbers represented by the path from the root to that leaf. Return the sum of these numbers. The test cases are generated so that the answer fits in a 32-bits integer. ',
  },
  {
    question_title: 'Camelcase Matching',
    question_text:
      'Given an array of strings queries and a string pattern, return a boolean array answer where answer[i] is true if queries[i] matches pattern, and false otherwise. A query word queries[i] matches pattern if you can insert lowercase English letters pattern so that it equals the query. You may insert each character at any position and you may not insert any characters. ',
  },
  {
    question_title: 'Video Stitching',
    question_text:
      'You are given a series of video clips from a sporting event that lasted time seconds. These video clips can be overlapping with each other and have varying lengths. Each video clip is described by an array clips where clips[i] = [starti, endi] indicates that the ith clip started at starti and ended at endi. We can cut these clips into segments freely. Return the minimum number of clips needed so that we can cut the clips into segments that cover the entire sporting event [0, time]. If the task is impossible, return -1. ',
  },
  {
    question_title: 'Divisor Game',
    question_text:
      "Alice and Bob take turns playing a game, with Alice starting first. Initially, there is a number n on the chalkboard. On each player's turn, that player makes a move consisting of: Also, if a player cannot make a move, they lose the game. Return true if and only if Alice wins the game, assuming both players play optimally. ",
  },
  {
    question_title: 'Longest Arithmetic Subsequence',
    question_text:
      'Given an array nums of integers, return the length of the longest arithmetic subsequence in nums. Recall that a subsequence of an array nums is a list nums[i1], nums[i2], ..., nums[ik] with 0 <= i1 < i2 < ... < ik <= nums.length - 1, and that a sequence seq is arithmetic if seq[i+1] - seq[i] are all the same value (for 0 <= i < seq.length - 1). ',
  },
  {
    question_title: 'Maximum Difference Between Node and Ancestor',
    question_text:
      'Given the root of a binary tree, find the maximum value v for which there exist different nodes a and b where v = |a.val - b.val| and a is an ancestor of b. A node a is an ancestor of b if either: any child of a is equal to b\xa0or any child of a is an ancestor of b. ',
  },
  {
    question_title: 'Recover a Tree From Preorder Traversal',
    question_text:
      'We run a\xa0preorder\xa0depth-first search (DFS) on the root of a binary tree. At each node in this traversal, we output D dashes (where D is the depth of this node), then we output the value of this node.\xa0 If the depth of a node is D, the depth of its immediate child is D + 1.\xa0 The depth of the root node is 0. If a node has only one child, that child is guaranteed to be the left child. Given the output traversal of this traversal, recover the tree and return its root. ',
  },
  {
    question_title: 'Matrix Cells in Distance Order',
    question_text:
      'You are given four integers row, cols, rCenter, and cCenter. There is a rows x cols matrix and you are on the cell with the coordinates (rCenter, cCenter). Return the coordinates of all cells in the matrix, sorted by their distance from (rCenter, cCenter) from the smallest distance to the largest distance. You may return the answer in any order that satisfies this condition. The distance between two cells (r1, c1) and (r2, c2) is |r1 - r2| + |c1 - c2|. ',
  },
  {
    question_title: 'Two City Scheduling',
    question_text:
      'A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti],\xa0the cost of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti. Return the minimum cost to fly every person to a city such that exactly n people arrive in each city. ',
  },
  {
    question_title: 'Maximum Sum of Two Non-Overlapping Subarrays',
    question_text:
      'Given an integer array nums and two integers firstLen and secondLen, return the maximum sum of elements in two non-overlapping subarrays with lengths firstLen and secondLen. The array with length firstLen could occur before or after the array with length secondLen, but they have to be non-overlapping. A subarray is a contiguous part of an array. ',
  },
  {
    question_title: 'Stream of Characters',
    question_text:
      'Design an algorithm that accepts a stream of characters and checks if a suffix of these characters is a string of a given array of strings words. For example, if words = ["abc", "xyz"]\xa0and the stream added the four characters (one by one) \'a\', \'x\', \'y\', and \'z\', your algorithm should detect that the suffix "xyz" of the characters "axyz" matches "xyz" from words. Implement the StreamChecker class: ',
  },
  {
    question_title: 'Moving Stones Until Consecutive',
    question_text:
      "There are three stones in different positions on the X-axis. You are given three integers a, b, and c, the positions of the stones. In one move, you pick up a stone at an endpoint (i.e., either the lowest or highest position stone), and move it to an unoccupied position between those endpoints. Formally, let's say the stones are currently at positions x, y, and z with x < y < z. You pick up the stone at either position x or position z, and move that stone to an integer position k, with x < k < z and k != y. The game ends when you cannot make any more moves (i.e., the stones are in three consecutive positions). Return an integer array answer of length 2 where: ",
  },
  {
    question_title: 'Coloring A Border',
    question_text:
      'You are given an m x n integer matrix grid, and three integers row, col, and color. Each value in the grid represents the color of the grid square at that location. Two squares belong to the same connected component if they have the same color and are next to each other in any of the 4 directions. The border of a connected component is all the squares in the connected component that are either 4-directionally adjacent to a square not in the component, or on the boundary of the grid (the first or last row or column). You should color the border of the connected component that contains the square grid[row][col] with color. Return the final grid. ',
  },
  {
    question_title: 'Uncrossed Lines',
    question_text:
      'You are given two integer arrays nums1 and nums2. We write the integers of nums1 and nums2 (in the order they are given) on two separate horizontal lines. We may draw connecting lines: a straight line connecting two numbers nums1[i] and nums2[j] such that: Note that a connecting line cannot intersect even at the endpoints (i.e., each number can only belong to one connecting line). Return the maximum number of connecting lines we can draw in this way. ',
  },
  {
    question_title: 'Escape a Large Maze',
    question_text:
      'There is a 1 million by 1 million grid on an XY-plane, and the coordinates of each grid square are (x, y). We start at the source = [sx, sy] square and want to reach the target = [tx, ty] square. There is also an array of blocked squares, where each blocked[i] = [xi, yi] represents a blocked square with coordinates (xi, yi). Each move, we can walk one square north, east, south, or west if the square is not in the array of blocked squares. We are also not allowed to walk outside of the grid. Return true if and only if it is possible to reach the target square from the source square through a sequence of valid moves. ',
  },
  {
    question_title: 'Minimum Score Triangulation of Polygon',
    question_text:
      'You have a convex n-sided polygon where each vertex has an integer value. You are given an integer array values where values[i] is the value of the ith vertex (i.e., clockwise order). You will triangulate the polygon into n - 2 triangles. For each triangle, the value of that triangle is the product of the values of its vertices, and the total score of the triangulation is the sum of these values over all n - 2 triangles in the triangulation. Return the smallest possible total score that you can achieve with some triangulation of the polygon. ',
  },
  {
    question_title: 'Find Words That Can Be Formed by Characters',
    question_text:
      'You are given an array of strings words and a string chars. A string is good if it can be formed by characters from chars (each character can only be used once). Return the sum of lengths of all good strings in words. ',
  },
  {
    question_title: 'Moving Stones Until Consecutive II',
    question_text:
      'There are some stones in different positions on the X-axis. You are given an integer array stones, the positions of the stones. Call a stone an endpoint stone if it has the smallest or largest position. In one move, you pick up an endpoint stone and move it to an unoccupied position so that it is no longer an endpoint stone. The game ends when you cannot make any more moves (i.e., the stones are in three consecutive positions). Return an integer array answer of length 2 where: ',
  },
  {
    question_title: 'Binary Search Tree to Greater Sum Tree',
    question_text:
      'Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus the sum of all keys greater than the original key in BST. As a reminder, a binary search tree is a tree that satisfies these constraints: ',
  },
  {
    question_title: 'Valid Boomerang',
    question_text:
      'Given an array points where points[i] = [xi, yi] represents a point on the X-Y plane, return true if these points are a boomerang. A boomerang is a set of three points that are all distinct and not in a straight line. ',
  },
  {
    question_title: 'Maximum Level Sum of a Binary Tree',
    question_text:
      'Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on. Return the smallest level x such that the sum of all the values of nodes at level x is maximal. ',
  },
  {
    question_title: 'As Far from Land as Possible',
    question_text:
      'Given an n x n grid\xa0containing only values 0 and 1, where\xa00 represents water\xa0and 1 represents land, find a water cell such that its distance to the nearest land cell is maximized, and return the distance.\xa0If no land or water exists in the grid, return -1. The distance used in this problem is the Manhattan distance:\xa0the distance between two cells (x0, y0) and (x1, y1) is |x0 - x1| + |y0 - y1|. ',
  },
  {
    question_title: 'Robot Bounded In Circle',
    question_text:
      'On an infinite plane, a robot initially stands at (0, 0) and faces north. Note that: The robot can receive one of three instructions: The robot performs the instructions given in order, and repeats them forever. Return true if and only if there exists a circle in the plane such that the robot never leaves the circle. ',
  },
  {
    question_title: 'Flower Planting With No Adjacent',
    question_text:
      'You have n gardens, labeled from 1 to n, and an array paths where paths[i] = [xi, yi] describes a bidirectional path between garden xi to garden yi. In each garden, you want to plant one of 4 types of flowers. All gardens have at most 3 paths coming into or leaving it. Your task is to choose a flower type for each garden such that, for any two gardens connected by a path, they have different types of flowers. Return any such a choice as an array answer, where answer[i] is the type of flower planted in the (i+1)th garden. The flower types are denoted 1, 2, 3, or 4. It is guaranteed an answer exists. ',
  },
  {
    question_title: 'Partition Array for Maximum Sum',
    question_text:
      'Given an integer array arr, partition the array into (contiguous) subarrays of length at most k. After partitioning, each subarray has their values changed to become the maximum value of that subarray. Return the largest sum of the given array after partitioning. Test cases are generated so that the answer fits in a 32-bit integer. ',
  },
  {
    question_title: 'Longest Duplicate Substring',
    question_text:
      'Given a string s, consider all duplicated substrings: (contiguous) substrings of s that occur 2 or more times.\xa0The occurrences\xa0may overlap. Return any duplicated\xa0substring that has the longest possible length.\xa0If s does not have a duplicated substring, the answer is "". ',
  },
  {
    question_title: 'Last Stone Weight',
    question_text:
      'You are given an array of integers stones where stones[i] is the weight of the ith stone. We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is: At the end of the game, there is at most one stone left. Return the smallest possible weight of the left stone. If there are no stones left, return 0. ',
  },
  {
    question_title: 'Remove All Adjacent Duplicates In String',
    question_text:
      'You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them. We repeatedly make duplicate removals on s until we no longer can. Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique. ',
  },
  {
    question_title: 'Longest String Chain',
    question_text:
      'You are given an array of words where each word consists of lowercase English letters. wordA is a predecessor of wordB if and only if we can insert exactly one letter anywhere in wordA without changing the order of the other characters to make it equal to wordB. A word chain is a sequence of words [word1, word2, ..., wordk] with k >= 1, where word1 is a predecessor of word2, word2 is a predecessor of word3, and so on. A single word is trivially a word chain with k == 1. Return the length of the longest possible word chain with words chosen from the given list of words. ',
  },
  {
    question_title: 'Last Stone Weight II',
    question_text:
      'You are given an array of integers stones where stones[i] is the weight of the ith stone. We are playing a game with the stones. On each turn, we choose any two stones and smash them together. Suppose the stones have weights x and y with x <= y. The result of this smash is: At the end of the game, there is at most one stone left. Return the smallest possible weight of the left stone. If there are no stones left, return 0. ',
  },
  {
    question_title: 'Last Substring in Lexicographical Order',
    question_text: 'Given a string s, return the last substring of s in lexicographical order. ',
  },
  {
    question_title: 'Height Checker',
    question_text:
      'A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line. You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed). Return the number of indices where heights[i] != expected[i]. ',
  },
  {
    question_title: 'Grumpy Bookstore Owner',
    question_text:
      'There is a bookstore owner that has a store open for n minutes. Every minute, some number of customers enter the store. You are given an integer array customers of length n where customers[i] is the number of the customer that enters the store at the start of the ith minute and all those customers leave after the end of that minute. On some minutes, the bookstore owner is grumpy. You are given a binary array grumpy where grumpy[i] is 1 if the bookstore owner is grumpy during the ith minute, and is 0 otherwise. When the bookstore owner is grumpy, the customers of that minute are not satisfied, otherwise, they are satisfied. The bookstore owner knows a secret technique to keep themselves not grumpy for minutes consecutive minutes, but can only use it once. Return the maximum number of customers that can be satisfied throughout the day. ',
  },
  {
    question_title: 'Previous Permutation With One Swap',
    question_text:
      'Given an array of positive integers arr (not necessarily distinct), return the lexicographically largest permutation that is smaller than arr, that can be made with exactly one swap (A swap exchanges the positions of two numbers arr[i] and arr[j]). If it cannot be done, then return the same array. ',
  },
  {
    question_title: 'Distant Barcodes',
    question_text:
      'In a warehouse, there is a row of barcodes, where the ith barcode is barcodes[i]. Rearrange the barcodes so that no two adjacent barcodes are equal. You may return any answer, and it is guaranteed an answer exists. ',
  },
  {
    question_title: 'Number of Submatrices That Sum to Target',
    question_text:
      "Given a matrix\xa0and a target, return the number of non-empty submatrices that sum to target. A submatrix x1, y1, x2, y2 is the set of all cells matrix[x][y] with x1 <= x <= x2 and y1 <= y <= y2. Two submatrices (x1, y1, x2, y2) and (x1', y1', x2', y2') are different if they have some coordinate\xa0that is different: for example, if x1 != x1'. ",
  },
  {
    question_title: 'Greatest Common Divisor of Strings',
    question_text:
      'For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times). Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2. ',
  },
  {
    question_title: 'Flip Columns For Maximum Number of Equal Rows',
    question_text:
      'You are given an m x n binary matrix matrix. You can choose any number of columns in the matrix and flip every cell in that column (i.e., Change the value of the cell from 0 to 1 or vice versa). Return the maximum number of rows that have all values equal after some number of flips. ',
  },
  {
    question_title: 'Adding Two Negabinary Numbers',
    question_text:
      'Given two numbers arr1 and arr2 in base -2, return the result of adding them together. Each number is given in array format:\xa0 as an array of 0s and 1s, from most significant bit to least significant bit.\xa0 For example, arr = [1,1,0,1] represents the number (-2)^3\xa0+ (-2)^2 + (-2)^0 = -3.\xa0 A number arr in array, format is also guaranteed to have no leading zeros: either\xa0arr == [0] or arr[0] == 1. Return the result of adding arr1 and arr2 in the same format: as an array of 0s and 1s with no leading zeros. ',
  },
  {
    question_title: 'Occurrences After Bigram',
    question_text:
      'Given two strings first and second, consider occurrences in some text of the form "first second third", where second comes immediately after first, and third comes immediately after second. Return an array of all the words third for each occurrence of "first second third". ',
  },
  {
    question_title: 'Insufficient Nodes in Root to Leaf Paths',
    question_text:
      'Given the root of a binary tree and an integer limit, delete all insufficient nodes in the tree simultaneously, and return the root of the resulting binary tree. A node is insufficient if every root to leaf path intersecting this node has a sum strictly less than limit. A leaf is a node with no children. ',
  },
  {
    question_title: 'Smallest Subsequence of Distinct Characters',
    question_text:
      'Given a string s, return the lexicographically smallest subsequence of s that contains all the distinct characters of s exactly once. ',
  },
  {
    question_title: 'Letter Tile Possibilities',
    question_text:
      'You have n\xa0\xa0tiles, where each tile has one letter tiles[i] printed on it. Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles. ',
  },
  {
    question_title: 'Duplicate Zeros',
    question_text:
      'Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right. Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything. ',
  },
  {
    question_title: 'Largest Values From Labels',
    question_text:
      'There is a set of n items. You are given two integer arrays values and labels where the value and the label of the ith element are values[i] and labels[i] respectively. You are also given two integers numWanted and useLimit. Choose a subset s of the n elements such that: The score of a subset is the sum of the values in the subset. Return the maximum score of a subset s. ',
  },
  {
    question_title: 'Shortest Common Supersequence ',
    question_text:
      'Given two strings str1 and str2, return the shortest string that has both str1 and str2 as subsequences. If there are multiple valid strings, return any of them. A string s is a subsequence of string t if deleting some number of characters from t (possibly 0) results in the string s. ',
  },
  {
    question_title: 'Shortest Path in Binary Matrix',
    question_text:
      'Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1. A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that: The length of a clear path is the number of visited cells of this path. ',
  },
  {
    question_title: 'Statistics from a Large Sample',
    question_text:
      'You are given a large sample of integers in the range [0, 255]. Since the sample is so large, it is represented by an array count\xa0where count[k] is the number of times that k appears in the sample. Calculate the following statistics: Return the statistics of the sample as an array of floating-point numbers [minimum, maximum, mean, median, mode]. Answers within 10-5 of the actual answer will be accepted. ',
  },
  {
    question_title: 'Car Pooling',
    question_text:
      "There is a car with capacity empty seats. The vehicle only drives east (i.e., it cannot turn around and drive west). You are given the integer capacity and an array trips where trips[i] = [numPassengersi, fromi, toi] indicates that the ith trip has numPassengersi passengers and the locations to pick them up and drop them off are fromi and toi respectively. The locations are given as the number of kilometers due east from the car's initial location. Return true if it is possible to pick up and drop off all passengers for all the given trips, or false otherwise. ",
  },
  {
    question_title: 'Find in Mountain Array',
    question_text:
      '(This problem is an interactive problem.) You may recall that an array arr is a mountain array if and only if: Given a mountain array mountainArr, return the minimum index such that mountainArr.get(index) == target. If such an index does not exist, return -1. You cannot access the mountain array directly. You may only access the array using a MountainArray interface: Submissions making more than 100 calls to MountainArray.get will be judged Wrong Answer. Also, any solutions that attempt to circumvent the judge will result in disqualification. ',
  },
  {
    question_title: 'Brace Expansion II',
    question_text:
      'Under the grammar given below, strings can represent a set of lowercase words. Let\xa0R(expr)\xa0denote the set of words the expression represents. The grammar can best be understood through simple examples: Formally, the three rules for our grammar: Given an expression representing a set of words under the given grammar, return the sorted list of words that the expression represents. ',
  },
  {
    question_title: 'Path In Zigzag Labelled Binary Tree',
    question_text:
      'In an infinite binary tree where every node has two children, the nodes are labelled in row order. In the odd numbered rows (ie., the first, third, fifth,...), the labelling is left to right, while in the even numbered rows (second, fourth, sixth,...), the labelling is right to left.  Given the label of a node in this tree, return the labels in the path from the root of the tree to the\xa0node with that label. ',
  },
  {
    question_title: 'Distribute Candies to People',
    question_text:
      'We distribute some\xa0number of candies, to a row of n =\xa0num_people\xa0people in the following way: We then give 1 candy to the first person, 2 candies to the second person, and so on until we give n\xa0candies to the last person. Then, we go back to the start of the row, giving n\xa0+ 1 candies to the first person, n\xa0+ 2 candies to the second person, and so on until we give 2 * n\xa0candies to the last person. This process repeats (with us giving one more candy each time, and moving to the start of the row after we reach the end) until we run out of candies.\xa0 The last person will receive all of our remaining candies (not necessarily one more than the previous gift). Return an array (of length num_people\xa0and sum candies) that represents the final distribution of candies. ',
  },
  {
    question_title: 'Filling Bookcase Shelves',
    question_text:
      'You are given an array books where books[i] = [thicknessi, heighti] indicates the thickness and height of the ith book. You are also given an integer shelfWidth. We want to place these books in order onto bookcase shelves that have a total width shelfWidth. We choose some of the books to place on this shelf such that the sum of their thickness is less than or equal to shelfWidth, then build another level of the shelf of the bookcase so that the total height of the bookcase has increased by the maximum height of the books we just put down. We repeat this process until there are no more books to place. Note that at each step of the above process, the order of the books we place is the same order as the given sequence of books. Return the minimum possible height that the total bookshelf can be after placing shelves in this manner. ',
  },
  {
    question_title: 'Parsing A Boolean Expression',
    question_text:
      'Return the result of evaluating a given boolean expression, represented as a string. An expression can either be: ',
  },
  {
    question_title: 'Defanging an IP Address',
    question_text:
      'Given a valid (IPv4) IP address, return a defanged version of that IP address. A defanged\xa0IP address\xa0replaces every period "." with "[.]". ',
  },
  {
    question_title: 'Corporate Flight Bookings',
    question_text:
      'There are n flights that are labeled from 1 to n. You are given an array of flight bookings bookings, where bookings[i] = [firsti, lasti, seatsi] represents a booking for flights firsti through lasti (inclusive) with seatsi seats reserved for each flight in the range. Return an array answer of length n, where answer[i] is the total number of seats reserved for flight i. ',
  },
  {
    question_title: 'Delete Nodes And Return Forest',
    question_text:
      'Given the root of a binary tree, each node in the tree has a distinct value. After deleting all nodes with a value in to_delete, we are left with a forest (a disjoint union of trees). Return the roots of the trees in the remaining forest. You may return the result in any order. ',
  },
  {
    question_title: 'Maximum Nesting Depth of Two Valid Parentheses Strings',
    question_text:
      'A string is a valid parentheses string\xa0(denoted VPS) if and only if it consists of "(" and ")" characters only, and: We can\xa0similarly define the nesting depth depth(S) of any VPS S as follows: For example,\xa0 "",\xa0"()()", and\xa0"()(()())"\xa0are VPS\'s (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS\'s.  Given a VPS seq, split it into two disjoint subsequences A and B, such that\xa0A and B are VPS\'s (and\xa0A.length + B.length = seq.length). Now choose any such A and B such that\xa0max(depth(A), depth(B)) is the minimum possible value. Return an answer array (of length seq.length) that encodes such a\xa0choice of A and B:\xa0 answer[i] = 0 if seq[i] is part of A, else answer[i] = 1.\xa0 Note that even though multiple answers may exist, you may return any of them. ',
  },
  {
    question_title: 'Mean of Array After Removing Some Elements',
    question_text:
      'Given an integer array arr, return the mean of the remaining integers after removing the smallest 5% and the largest 5% of the elements. Answers within 10-5 of the actual answer will be considered accepted. ',
  },
  {
    question_title: 'Iterator for Combination',
    question_text: 'Design the CombinationIterator class: ',
  },
  {
    question_title: 'Relative Sort Array',
    question_text:
      'Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1. Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order. ',
  },
  {
    question_title: 'Lowest Common Ancestor of Deepest Leaves',
    question_text:
      'Given the root of a binary tree, return the lowest common ancestor of its deepest leaves. Recall that: ',
  },
  {
    question_title: 'Longest Well-Performing Interval',
    question_text:
      'We are given hours, a list of the number of hours worked per day for a given employee. A day is considered to be a tiring day if and only if the number of hours worked is (strictly) greater than 8. A well-performing interval is an interval of days for which the number of tiring days is strictly larger than the number of non-tiring days. Return the length of the longest well-performing interval. ',
  },
  {
    question_title: 'Smallest Sufficient Team',
    question_text:
      'In a project, you have a list of required skills req_skills, and a list of people. The ith person people[i] contains a list of skills that the person has. Consider a sufficient team: a set of people such that for every required skill in req_skills, there is at least one person in the team who has that skill. We can represent these teams by the index of each person. Return any sufficient team of the smallest possible size, represented by the index of each person. You may return the answer in any order. It is guaranteed an answer exists. ',
  },
  {
    question_title: 'Element Appearing More Than 25% In Sorted Array',
    question_text:
      'Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer. ',
  },
  {
    question_title: 'Remove Covered Intervals',
    question_text:
      'Given an array intervals where intervals[i] = [li, ri] represent the interval [li, ri), remove all intervals that are covered by another interval in the list. The interval [a, b) is covered by the interval [c, d) if and only if c <= a and b <= d. Return the number of remaining intervals. ',
  },
  {
    question_title: 'Graph Connectivity With Threshold',
    question_text:
      'We have n cities labeled from 1 to n. Two different cities with labels x and y are directly connected by a bidirectional road if and only if x and y share a common divisor strictly greater than some threshold. More formally, cities with labels x and y have a road between them if there exists an integer z such that all of the following are true: Given the two integers, n and threshold, and an array of queries, you must determine for each queries[i] = [ai, bi] if cities ai and bi are connected directly or indirectly.\xa0(i.e. there is some path between them). Return an array answer, where answer.length == queries.length and answer[i] is true if for the ith query, there is a path between ai and bi, or answer[i] is false if there is no path. ',
  },
  {
    question_title: 'Minimum Falling Path Sum II',
    question_text:
      'Given an n x n integer matrix grid, return the minimum sum of a falling path with non-zero shifts. A falling path with non-zero shifts is a choice of exactly one element from each row of grid such that no two elements chosen in adjacent rows are in the same column. ',
  },
  {
    question_title: 'Number of Equivalent Domino Pairs',
    question_text:
      'Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a == c and b == d), or (a == d and b == c) - that is, one domino can be rotated to be equal to another domino. Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j]. ',
  },
  {
    question_title: 'Minimum Cost Tree From Leaf Values',
    question_text:
      'Given an array arr of positive integers, consider all binary trees such that: Among all possible binary trees considered, return the smallest possible sum of the values of each non-leaf node. It is guaranteed this sum fits into a 32-bit integer. A node is a leaf if and only if it has zero children. ',
  },
  {
    question_title: 'Shortest Path with Alternating Colors',
    question_text:
      'You are given an integer n, the number of nodes in a directed graph where the nodes are labeled from 0 to n - 1. Each edge is red or blue in this graph, and there could be self-edges and parallel edges. You are given two arrays redEdges and blueEdges where: Return an array answer of length n, where each answer[x] is the length of the shortest path from node 0 to node x such that the edge colors alternate along the path, or -1 if such a path does not exist. ',
  },
  {
    question_title: 'Maximum of Absolute Value Expression',
    question_text:
      'Given two arrays of integers with equal lengths, return the maximum value of: |arr1[i] - arr1[j]| + |arr2[i] - arr2[j]| + |i - j| where the maximum is taken over all 0 <= i, j < arr1.length. ',
  },
  {
    question_title: 'Replace Elements with Greatest Element on Right Side',
    question_text:
      'Given an array arr,\xa0replace every element in that array with the greatest element among the elements to its\xa0right, and replace the last element with -1. After doing so, return the array. ',
  },
  {
    question_title: 'Sum of Mutated Array Closest to Target',
    question_text:
      'Given an integer array arr and a target value target, return the integer value such that when we change all the integers larger than value in the given array to be equal to value, the sum of the array gets as close as possible (in absolute difference) to target. In case of a tie, return the minimum such integer. Notice that the answer is not neccesarilly a number from arr. ',
  },
  {
    question_title: 'Number of Paths with Max Score',
    question_text:
      "You are given a square board\xa0of characters. You can move on the board starting at the bottom right square marked with the character\xa0'S'. You need\xa0to reach the top left square marked with the character 'E'. The rest of the squares are labeled either with a numeric character\xa01, 2, ..., 9 or with an obstacle 'X'. In one move you can go up, left or up-left (diagonally) only if there is no obstacle there. Return a list of two integers: the first integer is the maximum sum of numeric characters you can collect, and the second is the number of such paths that you can take to get that maximum sum, taken modulo 10^9 + 7. In case there is no path, return\xa0[0, 0]. ",
  },
  {
    question_title: 'N-th Tribonacci Number',
    question_text:
      'The Tribonacci sequence Tn is defined as follows: T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0. Given n, return the value of Tn. ',
  },
  {
    question_title: 'Alphabet Board Path',
    question_text:
      'On an alphabet board, we start at position (0, 0), corresponding to character\xa0board[0][0]. Here, board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"], as shown in the diagram below.  We may make the following moves: (Here, the only positions that exist on the board are positions with letters on them.) Return a sequence of moves that makes our answer equal to target\xa0in the minimum number of moves.\xa0 You may return any path that does so. ',
  },
  {
    question_title: 'Largest 1-Bordered Square',
    question_text:
      "Given a 2D grid of 0s and 1s, return the number of elements in\xa0the largest square\xa0subgrid that has all 1s on its border, or 0 if such a subgrid\xa0doesn't exist in the grid. ",
  },
  {
    question_title: 'Stone Game II',
    question_text:
      "Alice and Bob continue their\xa0games with piles of stones.\xa0 There are a number of\xa0piles\xa0arranged in a row, and each pile has a positive integer number of stones\xa0piles[i].\xa0 The objective of the game is to end with the most\xa0stones. Alice\xa0and Bob take turns, with Alice starting first.\xa0 Initially, M = 1. On each player's turn, that player\xa0can take all the stones in the first X remaining piles, where 1 <= X <= 2M.\xa0 Then, we set\xa0M = max(M, X). The game continues until all the stones have been taken. Assuming Alice and Bob play optimally, return the maximum number of stones Alice\xa0can get. ",
  },
  {
    question_title: 'Decompress Run-Length Encoded List',
    question_text:
      'We are given a list nums of integers representing a list compressed with run-length encoding. Consider each adjacent pair\xa0of elements [freq, val] = [nums[2*i], nums[2*i+1]]\xa0(with i >= 0).\xa0 For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list. Return the decompressed list. ',
  },
  {
    question_title: 'Matrix Block Sum',
    question_text:
      'Given a m x n matrix mat and an integer k, return a matrix answer where each answer[i][j] is the sum of all elements mat[r][c] for: ',
  },
  {
    question_title: 'Sum of Nodes with Even-Valued Grandparent',
    question_text:
      'Given the root of a binary tree, return the sum of values of nodes with an even-valued grandparent. If there are no nodes with an even-valued grandparent, return 0. A grandparent of a node is the parent of its parent if it exists. ',
  },
  {
    question_title: 'Distinct Echo Substrings',
    question_text:
      'Return the number of distinct non-empty substrings of text\xa0that can be written as the concatenation of some string with itself (i.e. it can be written as a + a\xa0where a is some string). ',
  },
  {
    question_title: 'Decrease Elements To Make Array Zigzag',
    question_text:
      'Given an array nums of integers, a move\xa0consists of choosing any element and decreasing it by 1. An array A is a\xa0zigzag array\xa0if either: Return the minimum number of moves to transform the given array nums into a zigzag array. ',
  },
  {
    question_title: 'Binary Tree Coloring Game',
    question_text:
      'Two players play a turn based game on a binary tree. We are given the root of this binary tree, and the number of nodes n in the tree. n is odd, and each node has a distinct value from 1 to n. Initially, the first player names a value x with 1 <= x <= n, and the second player names a value y with 1 <= y <= n and y != x. The first player colors the node with value x red, and the second player colors the node with value y blue. Then, the players take turns starting with the first player. In each turn, that player chooses a node of their color (red if player 1, blue if player 2) and colors an uncolored neighbor of the chosen node (either the left child, right child, or parent of the chosen node.) If (and only if) a player cannot choose such a node in this way, they must pass their turn. If both players pass their turn, the game ends, and the winner is the player that colored more nodes. You are the second player. If it is possible to choose such a y to ensure you win the game, return true. If it is not possible, return false. ',
  },
  {
    question_title: 'Snapshot Array',
    question_text: 'Implement a SnapshotArray that supports the following interface: ',
  },
  {
    question_title: 'Longest Common Subsequence',
    question_text:
      'Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0. A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters. A common subsequence of two strings is a subsequence that is common to both strings. ',
  },
  {
    question_title: 'Longest Chunked Palindrome Decomposition',
    question_text:
      'You are given a string text. You should split it to k substrings (subtext1, subtext2, ..., subtextk) such that: Return the largest possible value of k. ',
  },
  {
    question_title: 'Break a Palindrome',
    question_text:
      'Given a palindromic string of lowercase English letters palindrome, replace exactly one character with any lowercase English letter so that the resulting string is not a palindrome and that it is the lexicographically smallest one possible. Return the resulting string. If there is no way to replace a character to make it not a palindrome, return an empty string. A string a is lexicographically smaller than a string b (of the same length) if in the first position where a and b differ, a has a character strictly smaller than the corresponding character in b. For example, "abcc" is lexicographically smaller than "abcd" because the first position they differ is at the fourth character, and \'c\' is smaller than \'d\'. ',
  },
  {
    question_title: 'Sort the Matrix Diagonally',
    question_text:
      "A matrix diagonal is a diagonal line of cells starting from some cell in either the topmost row or leftmost column and going in the bottom-right direction until reaching the matrix's end. For example, the matrix diagonal starting from mat[2][0], where mat is a 6 x 3 matrix, includes cells mat[2][0], mat[3][1], and mat[4][2]. Given an m x n matrix mat of integers, sort each matrix diagonal in ascending order and return the resulting matrix. ",
  },
  {
    question_title: 'Reverse Subarray To Maximize Array Value',
    question_text:
      'You are given an integer array nums. The value of this array is defined as the sum of |nums[i] - nums[i + 1]| for all 0 <= i < nums.length - 1. You are allowed to select any subarray of the given array and reverse it. You can perform this operation only once. Find maximum possible value of the final array. ',
  },
  {
    question_title: 'Rank Transform of an Array',
    question_text:
      'Given an array of integers\xa0arr, replace each element with its rank. The rank represents how large the element is. The rank has the following rules: ',
  },
  {
    question_title: 'Rank Transform of a Matrix',
    question_text:
      'Given an m x n matrix, return a new matrix answer where answer[row][col] is the rank of matrix[row][col]. The rank is an integer that represents how large an element is compared to other elements. It is calculated using the following rules: The test cases are generated so that answer is unique under the given rules. ',
  },
  {
    question_title: 'Day of the Year',
    question_text:
      'Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year. ',
  },
  {
    question_title: 'Swap For Longest Repeated Character Substring',
    question_text:
      'You are given a string text. You can swap two of the characters in the text. Return the length of the longest substring with repeated characters. ',
  },
  {
    question_title: 'Online Majority Element In Subarray',
    question_text:
      'Design a data structure that efficiently finds the majority element of a given subarray. The majority element of a subarray is an element that occurs threshold times or more in the subarray. Implementing the MajorityChecker class: ',
  },
  {
    question_title: 'Number of Dice Rolls With Target Sum',
    question_text:
      'You have n dice and each die has k faces numbered from 1 to k. Given three integers n, k, and target, return the number of possible ways (out of the kn total ways) to roll the dice so the sum of the face-up numbers equals target. Since the answer may be too large, return it modulo 109 + 7. ',
  },
  {
    question_title: 'Maximum Number of Words You Can Type',
    question_text:
      'There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly. Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard. ',
  },
  {
    question_title: 'Remove Zero Sum Consecutive Nodes from Linked List',
    question_text:
      'Given the head of a linked list, we repeatedly delete consecutive sequences of nodes that sum to 0 until there are no such sequences. After doing so, return the head of the final linked list.\xa0 You may return any such answer.  (Note that in the examples below, all sequences are serializations of ListNode objects.)',
  },
  {
    question_title: 'Dinner Plate Stacks',
    question_text:
      'You have an infinite number of stacks arranged in a row and numbered (left to right) from 0, each of the stacks has the same maximum capacity. Implement the DinnerPlates class: ',
  },
  {
    question_title: 'Invalid Transactions',
    question_text:
      'A transaction is possibly invalid if: You are given an array of strings transaction where transactions[i] consists of comma-separated values representing the name, time (in minutes), amount, and city of the transaction. Return a list of transactions that are possibly invalid. You may return the answer in any order. ',
  },
  {
    question_title: 'Compare Strings by Frequency of the Smallest Character',
    question_text:
      'Let the function f(s) be the frequency of the lexicographically smallest character in a non-empty string s. For example, if s = "dcce" then f(s) = 2 because the lexicographically smallest character is \'c\', which has a frequency of 2. You are given an array of strings words and another array of query strings queries. For each query queries[i], count the number of words in words such that f(queries[i]) < f(W) for each W in words. Return an integer array answer, where each answer[i] is the answer to the ith query. ',
  },
  {
    question_title: 'Number of Days Between Two Dates',
    question_text:
      'Write a program to count the number of days between two dates. The two dates are given as strings, their format is YYYY-MM-DD\xa0as shown in the examples. ',
  },
  {
    question_title: 'Validate Binary Tree Nodes',
    question_text:
      'You have n binary tree nodes numbered from 0 to n - 1 where node i has two children leftChild[i] and rightChild[i], return true if and only if all the given nodes form exactly one valid binary tree. If node i has no left child then leftChild[i] will equal -1, similarly for the right child. Note that the nodes have no values and that we only use the node numbers in this problem. ',
  },
  {
    question_title: 'Closest Divisors',
    question_text:
      'Given an integer num, find the closest two integers in absolute difference whose product equals\xa0num + 1\xa0or num + 2. Return the two integers in any order. ',
  },
  {
    question_title: 'Largest Multiple of Three',
    question_text:
      'Given an array of digits digits, return the largest multiple of three that can be formed by concatenating some of the given digits in any order. If there is no answer return an empty string. Since the answer may not fit in an integer data type, return the answer as a string. Note that the returning answer must not contain unnecessary leading zeros. ',
  },
  {
    question_title: 'Prime Arrangements',
    question_text:
      'Return the number of permutations of 1 to n so that prime numbers are at prime indices (1-indexed.) (Recall that an integer\xa0is prime if and only if it is greater than 1, and cannot be written as a product of two positive integers\xa0both smaller than it.) Since the answer may be large, return the answer modulo 10^9 + 7. ',
  },
  {
    question_title: 'Can Make Palindrome from Substring',
    question_text:
      'You are given a string s and array queries where queries[i] = [lefti, righti, ki]. We may rearrange the substring s[lefti...righti] for each query and then choose up to ki of them to replace with any lowercase English letter. If the substring is possible to be a palindrome string after the operations above, the result of the query is true. Otherwise, the result is false. Return a boolean array answer where answer[i] is the result of the ith query queries[i]. Note that each letter is counted individually for replacement, so if, for example s[lefti...righti] = "aaa", and ki = 2, we can only replace two of the letters. Also, note that no query modifies the initial string s.  Example : Example 2:  Constraints:',
  },
  {
    question_title: 'Reformat Date',
    question_text:
      'Given a date string in the form\xa0Day Month Year, where: Convert the date string to the format YYYY-MM-DD, where: ',
  },
  {
    question_title: 'Four Divisors',
    question_text:
      'Given an integer array nums, return the sum of divisors of the integers in that array that have exactly four divisors. If there is no such integer in the array, return 0. ',
  },
  {
    question_title: 'Balance a Binary Search Tree',
    question_text:
      'Given the root of a binary search tree, return a balanced binary search tree with the same node values. If there is more than one answer, return any of them. A binary search tree is balanced if the depth of the two subtrees of every node never differs by more than 1. ',
  },
  {
    question_title: 'Constrained Subsequence Sum',
    question_text:
      'Given an integer array nums and an integer k, return the maximum sum of a non-empty subsequence of that array such that for every two consecutive integers in the subsequence, nums[i] and nums[j], where i < j, the condition j - i <= k is satisfied. A subsequence of an array is obtained by deleting some number of elements (can be zero) from the array, leaving the remaining elements in their original order. ',
  },
  {
    question_title: 'Distance Between Bus Stops',
    question_text:
      'A bus\xa0has n stops numbered from 0 to n - 1 that form\xa0a circle. We know the distance between all pairs of neighboring stops where distance[i] is the distance between the stops number\xa0i and (i + 1) % n. The bus goes along both directions\xa0i.e. clockwise and counterclockwise. Return the shortest distance between the given\xa0start\xa0and destination\xa0stops. ',
  },
  {
    question_title: 'Maximum Subarray Sum with One Deletion',
    question_text:
      'Given an array of integers, return the maximum sum for a non-empty\xa0subarray (contiguous elements) with at most one element deletion.\xa0In other words, you want to choose a subarray and optionally delete one element from it so that there is still at least one element left and the\xa0sum of the remaining elements is maximum possible. Note that the subarray needs to be non-empty after deleting one element. ',
  },
  {
    question_title: 'Day of the Week',
    question_text:
      'Given a date, return the corresponding day of the week for that date. The input is given as three integers representing the day, month and year respectively. Return the answer as one of the following values\xa0{"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}. ',
  },
  {
    question_title: 'Make Array Strictly Increasing',
    question_text:
      'Given two integer arrays\xa0arr1 and arr2, return the minimum number of operations (possibly zero) needed\xa0to make arr1 strictly increasing. In one operation, you can choose two indices\xa00 <=\xa0i < arr1.length\xa0and\xa00 <= j < arr2.length\xa0and do the assignment\xa0arr1[i] = arr2[j]. If there is no way to make\xa0arr1\xa0strictly increasing,\xa0return\xa0-1. ',
  },
  {
    question_title: 'Range Frequency Queries',
    question_text:
      'Design a data structure to find the frequency of a given value in a given subarray. The frequency of a value in a subarray is the number of occurrences of that value in the subarray. Implement the RangeFreqQuery class: A subarray is a contiguous sequence of elements within an array. arr[left...right] denotes the subarray that contains the elements of nums between indices left and right (inclusive). ',
  },
  {
    question_title: 'Minimum Garden Perimeter to Collect Enough Apples',
    question_text:
      'In a garden represented as an infinite 2D grid, there is an apple tree planted at every integer coordinate. The apple tree planted at an integer coordinate (i, j) has |i| + |j| apples growing on it. You will buy an axis-aligned square plot of land that is centered at (0, 0). Given an integer neededApples, return the minimum perimeter of a plot such that at least neededApples apples are inside or on the perimeter of that plot. The value of |x| is defined as: ',
  },
  {
    question_title: 'Kth Ancestor of a Tree Node',
    question_text:
      'You are given a tree with n nodes numbered from 0 to n - 1 in the form of a parent array parent where parent[i] is the parent of ith node. The root of the tree is node 0. Find the kth ancestor of a given node. The kth ancestor of a tree node is the kth node in the path from that node to the root node. Implement the TreeAncestor class: ',
  },
  {
    question_title: 'Maximum Number of Balloons',
    question_text:
      'Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible. You can use each character in text at most once. Return the maximum number of instances that can be formed. ',
  },
  {
    question_title: 'Reverse Substrings Between Each Pair of Parentheses',
    question_text:
      'You are given a string s that consists of lower case English letters and brackets. Reverse the strings in each pair of matching parentheses, starting from the innermost one. Your result should not contain any brackets. ',
  },
  {
    question_title: 'K-Concatenation Maximum Sum',
    question_text:
      'Given an integer array arr and an integer k, modify the array by repeating it k times. For example, if arr = [1, 2] and k = 3 then the modified array will be [1, 2, 1, 2, 1, 2]. Return the maximum sub-array sum in the modified array. Note that the length of the sub-array can be 0 and its sum in that case is 0. As the answer can be very large, return the answer modulo 109 + 7. ',
  },
  {
    question_title: 'Critical Connections in a Network',
    question_text:
      'There are n servers numbered from 0 to n - 1 connected by undirected server-to-server connections forming a network where connections[i] = [ai, bi] represents a connection between servers ai and bi. Any server can reach other servers directly or indirectly through the network. A critical connection is a connection that, if removed, will make some servers unable to reach some other server. Return all critical connections in the network in any order. ',
  },
  {
    question_title: 'Delete Characters to Make Fancy String',
    question_text:
      'A fancy string is a string where no three consecutive characters are equal. Given a string s, delete the minimum possible number of characters from s to make it fancy. Return the final string after the deletion. It can be shown that the answer will always be unique. ',
  },
  {
    question_title: 'Minimum Moves to Reach Target Score',
    question_text:
      'You are playing a game with integers. You start with the integer 1 and you want to reach the integer target. In one move, you can either: You can use the increment operation any number of times, however, you can only use the double operation at most maxDoubles times. Given the two integers target and maxDoubles, return the minimum number of moves needed to reach target starting with 1. ',
  },
  {
    question_title: 'Longest Happy String',
    question_text:
      'A string s is called happy if it satisfies the following conditions: Given three integers a, b, and c, return the longest possible happy string. If there are multiple longest happy strings, return any of them. If there is no such string, return the empty string "". A substring is a contiguous sequence of characters within a string. ',
  },
  {
    question_title: 'Number of Visible People in a Queue',
    question_text:
      'There are n people standing in a queue, and they numbered from 0 to n - 1 in left to right order. You are given an array heights of distinct integers where heights[i] represents the height of the ith person. A person can see another person to their right in the queue if everybody in between is shorter than both of them. More formally, the ith person can see the jth person if i < j and min(heights[i], heights[j]) > max(heights[i+1], heights[i+2], ..., heights[j-1]). Return an array answer of length n where answer[i] is the number of people the ith person can see to their right in the queue. ',
  },
  {
    question_title: 'Minimum Absolute Difference',
    question_text:
      'Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements. Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows ',
  },
  {
    question_title: 'Ugly Number III',
    question_text:
      'An ugly number is a positive integer that is divisible by a, b, or c. Given four integers n, a, b, and c, return the nth ugly number. ',
  },
  {
    question_title: 'Smallest String With Swaps',
    question_text:
      'You are given a string s, and an array of pairs of indices in the string\xa0pairs\xa0where\xa0pairs[i] =\xa0[a, b]\xa0indicates 2 indices(0-indexed) of the string. You can\xa0swap the characters at any pair of indices in the given\xa0pairs\xa0any number of times. Return the\xa0lexicographically smallest string that s\xa0can be changed to after using the swaps. ',
  },
  {
    question_title: 'Sort Items by Groups Respecting Dependencies',
    question_text:
      "There are\xa0n\xa0items each\xa0belonging to zero or one of\xa0m\xa0groups where group[i]\xa0is the group that the i-th item belongs to and it's equal to -1\xa0if the i-th item belongs to no group. The items and the groups are zero indexed. A group can have no item belonging to it. Return a sorted list of the items such that: Return any solution if there is more than one solution and return an empty list\xa0if there is no solution. ",
  },
  {
    question_title: 'Watering Plants',
    question_text:
      'You want to water n plants in your garden with a watering can. The plants are arranged in a row and are labeled from 0 to n - 1 from left to right where the ith plant is located at x = i. There is a river at x = -1 that you can refill your watering can at. Each plant needs a specific amount of water. You will water the plants in the following way: You are initially at the river (i.e., x = -1). It takes one step to move one unit on the x-axis. Given a 0-indexed integer array plants of n integers, where plants[i] is the amount of water the ith plant needs, and an integer capacity representing the watering can capacity, return the number of steps needed to water all the plants. ',
  },
  {
    question_title: 'Largest Magic Square',
    question_text:
      'A k x k magic square is a k x k grid filled with integers such that every row sum, every column sum, and both diagonal sums are all equal. The integers in the magic square do not have to be distinct. Every 1 x 1 grid is trivially a magic square. Given an m x n integer grid, return the size (i.e., the side length k) of the largest magic square that can be found within this grid. ',
  },
  {
    question_title: 'Count Artifacts That Can Be Extracted',
    question_text:
      'There is an n x n 0-indexed grid with some artifacts buried in it. You are given the integer n and a 0-indexed 2D integer array artifacts describing the positions of the rectangular artifacts where artifacts[i] = [r1i, c1i, r2i, c2i] denotes that the ith artifact is buried in the subgrid where: You will excavate some cells of the grid and remove all the mud from them. If the cell has a part of an artifact buried underneath, it will be uncovered. If all the parts of an artifact are uncovered, you can extract it. Given a 0-indexed 2D integer array dig where dig[i] = [ri, ci] indicates that you will excavate the cell (ri, ci), return the number of artifacts that you can extract. The test cases are generated such that: ',
  },
  {
    question_title: 'Count Ways to Build Rooms in an Ant Colony',
    question_text:
      'You are an ant tasked with adding n new rooms numbered 0 to n-1 to your colony. You are given the expansion plan as a 0-indexed integer array of length n, prevRoom, where prevRoom[i] indicates that you must build room prevRoom[i] before building room i, and these two rooms must be connected directly. Room 0 is already built, so prevRoom[0] = -1. The expansion\xa0plan is given such that once all the rooms are built, every room will be reachable from room 0. You can only build one room at a time, and you can travel freely between rooms you have already built only if they are connected.\xa0You can choose to build any room as long as its previous room\xa0is already built. Return the number of different orders you can build all the rooms in. Since the answer may be large, return it modulo 109 + 7. ',
  },
  {
    question_title: 'Unique Number of Occurrences',
    question_text:
      'Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise. ',
  },
  {
    question_title: 'Remove All Adjacent Duplicates in String II',
    question_text:
      'You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them, causing the left and the right side of the deleted substring to concatenate together. We repeatedly make k duplicate removals on s until we no longer can. Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique. ',
  },
  {
    question_title: 'Get Equal Substrings Within Budget',
    question_text:
      'You are given two strings s and t of the same length and an integer maxCost. You want to change s to t. Changing the ith character of s to ith character of t costs |s[i] - t[i]| (i.e., the absolute difference between the ASCII values of the characters). Return the maximum length of a substring of s that can be changed to be the same as the corresponding substring of t with a cost less than or equal to maxCost. If there is no substring from s that can be changed to its corresponding substring from t, return 0. ',
  },
  {
    question_title: 'Minimum Moves to Reach Target with Rotations',
    question_text:
      'In an\xa0n*n\xa0grid, there is a snake that spans 2 cells and starts moving from the top left corner at (0, 0) and (0, 1). The grid has empty cells represented by zeros and blocked cells represented by ones. The snake wants to reach the lower right corner at\xa0(n-1, n-2)\xa0and\xa0(n-1, n-1). In one move the snake can: Return the minimum number of moves to reach the target. If there is no way to reach the target, return\xa0-1. ',
  },
  {
    question_title: 'Where Will the Ball Fall',
    question_text:
      'You have a 2-D grid of size m x n representing a box, and you have n balls. The box is open on the top and bottom sides. Each cell in the box has a diagonal board spanning two corners of the cell that can redirect a ball to the right or to the left. We drop one ball at the top of each column of the box. Each ball can get stuck in the box or fall out of the bottom. A ball gets stuck if it hits a "V" shaped pattern between two boards or if a board redirects the ball into either wall of the box. Return an array answer of size n where answer[i] is the column that the ball falls out of at the bottom after dropping the ball from the ith column at the top, or -1 if the ball gets stuck in the box. ',
  },
  {
    question_title: 'Sum of Floored Pairs',
    question_text:
      'Given an integer array nums, return the sum of floor(nums[i] / nums[j]) for all pairs of indices 0 <= i, j < nums.length in the array. Since the answer may be too large, return it modulo 109 + 7. The floor() function returns the integer part of the division. ',
  },
  {
    question_title: 'Minimum Cost to Move Chips to The Same Position',
    question_text:
      'We have n chips, where the position of the ith chip is position[i]. We need to move all the chips to the same position. In one step, we can change the position of the ith chip from position[i] to: Return the minimum cost needed to move all the chips to the same position. ',
  },
  {
    question_title: 'Longest Arithmetic Subsequence of Given Difference',
    question_text:
      'Given an integer array arr and an integer difference, return the length of the longest subsequence in arr which is an arithmetic sequence such that the difference between adjacent elements in the subsequence equals difference. A subsequence is a sequence that can be derived from arr by deleting some or no elements without changing the order of the remaining elements. ',
  },
  {
    question_title: 'Path with Maximum Gold',
    question_text:
      'In a gold mine grid of size m x n, each cell in this mine has an integer representing the amount of gold in that cell, 0 if it is empty. Return the maximum amount of gold you can collect under the conditions: ',
  },
  {
    question_title: 'Count Vowels Permutation',
    question_text:
      'Given an integer n, your task is to count how many strings of length n can be formed under the following rules: Since the answer\xa0may be too large,\xa0return it modulo 10^9 + 7. ',
  },
  {
    question_title: 'Sort the Jumbled Numbers',
    question_text:
      'You are given a 0-indexed integer array mapping which represents the mapping rule of a shuffled decimal system. mapping[i] = j means digit i should be mapped to digit j in this system. The mapped value of an integer is the new integer obtained by replacing each occurrence of digit i in the integer with mapping[i] for all 0 <= i <= 9. You are also given another integer array nums. Return the array nums sorted in non-decreasing order based on the mapped values of its elements. Notes: ',
  },
  {
    question_title: 'Maximum Candies Allocated to K Children',
    question_text:
      'You are given a 0-indexed integer array candies. Each element in the array denotes a pile of candies of size candies[i]. You can divide each pile into any number of sub piles, but you cannot merge two piles together. You are also given an integer k. You should allocate piles of candies to k children such that each child gets the same number of candies. Each child can take at most one pile of candies and some piles of candies may go unused. Return the maximum number of candies each child can get. ',
  },
  {
    question_title: 'Maximum Product of the Length of Two Palindromic Substrings',
    question_text:
      'You are given a 0-indexed string s and are tasked with finding two non-intersecting palindromic substrings of odd length such that the product of their lengths is maximized. More formally, you want to choose four integers i, j, k, l such that 0 <= i <= j < k <= l < s.length and both the substrings s[i...j] and s[k...l] are palindromes and have odd lengths. s[i...j] denotes a substring from index i to index j inclusive. Return the maximum possible product of the lengths of the two non-intersecting palindromic substrings. A palindrome is a string that is the same forward and backward. A substring is a contiguous sequence of characters in a string. ',
  },
  {
    question_title: 'Split a String in Balanced Strings',
    question_text:
      "Balanced strings are those that have an equal quantity of 'L' and 'R' characters. Given a balanced string s, split it in the maximum amount of balanced strings. Return the maximum amount of split balanced strings. ",
  },
  {
    question_title: 'Queens That Can Attack the King',
    question_text:
      'On an 8x8 chessboard, there can be multiple Black Queens and one White King. Given an array of integer coordinates queens that represents the positions of the Black Queens, and a pair of coordinates king that represent the position of the White King, return the coordinates of all the queens (in any order) that can attack the King. ',
  },
  {
    question_title: 'Dice Roll Simulation',
    question_text:
      'A die simulator generates a random number from 1 to 6 for each roll. You introduced a constraint to the generator such that it cannot roll the number i more than rollMax[i] (1-indexed) consecutive times. Given an array of integers rollMax and an integer n, return the number of distinct sequences that can be obtained with exact n rolls. Since the answer may be too large, return it modulo 109 + 7. Two sequences are considered different if at least one element differs from each other. ',
  },
  {
    question_title: 'Maximum Equal Frequency',
    question_text:
      "Given an array nums of positive integers, return the longest possible length of an array prefix of nums, such that it is possible to remove exactly one element from this prefix so that every number that has appeared in it will have the same number of occurrences. If after removing one element there are no remaining elements, it's still considered that every appeared number has the same number of ocurrences (0). ",
  },
  {
    question_title: 'Maximize the Topmost Element After K Moves',
    question_text:
      'You are given a 0-indexed integer array nums representing the contents of a pile, where nums[0] is the topmost element of the pile. In one move, you can perform either of the following: You are also given an integer k, which denotes the total number of moves to be made. Return the maximum value of the topmost element of the pile possible after exactly k moves. In case it is not possible to obtain a non-empty pile after k moves, return -1. ',
  },
  {
    question_title: 'Check If It Is a Straight Line',
    question_text:
      'You are given an array\xa0coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points\xa0make a straight line in the XY plane.  ',
  },
  {
    question_title: 'Remove Sub-Folders from the Filesystem',
    question_text:
      "Given a list of folders folder, return the folders after removing all sub-folders in those folders. You may return the answer in any order. If a folder[i] is located within another folder[j], it is called a sub-folder of it. The format of a path is one or more concatenated strings of the form: '/' followed by one or more lowercase English letters. ",
  },
  {
    question_title: 'Replace the Substring for Balanced String',
    question_text:
      "You are given a string s of length n containing only four kinds of characters: 'Q', 'W', 'E', and 'R'. A string is said to be balanced if each of its characters appears n / 4 times where n is the length of the string. Return the minimum length of the substring that can be replaced with any other string of the same length to make s balanced. If s is already balanced, return 0. ",
  },
  {
    question_title: 'Maximum Profit in Job Scheduling',
    question_text:
      "We have n jobs, where every job is scheduled to be done from startTime[i] to endTime[i], obtaining a profit of profit[i]. You're given the startTime, endTime and profit arrays, return the maximum profit you can take such that there are no two jobs in the subset with overlapping time range. If you choose a job that ends at time X you will be able to start another job that starts at time X. ",
  },
  {
    question_title: 'Find Players With Zero or One Losses',
    question_text:
      'You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match. Return a list answer of size 2 where: The values in the two lists should be returned in increasing order. Note: ',
  },
  {
    question_title: 'Minimum Deletions to Make Array Beautiful',
    question_text:
      'You are given a 0-indexed integer array nums. The array nums is beautiful if: Note that an empty array is considered beautiful. You can delete any number of elements from nums. When you delete an element, all the elements to the right of the deleted element will be shifted one unit to the left to fill the gap created and all the elements to the left of the deleted element will remain unchanged. Return the minimum number of elements to delete from nums to make it beautiful. ',
  },
  {
    question_title: 'Minimum Number of Moves to Make Palindrome',
    question_text:
      'You are given a string s consisting only of lowercase English letters. In one move, you can select any two adjacent characters of s and swap them. Return the minimum number of moves needed to make s a palindrome. Note that the input will be generated such that s can always be converted to a palindrome. ',
  },
  {
    question_title: 'Find Positive Integer Solution for a Given Equation',
    question_text:
      'Given a callable function f(x, y) with a hidden formula and a value z, reverse engineer the formula and return all positive integer pairs x and y where f(x,y) == z. You may return the pairs in any order. While the exact formula is hidden, the function is monotonically increasing, i.e.: The function interface is defined like this: We will judge your solution as follows: ',
  },
  {
    question_title: 'Circular Permutation in Binary Representation',
    question_text:
      'Given 2 integers n and start. Your task is return any permutation p\xa0of (0,1,2.....,2^n -1) such that : ',
  },
  {
    question_title: 'Maximum Length of a Concatenated String with Unique Characters',
    question_text:
      'You are given an array of strings arr. A string s is formed by the concatenation of a subsequence of arr that has unique characters. Return the maximum possible length of s. A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements. ',
  },
  {
    question_title: 'Tiling a Rectangle with the Fewest Squares',
    question_text:
      'Given a rectangle of size n x m, return the minimum number of integer-sided squares that tile the rectangle. ',
  },
  {
    question_title: 'Airplane Seat Assignment Probability',
    question_text:
      'n passengers board an airplane with exactly n seats. The first passenger has lost the ticket and picks a seat randomly. But after that, the rest of the passengers will: Return the probability that the nth person gets his own seat. ',
  },
  {
    question_title: 'Tuple with Same Product',
    question_text:
      'Given an array nums of distinct positive integers, return the number of tuples (a, b, c, d) such that a * b = c * d where a, b, c, and d are elements of nums, and a != b != c != d. ',
  },
  {
    question_title: 'Maximum Height by Stacking Cuboids ',
    question_text:
      "Given n cuboids where the dimensions of the ith cuboid is cuboids[i] = [widthi, lengthi, heighti] (0-indexed). Choose a subset of cuboids and place them on each other. You can place cuboid i on cuboid j if widthi <= widthj and lengthi <= lengthj and heighti <= heightj. You can rearrange any cuboid's dimensions by rotating it to put it on another cuboid. Return the maximum height of the stacked cuboids. ",
  },
  {
    question_title: 'Minimum Swaps to Make Strings Equal',
    question_text:
      'You are given two strings s1 and s2 of equal length consisting of letters "x" and "y" only. Your task is to make these two strings equal to each other. You can swap any two characters that belong to different strings, which means: swap s1[i] and s2[j]. Return the minimum number of swaps required to make s1 and s2 equal, or return -1 if it is impossible to do so. ',
  },
  {
    question_title: 'Count Number of Nice Subarrays',
    question_text:
      'Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it. Return the number of nice sub-arrays. ',
  },
  {
    question_title: 'Minimum Remove to Make Valid Parentheses',
    question_text:
      "Given a string s of '(' , ')' and lowercase English characters. Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string. Formally, a parentheses string is valid if and only if: ",
  },
  {
    question_title: 'Check If It Is a Good Array',
    question_text:
      'Given an array nums of\xa0positive integers. Your task is to select some subset of nums, multiply each element by an integer and add all these numbers.\xa0The array is said to be\xa0good\xa0if you can obtain a sum of\xa01\xa0from the array by any possible subset and multiplicand. Return\xa0True\xa0if the array is good\xa0otherwise\xa0return\xa0False. ',
  },
  {
    question_title: 'Find Palindrome With Fixed Length',
    question_text:
      'Given an integer array queries and a positive integer intLength, return an array answer where answer[i] is either the queries[i]th smallest positive palindrome of length intLength or -1 if no such palindrome exists. A palindrome is a number that reads the same backwards and forwards. Palindromes cannot have leading zeros. ',
  },
  {
    question_title: 'Cells with Odd Values in a Matrix',
    question_text:
      "There is an m x n matrix that is initialized to all 0's. There is also a 2D array indices where each indices[i] = [ri, ci] represents a 0-indexed location to perform some increment operations on the matrix. For each location indices[i], do both of the following: Given m, n, and indices, return the number of odd-valued cells in the matrix after applying the increment to all locations in indices. ",
  },
  {
    question_title: 'Reconstruct a 2-Row Binary Matrix',
    question_text:
      'Given the following details of a matrix with n columns and 2 rows : Your task is to reconstruct the matrix with upper, lower and colsum. Return it as a 2-D integer array. If there are more than one valid solution, any of them will be accepted. If no valid solution exists, return an empty 2-D array. ',
  },
  {
    question_title: 'Number of Closed Islands',
    question_text:
      'Given a 2D\xa0grid consists of 0s (land)\xa0and 1s (water).\xa0 An island is a maximal 4-directionally connected group of 0s and a closed island\xa0is an island totally\xa0(all left, top, right, bottom) surrounded by 1s. Return the number of closed islands. ',
  },
  {
    question_title: 'Maximum Score Words Formed by Letters',
    question_text:
      "Given a list of words, list of\xa0 single\xa0letters (might be repeating)\xa0and score\xa0of every character. Return the maximum score of any valid set of words formed by using the given letters (words[i] cannot be used two\xa0or more times). It is not necessary to use all characters in letters and each letter can only be used once. Score of letters\xa0'a', 'b', 'c', ... ,'z' is given by\xa0score[0], score[1], ... , score[25] respectively. ",
  },
  {
    question_title: 'Shift 2D Grid',
    question_text:
      'Given a 2D grid of size m x n\xa0and an integer k. You need to shift the grid\xa0k times. In one shift operation: Return the 2D grid after applying shift operation k times. ',
  },
  {
    question_title: 'Find Elements in a Contaminated Binary Tree',
    question_text:
      'Given a binary tree with the following rules: Now the binary tree is contaminated, which means all treeNode.val have been changed to -1. Implement the FindElements class: ',
  },
  {
    question_title: 'Greatest Sum Divisible by Three',
    question_text:
      'Given an array\xa0nums\xa0of integers, we need to find the maximum possible sum of elements of the array such that it is divisible by three. ',
  },
  {
    question_title: 'Minimum Moves to Move a Box to Their Target Location',
    question_text:
      "A storekeeper is a game in which the player pushes boxes around in a warehouse trying to get them to target locations. The game is represented by an m x n grid of characters grid where each element is a wall, floor, or box. Your task is to move the box 'B' to the target position 'T' under the following rules: Return the minimum number of pushes to move the box to the target. If there is no way to reach the target, return -1. ",
  },
  {
    question_title: 'Find the Difference of Two Arrays',
    question_text:
      'Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where: Note that the integers in the lists may be returned in any order. ',
  },
  {
    question_title: 'Maximum Value of K Coins From Piles',
    question_text:
      'There are n piles of coins on a table. Each pile consists of a positive number of coins of assorted denominations. In one move, you can choose any coin on top of any pile, remove it, and add it to your wallet. Given a list piles, where piles[i] is a list of integers denoting the composition of the ith pile from top to bottom, and a positive integer k, return the maximum total value of coins you can have in your wallet if you choose exactly k coins optimally. ',
  },
  {
    question_title: 'Minimum Time Visiting All Points',
    question_text:
      'On a 2D plane, there are n points with integer coordinates points[i] = [xi, yi]. Return the minimum time in seconds to visit all the points in the order given by points. You can move according to these rules: ',
  },
  {
    question_title: 'Count Servers that Communicate',
    question_text:
      'You are given a map of a server center, represented as a m * n integer matrix\xa0grid, where 1 means that on that cell there is a server and 0 means that it is no server. Two servers are said to communicate if they are on the same row or on the same column.\n\nReturn the number of servers\xa0that communicate with any other server. ',
  },
  {
    question_title: 'Search Suggestions System',
    question_text:
      'You are given an array of strings products and a string searchWord. Design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products. Return a list of lists of the suggested products after each character of searchWord is typed. ',
  },
  {
    question_title: 'Number of Ways to Stay in the Same Place After Some Steps',
    question_text:
      'You have a pointer at index 0 in an array of size arrLen. At each step, you can move 1 position to the left, 1 position to the right in the array, or stay in the same place (The pointer should not be placed outside the array at any time). Given two integers steps and arrLen, return the number of ways such that your pointer still at index 0 after exactly steps steps. Since the answer may be too large, return it modulo 109 + 7. ',
  },
  {
    question_title: 'Find Winner on a Tic Tac Toe Game',
    question_text:
      'Tic-tac-toe is played by two players A and B on a 3 x 3 grid. The rules of Tic-Tac-Toe are: Given a 2D integer array moves where moves[i] = [rowi, coli] indicates that the ith move will be played on grid[rowi][coli]. return the winner of the game if it exists (A or B). In case the game ends in a draw return "Draw". If there are still movements to play return "Pending". You can assume that moves is valid (i.e., it follows the rules of Tic-Tac-Toe), the grid is initially empty, and A will play first. ',
  },
  {
    question_title: 'Number of Burgers with No Waste of Ingredients',
    question_text:
      'Given two integers tomatoSlices and cheeseSlices. The ingredients of different burgers are as follows: Return [total_jumbo, total_small] so that the number of remaining tomatoSlices equal to 0 and the number of remaining cheeseSlices equal to 0. If it is not possible to make the remaining tomatoSlices and cheeseSlices equal to 0 return []. ',
  },
  {
    question_title: 'Count Square Submatrices with All Ones',
    question_text:
      'Given a m * n matrix of ones and zeros, return how many square submatrices have all ones. ',
  },
  {
    question_title: 'Palindrome Partitioning III',
    question_text:
      'You are given a string s containing lowercase letters and an integer k. You need to : Return the minimal number of characters that you need to change to divide the string. ',
  },
  {
    question_title: 'Group the People Given the Group Size They Belong To',
    question_text:
      'There are n people\xa0that are split into some unknown number of groups. Each person is labeled with a\xa0unique ID\xa0from\xa00\xa0to\xa0n - 1. You are given an integer array\xa0groupSizes, where groupSizes[i]\xa0is the size of the group that person\xa0i\xa0is in. For example, if\xa0groupSizes[1] = 3, then\xa0person\xa01\xa0must be in a\xa0group of size\xa03. Return\xa0a list of groups\xa0such that\xa0each person\xa0i\xa0is in a group of size\xa0groupSizes[i]. Each person should\xa0appear in\xa0exactly one group,\xa0and every person must be in a group. If there are\xa0multiple answers, return any of them. It is guaranteed that there will be at least one valid solution for the given input. ',
  },
  {
    question_title: 'Find the Smallest Divisor Given a Threshold',
    question_text:
      "Given an array of integers nums and an integer threshold, we will choose a positive integer divisor, divide all the array by it, and sum the division's result. Find the smallest divisor such that the result mentioned above is less than or equal to threshold. Each result of the division is rounded to the nearest integer greater than or equal to that element. (For example: 7/3 = 3 and 10/2 = 5). The test cases are generated so\xa0that there will be an answer. ",
  },
  {
    question_title: 'Minimum Number of Flips to Convert Binary Matrix to Zero Matrix',
    question_text:
      'Given a m x n binary matrix mat. In one step, you can choose one cell and flip it and all the four neighbors of it if they exist (Flip is changing 1 to 0 and 0 to 1). A pair of cells are called neighbors if they share one edge. Return the minimum number of steps required to convert mat to a zero matrix or -1 if you cannot. A binary matrix is a matrix with all cells equal to 0 or 1 only. A zero matrix is a matrix with all cells equal to 0. ',
  },
  {
    question_title: 'Convert Binary Number in a Linked List to Integer',
    question_text:
      'Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number. Return the decimal value of the number in the linked list. ',
  },
  {
    question_title: 'Maximum Side Length of a Square with Sum Less than or Equal to Threshold',
    question_text:
      'Given a m x n matrix mat and an integer threshold, return the maximum side-length of a square with a sum less than or equal to threshold or return 0 if there is no such square. ',
  },
  {
    question_title: 'Shortest Path in a Grid with Obstacles Elimination',
    question_text:
      'You are given an m x n integer matrix grid where each cell is either 0 (empty) or 1 (obstacle). You can move up, down, left, or right from and to an empty cell in one step. Return the minimum number of steps to walk from the upper left corner (0, 0) to the lower right corner (m - 1, n - 1) given that you can eliminate at most k obstacles. If it is not possible to find such walk return -1. ',
  },
  {
    question_title: 'Find Numbers with Even Number of Digits',
    question_text:
      'Given an array nums of integers, return how many of them contain an even number of digits. ',
  },
  {
    question_title: 'Divide Array in Sets of K Consecutive Numbers',
    question_text:
      'Given an array of integers nums and a positive integer k, check whether it is possible to divide this array into sets of k consecutive numbers. Return true if it is possible. Otherwise, return false. ',
  },
  {
    question_title: 'Maximum Number of Occurrences of a Substring',
    question_text:
      'Given a string s, return the maximum number of ocurrences of any substring under the following rules: ',
  },
  {
    question_title: 'Maximum Candies You Can Get from Boxes',
    question_text:
      'You have n boxes labeled from 0 to n - 1. You are given four arrays: status, candies, keys, and containedBoxes where: You are given an integer array initialBoxes that contains the labels of the boxes you initially have. You can take all the candies in any open box and you can use the keys in it to open new boxes and you also can use the boxes you find in it. Return the maximum number of candies you can get following the rules above. ',
  },
  {
    question_title: 'Find N Unique Integers Sum up to Zero',
    question_text:
      'Given an integer n, return any array containing n unique integers such that they add up to 0. ',
  },
  {
    question_title: 'All Elements in Two Binary Search Trees',
    question_text:
      'Given two binary search trees root1 and root2, return a list containing all the integers from both trees sorted in ascending order. ',
  },
  {
    question_title: 'Jump Game III',
    question_text:
      'Given an array of non-negative integers arr, you are initially positioned at start\xa0index of the array. When you are at index i, you can jump\xa0to i + arr[i] or i - arr[i], check if you can reach to any index with value 0. Notice that you can not jump outside of the array at any time. ',
  },
  {
    question_title: 'Verbal Arithmetic Puzzle',
    question_text:
      'Given an equation, represented by words on the left side and the result on the right side. You need to check if the equation is solvable under the following rules: Return true if the equation is solvable, otherwise return false. ',
  },
  {
    question_title: 'All Ancestors of a Node in a Directed Acyclic Graph',
    question_text:
      'You are given a positive integer n representing the number of nodes of a Directed Acyclic Graph (DAG). The nodes are numbered from 0 to n - 1 (inclusive). You are also given a 2D integer array edges, where edges[i] = [fromi, toi] denotes that there is a unidirectional edge from fromi to toi in the graph. Return a list answer, where answer[i] is the list of ancestors of the ith node, sorted in ascending order. A node u is an ancestor of another node v if u can reach v via a set of edges. ',
  },
  {
    question_title: 'Encrypt and Decrypt Strings',
    question_text:
      'You are given a character array keys containing unique characters and a string array values containing strings of length 2. You are also given another string array dictionary that contains all permitted original strings after decryption. You should implement a data structure that can encrypt or decrypt a 0-indexed string. A string is encrypted with the following process: Note that in case a character of the string is not present in keys, the encryption process cannot be carried out, and an empty string "" is returned. A string is decrypted with the following process: Implement the Encrypter class: ',
  },
  {
    question_title: 'Decrypt String from Alphabet to Integer Mapping',
    question_text:
      "You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows: Return the string formed after mapping. The test cases are generated so that a unique mapping will always exist. ",
  },
  {
    question_title: 'XOR Queries of a Subarray',
    question_text:
      'You are given an array arr of positive integers. You are also given the array queries where queries[i] = [lefti, righti]. For each query i compute the XOR of elements from lefti to righti (that is, arr[lefti] XOR arr[lefti + 1] XOR ... XOR arr[righti] ). Return an array answer where answer[i] is the answer to the ith query. ',
  },
  {
    question_title: 'Get Watched Videos by Your Friends',
    question_text:
      'There are n people, each person has a unique id between 0 and n-1. Given the arrays watchedVideos and friends, where watchedVideos[i] and friends[i] contain the list of watched videos and the list of friends respectively for the person with id = i. Level 1 of videos are all watched videos by your\xa0friends, level 2 of videos are all watched videos by the friends of your\xa0friends and so on. In general, the level k of videos are all\xa0watched videos by people\xa0with the shortest path exactly equal\xa0to\xa0k with you. Given your\xa0id and the level of videos, return the list of videos ordered by their frequencies (increasing). For videos with the same frequency order them alphabetically from least to greatest. ',
  },
  {
    question_title: 'Minimum Insertion Steps to Make a String Palindrome',
    question_text:
      'Given a string s. In one step you can insert any character at any index of the string. Return the minimum number of steps to make s\xa0palindrome. A\xa0Palindrome String\xa0is one that reads the same backward as well as forward. ',
  },
  {
    question_title: 'Convert Integer to the Sum of Two No-Zero Integers',
    question_text:
      'No-Zero integer is a positive integer that does not contain any 0 in its decimal representation. Given an integer n, return a list of two integers [A, B] where: The test cases are generated so that there is at least one valid solution. If there are many valid solutions you can return any of them. ',
  },
  {
    question_title: 'Number of Operations to Make Network Connected',
    question_text:
      'There are n computers numbered from 0 to n - 1 connected by ethernet cables connections forming a network where connections[i] = [ai, bi] represents a connection between computers ai and bi. Any computer can reach any other computer directly or indirectly through the network. You are given an initial computer network connections. You can extract certain cables between two directly connected computers, and place them between any pair of disconnected computers to make them directly connected. Return the minimum number of times you need to do this in order to make all the computers connected. If it is not possible, return -1. ',
  },
  {
    question_title: 'Minimum Distance to Type a Word Using Two Fingers',
    question_text:
      'You have a keyboard layout as shown above in the X-Y plane, where each English uppercase letter is located at some coordinate. Given the string word, return the minimum total distance to type such string using only two fingers. The distance between coordinates (x1, y1) and (x2, y2) is |x1 - x2| + |y1 - y2|. Note that the initial positions of your two fingers are considered free so do not count towards your total distance, also your two fingers do not have to start at the first letter or the first two letters. ',
  },
  {
    question_title: 'Number of Steps to Reduce a Number to Zero',
    question_text:
      'Given an integer num, return the number of steps to reduce it to zero. In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it. ',
  },
  {
    question_title: 'Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold',
    question_text:
      'Given an array of integers arr and two integers k and threshold, return the number of sub-arrays of size k and average greater than or equal to threshold. ',
  },
  {
    question_title: 'Angle Between Hands of a Clock',
    question_text:
      'Given two numbers, hour and minutes, return the smaller angle (in degrees) formed between the hour and the minute hand. Answers within 10-5 of the actual value will be accepted as correct. ',
  },
  {
    question_title: 'Jump Game IV',
    question_text:
      'Given an array of\xa0integers arr, you are initially positioned at the first index of the array. In one step you can jump from index i to index: Return the minimum number of steps to reach the last index of the array. Notice that you can not jump outside of the array at any time. ',
  },
  {
    question_title: 'Maximum 69 Number',
    question_text:
      'You are given a positive integer num consisting only of digits 6 and 9. Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6). ',
  },
  {
    question_title: 'Print Words Vertically',
    question_text:
      'Given a string s.\xa0Return\xa0all the words vertically in the same order in which they appear in s.\r\nWords are returned as a list of strings, complete with\xa0spaces when is necessary. (Trailing spaces are not allowed).\r\nEach word would be put on only one column and that in one column there will be only one word. ',
  },
  {
    question_title: 'Delete Leaves With a Given Value',
    question_text:
      'Given a binary tree root and an integer target, delete all the leaf nodes with value target. Note that once you delete a leaf node with value target, if its parent node becomes a leaf node and has the value target, it should also be deleted (you need to continue doing that until you cannot). ',
  },
  {
    question_title: 'Minimum Number of Taps to Open to Water a Garden',
    question_text:
      'There is a one-dimensional garden on the x-axis. The garden starts at the point 0 and ends at the point n. (i.e The length of the garden is n). There are n + 1 taps located at points [0, 1, ..., n] in the garden. Given an integer n and an integer array ranges of length n + 1 where ranges[i] (0-indexed) means the i-th tap can water the area [i - ranges[i], i + ranges[i]] if it was open. Return the minimum number of taps that should be open to water the whole garden, If the garden cannot be watered return -1. ',
  },
  {
    question_title: 'Remove Palindromic Subsequences',
    question_text:
      "You are given a string s consisting only of letters 'a' and 'b'. In a single step you can remove one palindromic subsequence from s. Return the minimum number of steps to make the given string empty. A string is a subsequence of a given string if it is generated by deleting some characters of a given string without changing its order. Note that a subsequence does not necessarily need to be contiguous. A string is called palindrome if is one that reads the same backward as well as forward. ",
  },
  {
    question_title: 'Filter Restaurants by Vegan-Friendly, Price and Distance',
    question_text:
      'Given the array restaurants where \xa0restaurants[i] = [idi, ratingi, veganFriendlyi, pricei, distancei]. You have to filter the restaurants using three filters. The veganFriendly filter will be either true (meaning you should only include restaurants with veganFriendlyi set to true)\xa0or false\xa0(meaning you can include any restaurant). In addition, you have the filters\xa0maxPrice and maxDistance\xa0which\xa0are the maximum value for price and distance of restaurants you should consider respectively. Return the array of restaurant IDs after filtering, ordered by rating from highest to lowest. For restaurants with the same rating, order them by id from highest to lowest. For simplicity veganFriendlyi and veganFriendly take value 1 when it is true, and 0 when it is false. ',
  },
  {
    question_title: 'Find the City With the Smallest Number of Neighbors at a Threshold Distance',
    question_text:
      "There are n cities numbered from 0 to n-1. Given the array edges where edges[i] = [fromi, toi, weighti] represents a bidirectional and weighted edge between cities fromi and toi, and given the integer distanceThreshold. Return the city with the smallest number of cities that are reachable through some path and whose distance is at most distanceThreshold, If there are multiple such cities, return the city with the greatest number. Notice that the distance of a path connecting cities i and j is equal to the sum of the edges' weights along that path. ",
  },
  {
    question_title: 'Minimum Difficulty of a Job Schedule',
    question_text:
      'You want to schedule a list of jobs in d days. Jobs are dependent (i.e To work on the ith job, you have to finish all the jobs j where 0 <= j < i). You have to finish at least one task every day. The difficulty of a job schedule is the sum of difficulties of each day of the d days. The difficulty of a day is the maximum difficulty of a job done on that day. You are given an integer array jobDifficulty and an integer d. The difficulty of the ith job is jobDifficulty[i]. Return the minimum difficulty of a job schedule. If you cannot find a schedule for the jobs return -1. ',
  },
  {
    question_title: 'Sort Integers by The Number of 1 Bits',
    question_text:
      "You are given an integer array arr. Sort the integers in the array\xa0in ascending order by the number of 1's\xa0in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order. Return the array after sorting it. ",
  },
  {
    question_title: 'Apply Discount Every n Orders',
    question_text:
      'There is a supermarket that is frequented by many customers. The products sold at the supermarket are represented as two parallel integer arrays products and prices, where the ith product has an ID of products[i] and a price of prices[i]. When a customer is paying, their bill is represented as two parallel integer arrays product and amount, where the jth product they purchased has an ID of product[j], and amount[j] is how much of the product they bought. Their subtotal is calculated as the sum of each amount[j] * (price of the jth product). The supermarket decided to have a sale. Every nth customer paying for their groceries will be given a percentage discount. The discount amount is given by discount, where they will be given discount percent off their subtotal. More formally, if their subtotal is bill, then they would actually pay bill * ((100 - discount) / 100). Implement the Cashier class: ',
  },
  {
    question_title: 'Number of Substrings Containing All Three Characters',
    question_text:
      'Given a string s\xa0consisting only of characters a, b and c. Return the number of substrings containing at least\xa0one occurrence of all these characters a, b and c. ',
  },
  {
    question_title: 'Count All Valid Pickup and Delivery Options',
    question_text:
      'Given n orders, each order consist in pickup and delivery services. Count all valid pickup/delivery possible sequences such that delivery(i) is always after of\xa0pickup(i). Since the answer\xa0may be too large,\xa0return it modulo\xa010^9 + 7. ',
  },
  {
    question_title: 'The K Weakest Rows in a Matrix',
    question_text:
      "You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row. A row i is weaker than a row j if one of the following is true: Return the indices of the k weakest rows in the matrix ordered from weakest to strongest. ",
  },
  {
    question_title: 'Reduce Array Size to The Half',
    question_text:
      'You are given an integer array arr. You can choose a set of integers and remove all the occurrences of these integers in the array. Return the minimum size of the set so that at least half of the integers of the array are removed. ',
  },
  {
    question_title: 'Maximum Product of Splitted Binary Tree',
    question_text:
      'Given the root of a binary tree, split the binary tree into two subtrees by removing one edge such that the product of the sums of the subtrees is maximized. Return the maximum product of the sums of the two subtrees. Since the answer may be too large, return it modulo 109 + 7. Note that you need to maximize the answer before taking the mod and not after taking it. ',
  },
  {
    question_title: 'Jump Game V',
    question_text:
      'Given an array of\xa0integers arr and an integer d. In one step you can jump from index i to index: In addition, you can only jump from index i to index j\xa0if arr[i] > arr[j] and arr[i] > arr[k] for all indices k between i and j (More formally min(i,\xa0j) < k < max(i, j)). You can choose any index of the array and start jumping. Return the maximum number of indices\xa0you can visit. Notice that you can not jump outside of the array at any time. ',
  },
  {
    question_title: 'Check If N and Its Double Exist',
    question_text:
      'Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M). More formally check if there exists\xa0two indices i and j such that : ',
  },
  {
    question_title: 'Minimum Number of Steps to Make Two Strings Anagram',
    question_text:
      'You are given two strings of the same length s and t. In one step you can choose any character of t and replace it with another character. Return the minimum number of steps to make t an anagram of s. An Anagram of a string is a string that contains the same characters with a different (or the same) ordering. ',
  },
  {
    question_title: 'Tweet Counts Per Frequency',
    question_text:
      "A social media company is trying to monitor activity on their site by analyzing the number of tweets that occur in select periods of time. These periods can be partitioned into smaller time chunks based on a certain frequency (every minute, hour, or day). For example, the period [10, 10000] (in seconds) would be partitioned into the following time chunks with these frequencies: Notice that the last chunk may be shorter than the specified frequency's chunk size and will always end with the end time of the period (10000 in the above example). Design and implement an API to help the company with their analysis. Implement the TweetCounts class:  Example:  Constraints:",
  },
  {
    question_title: 'Maximum Students Taking Exam',
    question_text:
      "Given a m\xa0* n\xa0matrix seats\xa0\xa0that represent seats distributions\xa0in a classroom.\xa0If a seat\xa0is\xa0broken, it is denoted by '#' character otherwise it is denoted by a '.' character. Students can see the answers of those sitting next to the left, right, upper left and upper right, but he cannot see the answers of the student sitting\xa0directly in front or behind him. Return the maximum number of students that can take the exam together\xa0without any cheating being possible.. Students must be placed in seats in good condition. ",
  },
  {
    question_title: 'Increasing Decreasing String',
    question_text:
      'You are given a string s. Reorder the string using the following algorithm: In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result. Return the result string after sorting s with this algorithm. ',
  },
  {
    question_title: 'Find the Longest Substring Containing Vowels in Even Counts',
    question_text:
      "Given the string s, return the size of the longest substring containing each vowel an even number of times. That is, 'a', 'e', 'i', 'o', and 'u' must appear an even number of times. ",
  },
  {
    question_title: 'Longest ZigZag Path in a Binary Tree',
    question_text:
      'You are given the root of a binary tree. A ZigZag path for a binary tree is defined as follow: Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0). Return the longest ZigZag path contained in that tree. ',
  },
  {
    question_title: 'Maximum Sum BST in Binary Tree',
    question_text:
      'Given a binary tree root, return the maximum sum of all keys of any sub-tree which is also a Binary Search Tree (BST). Assume a BST is defined as follows: ',
  },
  {
    question_title: 'Count Negative Numbers in a Sorted Matrix',
    question_text:
      'Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid. ',
  },
  {
    question_title: 'Product of the Last K Numbers',
    question_text:
      'Design an algorithm that accepts a stream of integers and retrieves the product of the last k integers of the stream. Implement the ProductOfNumbers class: The test cases are generated so that, at any time, the product of any contiguous sequence of numbers will fit into a single 32-bit integer without overflowing.  Example:  Constraints:',
  },
  {
    question_title: 'Maximum Number of Events That Can Be Attended',
    question_text:
      'You are given an array of events where events[i] = [startDayi, endDayi]. Every event i starts at startDayi and ends at endDayi. You can attend an event i at any day d where startTimei <= d <= endTimei. You can only attend one event at any time d. Return the maximum number of events you can attend. ',
  },
  {
    question_title: 'Construct Target Array With Multiple Sums',
    question_text:
      "You are given an array target of n integers. From a starting array arr consisting of n 1's, you may perform the following procedure : Return true if it is possible to construct the target array from arr, otherwise, return false. ",
  },
  {
    question_title: 'How Many Numbers Are Smaller Than the Current Number',
    question_text:
      "Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's\xa0such that\xa0j != i and nums[j] < nums[i]. Return the answer in an array. ",
  },
  {
    question_title: 'Rank Teams by Votes',
    question_text:
      'In a special ranking system, each voter gives a rank from highest to lowest to all teams participated in the competition. The ordering of teams is decided by who received the most position-one votes. If two or more teams tie in the first position, we consider the second position to resolve the conflict, if they tie again, we continue this process until the ties are resolved. If two or more teams are still tied after considering all positions, we rank them alphabetically based on their team letter. Given an array of strings votes which is the votes of all voters in the ranking systems. Sort all teams according to the ranking system described above. Return a string of all teams sorted by the ranking system. ',
  },
  {
    question_title: 'Linked List in Binary Tree',
    question_text:
      'Given a binary tree root and a\xa0linked list with\xa0head\xa0as the first node. Return True if all the elements in the linked list starting from the head correspond to some downward path connected in the binary tree\xa0otherwise return False. In this context downward path means a path that starts at some node and goes downwards. ',
  },
  {
    question_title: 'Minimum Cost to Make at Least One Valid Path in a Grid',
    question_text:
      'Given an m x n grid. Each cell of the grid has a sign pointing to the next cell you should visit if you are currently in this cell. The sign of grid[i][j] can be: Notice that there could be some signs on the cells of the grid that point outside the grid. You will initially start at the upper left cell (0, 0). A valid path in the grid is a path that starts from the upper left cell (0, 0) and ends at the bottom-right cell (m - 1, n - 1) following the signs on the grid. The valid path does not have to be the shortest. You can modify the sign on a cell with cost = 1. You can modify the sign on a cell one time only. Return the minimum cost to make the grid have at least one valid path. ',
  },
  {
    question_title: 'Find the Distance Value Between Two Arrays',
    question_text:
      'Given two integer arrays arr1 and arr2, and the integer d, return the distance value between the two arrays. The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where |arr1[i]-arr2[j]| <= d. ',
  },
  {
    question_title: 'Cinema Seat Allocation',
    question_text:
      ' A cinema\xa0has n\xa0rows of seats, numbered from 1 to n\xa0and there are ten\xa0seats in each row, labelled from 1\xa0to 10\xa0as shown in the figure above. Given the array reservedSeats containing the numbers of seats already reserved, for example, reservedSeats[i] = [3,8]\xa0means the seat located in row 3 and labelled with 8\xa0is already reserved. Return the maximum number of four-person groups\xa0you can assign on the cinema\xa0seats. A four-person group\xa0occupies four\xa0adjacent seats in one single row. Seats across an aisle (such as [3,3]\xa0and [3,4]) are not considered to be adjacent, but there is an exceptional case\xa0on which an aisle split\xa0a four-person group, in that case, the aisle split\xa0a four-person group in the middle,\xa0which means to have two people on each side. ',
  },
  {
    question_title: 'Sort Integers by The Power Value',
    question_text:
      'The power of an integer x is defined as the number of steps needed to transform x into 1 using the following steps: For example, the power of x = 3 is 7 because 3 needs 7 steps to become 1 (3 --> 10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1). Given three integers lo, hi and k. The task is to sort all integers in the interval [lo, hi] by the power value in ascending order, if two or more integers have the same power value sort them by ascending order. Return the kth integer in the range [lo, hi] sorted by the power value. Notice that for any integer x (lo <= x <= hi) it is guaranteed that x will transform into 1 using these steps and that the power of x is will fit in a 32-bit signed integer. ',
  },
  {
    question_title: 'Pizza With 3n Slices',
    question_text:
      'There is a pizza with 3n slices of varying size, you and your friends will take slices of pizza as follows: Given an integer array slices that represent the sizes of the pizza slices in a clockwise direction, return the maximum possible sum of slice sizes that you can pick. ',
  },
  {
    question_title: 'Generate a String With Characters That Have Odd Counts',
    question_text:
      'Given an\xa0integer n, return a string with n\xa0characters such that each character in such string occurs an odd number of times. The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them. ',
  },
  {
    question_title: 'Number of Times Binary String Is Prefix-Aligned',
    question_text:
      'You have a 1-indexed binary string of length n where all the bits are 0 initially. We will flip all the bits of this binary string (i.e., change them from 0 to 1) one by one. You are given a 1-indexed integer array flips where flips[i] indicates that the bit at index i will be flipped in the ith step. A binary string is prefix-aligned if, after the ith step, all the bits in the inclusive range [1, i] are ones and all the other bits are zeros. Return the number of times the binary string is prefix-aligned during the flipping process. ',
  },
  {
    question_title: 'Time Needed to Inform All Employees',
    question_text:
      'A company has n employees with a unique ID for each employee from 0 to n - 1. The head of the company is the one with headID. Each employee has one direct manager given in the manager array where manager[i] is the direct manager of the i-th employee, manager[headID] = -1. Also, it is guaranteed that the subordination relationships have a tree structure. The head of the company wants to inform all the company employees of an urgent piece of news. He will inform his direct subordinates, and they will inform their subordinates, and so on until all employees know about the urgent news. The i-th employee needs informTime[i] minutes to inform all of his direct subordinates (i.e., After informTime[i] minutes, all his direct subordinates can start spreading the news). Return the number of minutes needed to inform all the employees about the urgent news. ',
  },
  {
    question_title: 'Frog Position After T Seconds',
    question_text:
      'Given an undirected tree consisting of n vertices numbered from 1 to n. A frog starts jumping from vertex 1. In one second, the frog jumps from its current vertex to another unvisited vertex if they are directly connected. The frog can not jump back to a visited vertex. In case the frog can jump to several vertices, it jumps randomly to one of them with the same probability. Otherwise, when the frog can not jump to any unvisited vertex, it jumps forever on the same vertex. The edges of the undirected tree are given in the array edges, where edges[i] = [ai, bi] means that exists an edge connecting the vertices ai and bi. Return the probability that after t seconds the frog is on the vertex target. Answers within 10-5 of the actual answer will be accepted. ',
  },
  {
    question_title: 'Lucky Numbers in a Matrix',
    question_text:
      'Given an m x n matrix of distinct numbers, return all lucky numbers in the matrix in any order. A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column. ',
  },
  {
    question_title: 'Design a Stack With Increment Operation',
    question_text:
      'Design a stack which supports the following operations. Implement the CustomStack class: ',
  },
  {
    question_title: 'Find a Corresponding Node of a Binary Tree in a Clone of That Tree',
    question_text:
      'Given two binary trees original and cloned and given a reference to a node target in the original tree. The cloned tree is a copy of the original tree. Return a reference to the same node in the cloned tree. Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree. ',
  },
  {
    question_title: 'Maximum Performance of a Team',
    question_text:
      "You are given two integers n and k and two integer arrays speed and efficiency both of length n. There are n engineers numbered from 1 to n. speed[i] and efficiency[i] represent the speed and efficiency of the ith engineer respectively. Choose at most k different engineers out of the n engineers to form a team with the maximum performance. The performance of a team is the sum of their engineers' speeds multiplied by the minimum efficiency among their engineers. Return the maximum performance of this team. Since the answer can be a huge number, return it modulo 109 + 7. ",
  },
  {
    question_title: 'Count Largest Group',
    question_text:
      'You are given an integer n. Each number from 1 to n is grouped according to the sum of its digits. Return the number of groups that have the largest size. ',
  },
  {
    question_title: 'Circle and Rectangle Overlapping',
    question_text:
      'You are given a circle represented as (radius, xCenter, yCenter) and an axis-aligned rectangle represented as (x1, y1, x2, y2), where (x1, y1) are the coordinates of the bottom-left corner, and (x2, y2) are the coordinates of the top-right corner of the rectangle. Return true if the circle and rectangle are overlapped otherwise return false. In other words, check if there is any point (xi, yi) that belongs to the circle and the rectangle at the same time. ',
  },
  {
    question_title: 'Construct K Palindrome Strings',
    question_text:
      'Given a string s and an integer k, return true if you can use all the characters in s to construct k palindrome strings or false otherwise. ',
  },
  {
    question_title: 'Reducing Dishes',
    question_text:
      'A chef has collected data on the satisfaction level of his n dishes. Chef can cook any dish in 1 unit of time. Like-time coefficient of a dish is defined as the time taken to cook that dish including previous dishes multiplied by its satisfaction level i.e. time[i] * satisfaction[i]. Return the maximum sum of like-time coefficient that the chef can obtain after dishes preparation. Dishes can be prepared in any order and the chef can discard some dishes to get this maximum value. ',
  },
  {
    question_title: 'Create Target Array in the Given Order',
    question_text:
      'Given two arrays of integers\xa0nums and index. Your task is to create target array under the following rules: Return the target array. It is guaranteed that the insertion operations will be valid. ',
  },
  {
    question_title: 'Check if There is a Valid Path in a Grid',
    question_text:
      'You are given an m x n grid. Each cell of grid represents a street. The street of grid[i][j] can be: You will initially start at the street of the upper-left cell (0, 0). A valid path in the grid is a path that starts from the upper left cell (0, 0) and ends at the bottom-right cell (m - 1, n - 1). The path should only follow the streets. Notice that you are not allowed to change any street. Return true if there is a valid path in the grid or false otherwise. ',
  },
  {
    question_title: 'Longest Happy Prefix',
    question_text:
      'A string is called a happy prefix if is a non-empty prefix which is also a suffix (excluding itself). Given a string s, return the longest happy prefix of s. Return an empty string "" if no such prefix exists. ',
  },
  {
    question_title: 'Find Lucky Integer in an Array',
    question_text:
      'Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value. Return the largest lucky integer in the array. If there is no lucky integer return -1. ',
  },
  {
    question_title: 'Count Number of Teams',
    question_text:
      'There are n soldiers standing in a line. Each soldier is assigned a unique rating value. You have to form a team of 3 soldiers amongst them under the following rules: Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams). ',
  },
  {
    question_title: 'Design Underground System',
    question_text:
      'An underground railway system is keeping track of customer travel times between different stations. They are using this data to calculate the average time it takes to travel from one station to another. Implement the UndergroundSystem class: You may assume all calls to the checkIn and checkOut methods are consistent. If a customer checks in at time t1 then checks out at time t2, then t1 < t2. All events happen in chronological order. ',
  },
  {
    question_title: 'Find All Good Strings',
    question_text:
      'Given the strings s1 and s2 of size n and the string evil, return the number of good strings. A good string has size n, it is alphabetically greater than or equal to s1, it is alphabetically smaller than or equal to s2, and it does not contain the string evil as a substring. Since the answer can be a huge number, return this modulo 109 + 7. ',
  },
  {
    question_title: 'Minimum Value to Get Positive Step by Step Sum',
    question_text:
      'Given an array of integers\xa0nums, you start with an initial positive value startValue. In each iteration, you calculate the step by step sum of startValue\xa0plus\xa0elements in nums\xa0(from left to right). Return the minimum positive value of\xa0startValue such that the step by step sum is never less than 1. ',
  },
  {
    question_title: 'Find the Minimum Number of Fibonacci Numbers Whose Sum Is K',
    question_text:
      'Given an integer\xa0k, return the minimum number of Fibonacci numbers whose sum is equal to k. The same Fibonacci number can be used multiple times. The Fibonacci numbers are defined as: ',
  },
  {
    question_title: 'The k-th Lexicographical String of All Happy Strings of Length n',
    question_text:
      'A happy string is a string that: For example, strings "abc", "ac", "b" and "abcbabcbcb" are all happy strings and strings "aa", "baa" and "ababbc" are not happy strings. Given two integers n and k, consider a list of all happy strings of length n sorted in lexicographical order. Return the kth string of this list or return an empty string if there are less than k happy strings of length n. ',
  },
  {
    question_title: 'Restore The Array',
    question_text:
      'A program was supposed to print an array of integers. The program forgot to print whitespaces and the array is printed as a string of digits s and all we know is that all integers in the array were in the range [1, k] and there are no leading zeros in the array. Given the string s and the integer k, return the number of the possible arrays that can be printed as s using the mentioned program. Since the answer may be very large, return it modulo 109 + 7. ',
  },
  {
    question_title: 'Minimum Subsequence in Non-Increasing Order',
    question_text:
      'Given the array nums, obtain a subsequence of the array whose sum of elements is strictly greater than the sum of the non\xa0included elements in such subsequence. If there are multiple solutions, return the subsequence with minimum size and if there still exist multiple solutions, return the subsequence with the maximum total sum of all its elements. A subsequence of an array can be obtained by erasing some (possibly zero) elements from the array. Note that the solution with the given constraints is guaranteed to be\xa0unique. Also return the answer sorted in non-increasing order. ',
  },
  {
    question_title: 'Number of Steps to Reduce a Number in Binary Representation to One',
    question_text:
      'Given the binary representation of an integer as a string s, return the number of steps to reduce it to 1 under the following rules: If the current number is even, you have to divide it by 2. If the current number is odd, you have to add 1 to it. It is guaranteed that you can always reach one for all test cases. ',
  },
  {
    question_title: 'Stone Game III',
    question_text:
      'Alice and Bob continue their games with piles of stones. There are several stones arranged in a row, and each stone has an associated value which is an integer given in the array stoneValue. Alice and Bob take turns, with Alice starting first. On each player\'s turn, that player can take 1, 2, or 3 stones from the first remaining stones in the row. The score of each player is the sum of the values of the stones taken. The score of each player is 0 initially. The objective of the game is to end with the highest score, and the winner is the player with the highest score and there could be a tie. The game continues until all the stones have been taken. Assume Alice and Bob play optimally. Return "Alice" if Alice will win, "Bob" if Bob will win, or "Tie" if they will end the game with the same score. ',
  },
  {
    question_title: 'String Matching in an Array',
    question_text:
      'Given an array of string words. Return all strings in words which is substring of another word in any order. String words[i] is substring of words[j],\xa0if\xa0can be obtained removing some characters to left and/or right side of words[j]. ',
  },
  {
    question_title: 'Queries on a Permutation With Key',
    question_text:
      'Given the array queries of positive integers between 1 and m, you have to process all queries[i] (from i=0 to i=queries.length-1) according to the following rules: Return an array containing the result for the given queries. ',
  },
  {
    question_title: 'HTML Entity Parser',
    question_text:
      'HTML entity parser is the parser that takes HTML code as input and replace all the entities of the special characters by the characters itself. The special characters and their entities for HTML are: Given the input text string to the HTML parser, you have to implement the entity parser. Return the text after replacing the entities by the special characters. ',
  },
  {
    question_title: 'Number of Ways to Paint N × 3 Grid',
    question_text:
      'You have a grid of size n x 3 and you want to paint each cell of the grid with exactly one of the three colors: Red, Yellow, or Green while making sure that no two adjacent cells have the same color (i.e., no two cells that share vertical or horizontal sides have the same color). Given n the number of rows of the grid, return the number of ways you can paint this grid. As the answer may grow large, the answer must be computed modulo 109 + 7. ',
  },
  {
    question_title: 'Kids With the Greatest Number of Candies',
    question_text:
      'There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have. Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise. Note that multiple kids can have the greatest number of candies. ',
  },
  {
    question_title: 'Max Difference You Can Get From Changing an Integer',
    question_text:
      'You are given an integer num. You will apply the following steps exactly two times: Let a and b be the results of applying the operations to num the first and second times, respectively. Return the max difference between a and b. ',
  },
  {
    question_title: 'Check If a String Can Break Another String',
    question_text:
      'Given two strings: s1 and s2 with the same\xa0size, check if some\xa0permutation of string s1 can break\xa0some\xa0permutation of string s2 or vice-versa. In other words s2 can break s1\xa0or vice-versa. A string x\xa0can break\xa0string y\xa0(both of size n) if x[i] >= y[i]\xa0(in alphabetical order)\xa0for all i\xa0between 0 and n-1. ',
  },
  {
    question_title: 'Number of Ways to Wear Different Hats to Each Other',
    question_text:
      'There are n people and 40 types of hats labeled from 1 to 40. Given a 2D integer array hats, where hats[i] is a list of all hats preferred by the ith person. Return the number of ways that the n people wear different hats to each other. Since the answer may be too large, return it modulo 109 + 7. ',
  },
  {
    question_title: 'Reformat The String',
    question_text:
      'You are given an alphanumeric string s. (Alphanumeric string is a string consisting of lowercase English letters and digits). You have to find a permutation of the string where no letter is followed by another letter and no digit is followed by another digit. That is, no two adjacent characters have the same type. Return the reformatted string or return an empty string if it is impossible to reformat the string. ',
  },
  {
    question_title: 'Display Table of Food Orders in a Restaurant',
    question_text:
      "Given\xa0the array orders, which represents the orders that customers have done in a restaurant. More specifically\xa0orders[i]=[customerNamei,tableNumberi,foodItemi] where customerNamei is the name of the customer, tableNumberi\xa0is the table customer sit at, and foodItemi\xa0is the item customer orders. Return the restaurant's “display table”. The “display table” is a table whose row entries denote how many of each food item each table ordered. The first column is the table number and the remaining columns correspond to each food item in alphabetical order. The first row should be a header whose first column is “Table”, followed by the names of the food items. Note that the customer names are not part of the table. Additionally, the rows should be sorted in numerically increasing order. ",
  },
  {
    question_title: 'Minimum Number of Frogs Croaking',
    question_text:
      "You are given the string croakOfFrogs, which represents a combination of the string \"croak\" from different frogs, that is, multiple frogs can croak at the same time, so multiple \"croak\" are mixed. Return the minimum number of different frogs to finish all the croaks in the given string. A valid \"croak\" means a frog is printing five letters 'c', 'r', 'o', 'a', and 'k' sequentially. The frogs have to print all five letters to finish a croak. If the given string is not a combination of a valid \"croak\" return -1. ",
  },
  {
    question_title: 'Build Array Where You Can Find The Maximum Exactly K Comparisons',
    question_text:
      'You are given three integers n, m and k. Consider the following algorithm to find the maximum element of an array of positive integers: You should build the array arr which has the following properties: Return the number of ways to build the array arr under the mentioned conditions. As the answer may grow large, the answer must be computed modulo 109 + 7. ',
  },
  {
    question_title: 'Maximum Score After Splitting a String',
    question_text:
      'Given a\xa0string s\xa0of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring). The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring. ',
  },
  {
    question_title: 'Maximum Points You Can Obtain from Cards',
    question_text:
      'There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array cardPoints. In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards. Your score is the sum of the points of the cards you have taken. Given the integer array cardPoints and the integer k, return the maximum score you can obtain. ',
  },
  {
    question_title: 'Diagonal Traverse II',
    question_text:
      'Given a 2D integer array nums, return all elements of nums in diagonal order as shown in the below images. ',
  },
  {
    question_title: 'Consecutive Characters',
    question_text:
      'The power of the string is the maximum length of a non-empty substring that contains only one unique character. Given a string s, return the power of s. ',
  },
  {
    question_title: 'Simplified Fractions',
    question_text:
      'Given an integer n, return a list of all simplified fractions between 0 and 1 (exclusive) such that the denominator is less-than-or-equal-to n. You can return the answer in any order. ',
  },
  {
    question_title: 'Count Good Nodes in Binary Tree',
    question_text:
      'Given a binary tree root, a node X in the tree is named\xa0good if in the path from root to X there are no nodes with a value greater than X. Return the number of good nodes in the binary tree. ',
  },
  {
    question_title: 'Form Largest Integer With Digits That Add up to Target',
    question_text:
      'Given an array of integers cost and an integer target, return the maximum integer you can paint under the following rules: Since the answer may be very large, return it as a string. If there is no way to paint any integer given the condition, return "0". ',
  },
  {
    question_title: 'Destination City',
    question_text:
      'You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city. It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city. ',
  },
  {
    question_title: "Check If All 1's Are at Least Length K Places Away",
    question_text:
      "Given an binary array nums and an integer k, return true if all 1's are at least k places away from each other, otherwise return false. ",
  },
  {
    question_title: 'Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit',
    question_text:
      'Given an array of integers nums and an integer limit, return the size of the longest non-empty subarray such that the absolute difference between any two elements of this subarray is less than or equal to limit. ',
  },
  {
    question_title: 'Find the Kth Smallest Sum of a Matrix With Sorted Rows',
    question_text:
      'You are given an m x n matrix mat that has its rows sorted in non-decreasing order and an integer k. You are allowed to choose exactly one element from each row to form an array. Return the kth smallest array sum among all possible arrays. ',
  },
  {
    question_title: 'Build an Array With Stack Operations',
    question_text:
      'You are given an array target and an integer n. In each iteration, you will read a number from list = [1, 2, 3, ..., n]. Build the target array using the following operations: Return a list of the operations needed to build target. The test cases are generated so that the answer is unique. ',
  },
  {
    question_title: 'Count Triplets That Can Form Two Arrays of Equal XOR',
    question_text:
      "Given an array of integers arr. We want to select three indices i, j and k where (0 <= i < j <= k < arr.length). Let's define a and b as follows: Note that ^ denotes the bitwise-xor operation. Return the number of triplets (i, j and k) Where a == b. ",
  },
  {
    question_title: 'Minimum Time to Collect All Apples in a Tree',
    question_text:
      'Given an undirected tree consisting of n vertices numbered from 0 to n-1, which has some apples in their vertices. You spend 1 second to walk over one edge of the tree. Return the minimum time in seconds you have to spend to collect all apples in the tree, starting at vertex 0 and coming back to this vertex. The edges of the undirected tree are given in the array edges, where edges[i] = [ai, bi] means that exists an edge connecting the vertices ai and bi. Additionally, there is a boolean array hasApple, where hasApple[i] = true means that vertex i has an apple; otherwise, it does not have any apple. ',
  },
  {
    question_title: 'Number of Ways of Cutting a Pizza',
    question_text:
      "Given a rectangular pizza represented as a rows x cols\xa0matrix containing the following characters: 'A' (an apple) and '.' (empty cell) and given the integer k. You have to cut the pizza into k pieces using k-1 cuts. For each cut you choose the direction: vertical or horizontal, then you choose a cut position at the cell boundary and cut the pizza into two pieces. If you cut the pizza vertically, give the left part of the pizza to a person. If you cut the pizza horizontally, give the upper part of the pizza to a person. Give the last piece of pizza to the last person. Return the number of ways of cutting the pizza such that each piece contains at least one apple.\xa0Since the answer can be a huge number, return this modulo 10^9 + 7. ",
  },
  {
    question_title: 'Make Two Arrays Equal by Reversing Sub-arrays',
    question_text:
      'You are given two integer arrays of equal length target and arr. In one step, you can select any non-empty sub-array of arr and reverse it. You are allowed to make any number of steps. Return true if you can make arr equal to target\xa0or false otherwise. ',
  },
  {
    question_title: 'Check If a String Contains All Binary Codes of Size K',
    question_text:
      'Given a binary string s and an integer k, return true if every binary code of length k is a substring of s. Otherwise, return false. ',
  },
  {
    question_title: 'Course Schedule IV',
    question_text:
      'There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course ai first if you want to take course bi. Prerequisites can also be indirect. If course a is a prerequisite of course b, and course b is a prerequisite of course c, then course a is a prerequisite of course c. You are also given an array queries where queries[j] = [uj, vj]. For the jth query, you should answer whether course uj is a prerequisite of course vj or not. Return a boolean array answer, where answer[j] is the answer to the jth query. ',
  },
  {
    question_title: 'Cherry Pickup II',
    question_text:
      'You are given a rows x cols matrix grid representing a field of cherries where grid[i][j] represents the number of cherries that you can collect from the (i, j) cell. You have two robots that can collect cherries for you: Return the maximum number of cherries collection using both robots by following the rules below: ',
  },
  {
    question_title: 'Number of Students Doing Homework at a Given Time',
    question_text:
      'Given two integer arrays startTime and endTime and given an integer queryTime. The ith student started doing their homework at the time startTime[i] and finished it at time endTime[i]. Return the number of students doing their homework at time queryTime. More formally, return the number of students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive. ',
  },
  {
    question_title: 'Rearrange Words in a Sentence',
    question_text:
      'Given a sentence\xa0text (A\xa0sentence\xa0is a string of space-separated words) in the following format: Your task is to rearrange the words in text such that\xa0all words are rearranged in an increasing order of their lengths. If two words have the same length, arrange them in their original order. Return the new text\xa0following the format shown above. ',
  },
  {
    question_title: 'People Whose List of Favorite Companies Is Not a Subset of Another List',
    question_text:
      'Given the array favoriteCompanies where favoriteCompanies[i] is the list of favorites companies for the ith person (indexed from 0). Return the indices of people whose list of favorite companies is not a subset of any other list of favorites companies. You must return the indices in increasing order. ',
  },
  {
    question_title: 'Maximum Number of Darts Inside of a Circular Dartboard',
    question_text:
      'Alice is throwing n darts on a very large wall. You are given an array darts where darts[i] = [xi, yi] is the position of the ith dart that Alice threw on the wall. Bob knows the positions of the n darts on the wall. He wants to place a dartboard of radius r on the wall so that the maximum number of darts that Alice throws lies on the dartboard. Given the integer r, return the maximum number of darts that can lie on the dartboard. ',
  },
  {
    question_title: 'Check If a Word Occurs As a Prefix of Any Word in a Sentence',
    question_text:
      'Given a sentence that consists of some words separated by a single space, and a searchWord, check if searchWord is a prefix of any word in sentence. Return the index of the word in sentence (1-indexed) where searchWord is a prefix of this word. If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1. A prefix of a string s is any leading contiguous substring of s. ',
  },
  {
    question_title: 'Maximum Number of Vowels in a Substring of Given Length',
    question_text:
      "Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k. Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'. ",
  },
  {
    question_title: 'Pseudo-Palindromic Paths in a Binary Tree',
    question_text:
      'Given a binary tree where node values are digits from 1 to 9. A path in the binary tree is said to be pseudo-palindromic if at least one permutation of the node values in the path is a palindrome. Return the number of pseudo-palindromic paths going from the root node to leaf nodes. ',
  },
  {
    question_title: 'Max Dot Product of Two Subsequences',
    question_text:
      'Given two arrays nums1\xa0and nums2. Return the maximum dot product\xa0between\xa0non-empty subsequences of nums1 and nums2 with the same length. A subsequence of a array is a new array which is formed from the original array by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie,\xa0[2,3,5]\xa0is a subsequence of\xa0[1,2,3,4,5]\xa0while [1,5,3]\xa0is not). ',
  },
  {
    question_title: 'Final Prices With a Special Discount in a Shop',
    question_text:
      'Given the array prices where prices[i] is the price of the ith item in a shop. There is a special discount for items in the shop, if you buy the ith item, then you will receive a discount equivalent to prices[j] where j is the minimum\xa0index such that j > i and prices[j] <= prices[i], otherwise, you will not receive any discount at all. Return an array where the ith element is the final price you will pay for the ith item of the shop considering the special discount. ',
  },
  {
    question_title: 'Allocate Mailboxes',
    question_text:
      'Given the array houses where houses[i] is the location of the ith house along a street and an integer k, allocate k mailboxes in the street. Return the minimum total distance between each house and its nearest mailbox. The test cases are generated so that the answer fits in a 32-bit integer. ',
  },
  {
    question_title: 'Subrectangle Queries',
    question_text:
      'Implement the class SubrectangleQueries\xa0which receives a rows x cols rectangle as a matrix of integers in the constructor and supports two methods: 1.\xa0updateSubrectangle(int row1, int col1, int row2, int col2, int newValue) 2.\xa0getValue(int row, int col) ',
  },
  {
    question_title: 'Find Two Non-overlapping Sub-arrays Each With Target Sum',
    question_text:
      'You are given an array of integers arr and an integer target. You have to find two non-overlapping sub-arrays of arr each with a sum equal target. There can be multiple answers so you have to find an answer where the sum of the lengths of the two sub-arrays is minimum. Return the minimum sum of the lengths of the two required sub-arrays, or return -1 if you cannot find such two sub-arrays. ',
  },
  {
    question_title: 'Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts',
    question_text:
      'You are given a rectangular cake of size h x w and two arrays of integers horizontalCuts and verticalCuts where: Return the maximum area of a piece of cake after you cut at each horizontal and vertical position provided in the arrays horizontalCuts and verticalCuts. Since the answer can be a large number, return this modulo 109 + 7. ',
  },
  {
    question_title: 'Reorder Routes to Make All Paths Lead to the City Zero',
    question_text:
      "There are n cities numbered from 0 to n - 1 and n - 1 roads such that there is only one way to travel between two different cities (this network form a tree). Last year, The ministry of transport decided to orient the roads in one direction because they are too narrow. Roads are represented by connections where connections[i] = [ai, bi] represents a road from city ai to city bi. This year, there will be a big event in the capital (city 0), and many people want to travel to this city. Your task consists of reorienting some roads such that each city can visit the city 0. Return the minimum number of edges changed. It's guaranteed that each city can reach city 0 after reorder. ",
  },
  {
    question_title: 'Probability of a Two Boxes Having The Same Number of Distinct Balls',
    question_text:
      'Given 2n balls of k distinct colors. You will be given an integer array balls of size k where balls[i] is the number of balls of color i. All the balls will be shuffled uniformly at random, then we will distribute the first n balls to the first box and the remaining n balls to the other box (Please read the explanation of the second example carefully). Please note that the two boxes are considered different. For example, if we have two balls of colors a and b, and two boxes [] and (), then the distribution [a] (b) is considered different than the distribution [b] (a) (Please read the explanation of the first example carefully). Return the probability that the two boxes have the same number of distinct balls. Answers within 10-5 of the actual value will be accepted as correct. ',
  },
  {
    question_title: 'Shuffle the Array',
    question_text:
      'Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn]. Return the array in the form [x1,y1,x2,y2,...,xn,yn]. ',
  },
  {
    question_title: 'The k Strongest Values in an Array',
    question_text:
      'Given an array of integers arr and an integer k. A value arr[i] is said to be stronger than a value arr[j] if |arr[i] - m| > |arr[j] - m| where m is the median of the array.\nIf |arr[i] - m| == |arr[j] - m|, then arr[i] is said to be stronger than arr[j] if arr[i] > arr[j]. Return a list of the strongest k values in the array. return the answer in any arbitrary order. Median is the middle value in an ordered integer list. More formally, if the length of the list is n, the median is the element in position ((n - 1) / 2) in the sorted list (0-indexed). ',
  },
  {
    question_title: 'Design Browser History',
    question_text:
      'You have a browser of one tab where you start on the homepage and you can visit another url, get back in the history number of steps or move forward in the history number of steps. Implement the BrowserHistory class:  Example:  Constraints:',
  },
  {
    question_title: 'Paint House III',
    question_text:
      'There is a row of m houses in a small city, each house must be painted with one of the n colors (labeled from 1 to n), some houses that have been painted last summer should not be painted again. A neighborhood is a maximal group of continuous houses that are painted with the same color. Given an array houses, an m x n matrix cost and an integer target where: Return the minimum cost of painting all the remaining houses in such a way that there are exactly target neighborhoods. If it is not possible, return -1. ',
  },
  {
    question_title: 'Average Salary Excluding the Minimum and Maximum Salary',
    question_text:
      'You are given an array of unique integers salary where salary[i] is the salary of the ith employee. Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted. ',
  },
  {
    question_title: 'The kth Factor of n',
    question_text:
      'You are given two positive integers n and k. A factor of an integer n is defined as an integer i where n % i == 0. Consider a list of all factors of n sorted in ascending order, return the kth factor in this list or return -1 if n has less than k factors. ',
  },
  {
    question_title: "Longest Subarray of 1's After Deleting One Element",
    question_text:
      "Given a binary array nums, you should delete one element from it. Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray. ",
  },
  {
    question_title: 'Parallel Courses II',
    question_text:
      'You are given an integer n, which indicates that there are n courses labeled from 1 to n. You are also given an array relations where relations[i] = [prevCoursei, nextCoursei], representing a prerequisite relationship between course prevCoursei and course nextCoursei: course prevCoursei has to be taken before course nextCoursei. Also, you are given the integer k. In one semester, you can take at most k courses as long as you have taken all the prerequisites in the previous semester for the courses you are taking. Return the minimum number of semesters needed to take all courses. The testcases will be generated such that it is possible to take every course. ',
  },
  {
    question_title: 'Running Sum of 1d Array',
    question_text:
      'Given an array nums. We define a running sum of an array as\xa0runningSum[i] = sum(nums[0]…nums[i]). Return the running sum of nums. ',
  },
  {
    question_title: 'Least Number of Unique Integers after K Removals',
    question_text:
      'Given an array of integers\xa0arr\xa0and an integer k.\xa0Find the least number of unique integers\xa0after removing exactly k elements. ',
  },
  {
    question_title: 'Minimum Number of Days to Make m Bouquets',
    question_text:
      'You are given an integer array bloomDay, an integer m and an integer k. You want to make m bouquets. To make a bouquet, you need to use k adjacent flowers from the garden. The garden consists of n flowers, the ith flower will bloom in the bloomDay[i] and then can be used in exactly one bouquet. Return the minimum number of days you need to wait to be able to make m bouquets from the garden. If it is impossible to make m bouquets return -1. ',
  },
  {
    question_title: 'XOR Operation in an Array',
    question_text:
      'You are given an integer n and an integer start. Define an array nums where nums[i] = start + 2 * i (0-indexed) and n == nums.length. Return the bitwise XOR of all elements of nums. ',
  },
  {
    question_title: 'Making File Names Unique',
    question_text:
      'Given an array of strings names of size n. You will create n folders in your file system such that, at the ith minute, you will create a folder with the name names[i]. Since two files cannot have the same name, if you enter a folder name that was previously used, the system will have a suffix addition to its name in the form of (k), where, k is the smallest positive integer such that the obtained name remains unique. Return an array of strings of length n where ans[i] is the actual name the system will assign to the ith folder when you create it. ',
  },
  {
    question_title: 'Avoid Flood in The City',
    question_text:
      'Your country has an infinite number of lakes. Initially, all the lakes are empty, but when it rains over the nth lake, the nth lake becomes full of water. If it rains over a lake that is full of water, there will be a flood. Your goal is to avoid floods in any lake. Given an integer array rains where: Return an array ans where: If there are multiple valid answers return any of them. If it is impossible to avoid flood return an empty array. Notice that if you chose to dry a full lake, it becomes empty, but if you chose to dry an empty lake, nothing changes. ',
  },
  {
    question_title: 'Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree',
    question_text:
      "Given a weighted undirected connected graph with n\xa0vertices numbered from 0 to n - 1,\xa0and an array edges\xa0where edges[i] = [ai, bi, weighti] represents a bidirectional and weighted edge between nodes\xa0ai\xa0and bi. A minimum spanning tree (MST) is a subset of the graph's edges that connects all vertices without cycles\xa0and with the minimum possible total edge weight. Find all the critical and pseudo-critical edges in the given graph's minimum spanning tree (MST). An MST edge whose deletion from the graph would cause the MST weight to increase is called a\xa0critical edge. On\xa0the other hand, a pseudo-critical edge is that which can appear in some MSTs but not all. Note that you can return the indices of the edges in any order. ",
  },
  {
    question_title: 'Range Sum of Sorted Subarray Sums',
    question_text:
      'You are given the array nums consisting of n positive integers. You computed the sum of all non-empty continuous subarrays from the array and then sorted them in non-decreasing order, creating a new array of n * (n + 1) / 2 numbers. Return the sum of the numbers from index left to index right (indexed from 1), inclusive, in the new array. Since the answer can be a huge number return it modulo 109 + 7. ',
  },
  {
    question_title: 'Minimum Difference Between Largest and Smallest Value in Three Moves',
    question_text:
      'You are given an integer array nums. In one move, you can choose one element of nums and change it by any value. Return the minimum difference between the largest and smallest value of nums after performing at most three moves. ',
  },
  {
    question_title: 'Stone Game IV',
    question_text:
      "Alice and Bob take turns playing a game, with Alice starting first. Initially, there are n stones in a pile. On each player's turn, that player makes a move consisting of removing any non-zero square number of stones in the pile. Also, if a player cannot make a move, he/she loses the game. Given a positive integer n, return true if and only if Alice wins the game otherwise return false, assuming both players play optimally. ",
  },
  {
    question_title: 'Path Crossing',
    question_text:
      "Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path. Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise. ",
  },
  {
    question_title: 'Check If Array Pairs Are Divisible by k',
    question_text:
      'Given an array of integers arr of even length n and an integer k. We want to divide the array into exactly n / 2 pairs such that the sum of each pair is divisible by k. Return true If you can find a way to do that or false otherwise. ',
  },
  {
    question_title: 'Number of Subsequences That Satisfy the Given Sum Condition',
    question_text:
      'You are given an array of integers nums and an integer target. Return the number of non-empty subsequences of nums such that the sum of the minimum and maximum element on it is less or equal to target. Since the answer may be too large, return it modulo 109 + 7. ',
  },
  {
    question_title: 'Max Value of Equation',
    question_text:
      'You are given an array points containing the coordinates of points on a 2D plane, sorted by the x-values, where points[i] = [xi, yi] such that xi < xj for all 1 <= i < j <= points.length. You are also given an integer k. Return the maximum value of the equation yi + yj + |xi - xj| where |xi - xj| <= k and 1 <= i < j <= points.length. It is guaranteed that there exists at least one pair of points that satisfy the constraint |xi - xj| <= k. ',
  },
  {
    question_title: 'Can Make Arithmetic Progression From Sequence',
    question_text:
      'A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same. Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false. ',
  },
  {
    question_title: 'Last Moment Before All Ants Fall Out of a Plank',
    question_text:
      'We have a wooden plank of the length n units. Some ants are walking on the plank, each ant moves with a speed of 1 unit per second. Some of the ants move to the left, the other move to the right. When two ants moving in two different directions meet at some point, they change their directions and continue moving again. Assume changing directions does not take any additional time. When an ant reaches one end of the plank at a time t, it falls out of the plank immediately. Given an integer n and two integer arrays left and right, the positions of the ants moving to the left and the right, return the moment when the last ant(s) fall out of the plank. ',
  },
  {
    question_title: 'Count Submatrices With All Ones',
    question_text:
      'Given an m x n binary matrix mat, return the number of submatrices that have all ones. ',
  },
  {
    question_title: 'Minimum Possible Integer After at Most K Adjacent Swaps On Digits',
    question_text:
      'You are given a string num representing the digits of a very large integer and an integer k. You are allowed to swap any two adjacent digits of the integer at most k times. Return the minimum integer you can obtain also as a string. ',
  },
  {
    question_title: 'Count Odd Numbers in an Interval Range',
    question_text:
      'Given two non-negative integers low and high. Return the count of odd numbers between low and high\xa0(inclusive). ',
  },
  {
    question_title: 'Number of Sub-arrays With Odd Sum',
    question_text:
      'Given an array of integers arr, return the number of subarrays with an odd sum. Since the answer can be very large, return it modulo 109 + 7. ',
  },
  {
    question_title: 'Number of Good Ways to Split a String',
    question_text:
      'You are given a string s. A split is called good if you can split s into two non-empty strings sleft and sright where their concatenation is equal to s (i.e., sleft + sright = s) and the number of distinct letters in sleft and sright is the same. Return the number of good splits you can make in s. ',
  },
  {
    question_title: 'Minimum Number of Increments on Subarrays to Form a Target Array',
    question_text:
      'You are given an integer array target. You have an integer array initial of the same size as target with all elements initially zeros. In one operation you can choose any subarray from initial and increment each value by one. Return the minimum number of operations to form a target array from initial. The test cases are generated so that the answer fits in a 32-bit integer. ',
  },
  {
    question_title: 'Number of Good Pairs',
    question_text:
      'Given an array of integers nums, return the number of good pairs. A pair (i, j) is called good if nums[i] == nums[j] and i < j. ',
  },
  {
    question_title: 'Number of Substrings With Only 1s',
    question_text:
      "Given a binary string s, return the number of substrings with all characters 1's. Since the answer may be too large, return it modulo 109 + 7. ",
  },
  {
    question_title: 'String Compression II',
    question_text:
      'Run-length encoding is a string compression method that works by\xa0replacing consecutive identical characters (repeated 2 or more times) with the concatenation of the character and the number marking the count of the characters (length of the run). For example, to compress the string\xa0"aabccc"\xa0we replace "aa"\xa0by\xa0"a2"\xa0and replace "ccc"\xa0by\xa0"c3". Thus the compressed string becomes "a2bc3". Notice that in this problem, we are not adding\xa0\'1\'\xa0after single characters. Given a\xa0string s\xa0and an integer k. You need to delete at most\xa0k characters from\xa0s\xa0such that the run-length encoded version of s\xa0has minimum length. Find the minimum length of the run-length encoded\xa0version of s after deleting at most k characters. ',
  },
  {
    question_title: 'Best Position for a Service Centre',
    question_text:
      'A delivery company wants to build a new service center in a new city. The company knows the positions of all the customers in this city on a 2D-Map and wants to build the new center in a position such that the sum of the euclidean distances to all customers is minimum. Given an array positions where positions[i] = [xi, yi] is the position of the ith customer on the map, return the minimum sum of the euclidean distances to all customers. In other words, you need to choose the position of the service center [xcentre, ycentre] such that the following formula is minimized: Answers within 10-5 of the actual value will be accepted. ',
  },
  {
    question_title: 'Water Bottles',
    question_text:
      'There are numBottles water bottles that are initially full of water. You can exchange numExchange empty water bottles from the market with one full water bottle. The operation of drinking a full water bottle turns it into an empty bottle. Given the two integers numBottles and numExchange, return the maximum number of water bottles you can drink. ',
  },
  {
    question_title: 'Number of Nodes in the Sub-Tree With the Same Label',
    question_text:
      'You are given a tree (i.e. a connected, undirected graph that has no cycles) consisting of n nodes numbered from 0 to n - 1 and exactly n - 1 edges. The root of the tree is the node 0, and each node of the tree has a label which is a lower-case character given in the string labels (i.e. The node with the number i has the label labels[i]). The edges array is given on the form edges[i] = [ai, bi], which means there is an edge between nodes ai and bi in the tree. Return an array of size n where ans[i] is the number of nodes in the subtree of the ith node which have the same label as node i. A subtree of a tree T is the tree consisting of a node in T and all of its descendant nodes. ',
  },
  {
    question_title: 'Maximum Number of Non-Overlapping Substrings',
    question_text:
      'Given a string s\xa0of lowercase letters, you need to find the maximum number of non-empty substrings of\xa0s\xa0that meet the following conditions: Find the maximum number of substrings that meet the above conditions. If there are multiple solutions with the same number of substrings, return the one with minimum total length.\xa0It can be shown that there exists a unique solution of minimum total length. Notice that you can return the substrings in any order. ',
  },
  {
    question_title: 'Find a Value of a Mysterious Function Closest to Target',
    question_text:
      ' Winston was given the above mysterious function func. He has an integer array arr and an integer target and he wants to find the values l and r that make the value |func(arr, l, r) - target| minimum possible. Return the minimum possible value of |func(arr, l, r) - target|. Notice that func should be called with the values l and r where 0 <= l, r < arr.length. ',
  },
  {
    question_title: 'Kth Missing Positive Number',
    question_text:
      'Given an array arr\xa0of positive integers\xa0sorted in a strictly increasing order, and an integer k. Find the kth\xa0positive integer that is missing from this array. ',
  },
  {
    question_title: 'Can Convert String in K Moves',
    question_text:
      "Given two strings\xa0s\xa0and\xa0t, your goal is to convert\xa0s\xa0into\xa0t\xa0in\xa0k\xa0moves or less. During the\xa0ith\xa0(1 <= i <= k)\xa0move you can: Shifting a character means replacing it by the next letter in the alphabet\xa0(wrapping around so that\xa0'z'\xa0becomes\xa0'a'). Shifting a character by\xa0i\xa0means applying the shift operations\xa0i\xa0times. Remember that any index\xa0j\xa0can be picked at most once. Return\xa0true\xa0if it's possible to convert\xa0s\xa0into\xa0t\xa0in no more than\xa0k\xa0moves, otherwise return\xa0false. ",
  },
  {
    question_title: 'Minimum Insertions to Balance a Parentheses String',
    question_text:
      "Given a parentheses string s containing only the characters '(' and ')'. A parentheses string is balanced if: In other words, we treat '(' as an opening parenthesis and '))' as a closing parenthesis. You can insert the characters '(' and ')' at any position of the string to balance it if needed. Return the minimum number of insertions needed to make s balanced. ",
  },
  {
    question_title: 'Maximum Number of Non-Overlapping Subarrays With Sum Equals Target',
    question_text:
      'Given an array nums and an integer target, return the maximum number of non-empty non-overlapping subarrays such that the sum of values in each subarray is equal to target. ',
  },
  {
    question_title: 'Shuffle String',
    question_text:
      'You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string. Return the shuffled string. ',
  },
  {
    question_title: 'Minimum Suffix Flips',
    question_text:
      "You are given a 0-indexed binary string target of length n. You have another binary string s of length n that is initially set to all zeros. You want to make s equal to target. In one operation, you can pick an index i where 0 <= i < n and flip all bits in the inclusive range [i, n - 1]. Flip means changing '0' to '1' and '1' to '0'. Return the minimum number of operations needed to make s equal to target. ",
  },
  {
    question_title: 'Number of Good Leaf Nodes Pairs',
    question_text:
      'You are given the root of a binary tree and an integer distance. A pair of two different leaf nodes of a binary tree is said to be good if the length of the shortest path between them is less than or equal to distance. Return the number of good leaf node pairs in the tree. ',
  },
  {
    question_title: 'Count Good Triplets',
    question_text:
      'Given an array of integers arr, and three integers\xa0a,\xa0b\xa0and\xa0c. You need to find the number of good triplets. A triplet (arr[i], arr[j], arr[k])\xa0is good if the following conditions are true: Where |x| denotes the absolute value of x. Return the number of good triplets. ',
  },
  {
    question_title: 'Find the Winner of an Array Game',
    question_text:
      'Given an integer array arr of distinct integers and an integer k. A game will be played between the first two elements of the array (i.e. arr[0] and arr[1]). In each round of the game, we compare arr[0] with arr[1], the larger integer wins and remains at position 0, and the smaller integer moves to the end of the array. The game ends when an integer wins k consecutive rounds. Return the integer which will win the game. It is guaranteed that there will be a winner of the game. ',
  },
  {
    question_title: 'Minimum Swaps to Arrange a Binary Grid',
    question_text:
      'Given an n x n binary grid, in one step you can choose two adjacent rows of the grid and swap them. A grid is said to be valid if all the cells above the main diagonal are zeros. Return the minimum number of steps needed to make the grid valid, or -1 if the grid cannot be valid. The main diagonal of a grid is the diagonal that starts at cell (1, 1) and ends at cell (n, n). ',
  },
  {
    question_title: 'Get the Maximum Score',
    question_text:
      'You are given two sorted arrays of distinct integers nums1 and nums2. A valid path is defined as follows: The score is defined as the sum of uniques values in a valid path. Return the maximum score you can obtain of all possible valid paths. Since the answer may be too large, return it modulo 109 + 7. ',
  },
  {
    question_title: 'Thousand Separator',
    question_text:
      'Given an integer n, add a dot (".") as the thousands separator and return it in string format. ',
  },
  {
    question_title: 'Minimum Numbers of Function Calls to Make Target Array',
    question_text:
      'You are given an integer array nums. You have an integer array arr of the same length with all values set to 0 initially. You also have the following modify function: You want to use the modify function to covert arr to nums using the minimum number of calls. Return the minimum number of function calls to make nums from arr. The test cases are generated so that the answer fits in a 32-bit signed integer. ',
  },
  {
    question_title: 'Detect Cycles in 2D Grid',
    question_text:
      'Given a 2D array of characters grid of size m x n, you need to find if there exists any cycle consisting of the same value in grid. A cycle is a path of length 4 or more in the grid that starts and ends at the same cell. From a given cell, you can move to one of the cells adjacent to it - in one of the four directions (up, down, left, or right), if it has the same value of the current cell. Also, you cannot move to the cell that you visited in your last move. For example, the cycle (1, 1) -> (1, 2) -> (1, 1) is invalid because from (1, 2) we visited (1, 1) which was the last visited cell. Return true if any cycle of the same value exists in grid, otherwise, return false. ',
  },
  {
    question_title: 'Make The String Great',
    question_text:
      "Given a string s of lower and upper case English letters. A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where: To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good. Return the string after making it good. The answer is guaranteed to be unique under the given constraints. Notice that an empty string is also good. ",
  },
  {
    question_title: 'Find Kth Bit in Nth Binary String',
    question_text:
      'Given two positive integers n and k, the binary string Sn is formed as follows: Where + denotes the concatenation operation, reverse(x) returns the reversed string x, and invert(x) inverts all the bits in x (0 changes to 1 and 1 changes to 0). For example, the first four strings in the above sequence are: Return the kth bit in Sn. It is guaranteed that k is valid for the given n. ',
  },
  {
    question_title: 'Find Longest Awesome Substring',
    question_text:
      'You are given a string s. An awesome substring is a non-empty substring of s such that we can make any number of swaps in order to make it a palindrome. Return the length of the maximum length awesome substring of s. ',
  },
  {
    question_title: 'Minimum Cost to Cut a Stick',
    question_text:
      'Given a wooden stick of length n units. The stick is labelled from 0 to n. For example, a stick of length 6 is labelled as follows: Given an integer array cuts where cuts[i] denotes a position you should perform a cut at. You should perform the cuts in order, you can change the order of the cuts as you wish. The cost of one cut is the length of the stick to be cut, the total cost is the sum of costs of all cuts. When you cut a stick, it will be split into two smaller sticks (i.e. the sum of their lengths is the length of the stick before the cut). Please refer to the first example for a better explanation. Return the minimum total cost of the cuts. ',
  },
  {
    question_title: 'Minimum Operations to Make Array Equal',
    question_text:
      'You have an array arr of length n where arr[i] = (2 * i) + 1 for all valid values of i (i.e.,\xa00 <= i < n). In one operation, you can select two indices x and y where 0 <= x, y < n and subtract 1 from arr[x] and add 1 to arr[y] (i.e., perform arr[x] -=1 and arr[y] += 1). The goal is to make all the elements of the array equal. It is guaranteed that all the elements of the array can be made equal using some operations. Given an integer n, the length of the array, return the minimum number of operations needed to make all the elements of arr equal. ',
  },
  {
    question_title: 'Magnetic Force Between Two Balls',
    question_text:
      'In the universe Earth C-137, Rick discovered a special form of magnetic force between two balls if they are put in his new invented basket. Rick has n empty baskets, the ith basket is at position[i], Morty has m balls and needs to distribute the balls into the baskets such that the minimum magnetic force between any two balls is maximum. Rick stated that magnetic force between two different balls at positions x and y is |x - y|. Given the integer array position and the integer m. Return the required force. ',
  },
  {
    question_title: 'Minimum Number of Days to Eat N Oranges',
    question_text:
      'There are n oranges in the kitchen and you decided to eat some of these oranges every day as follows: You can only choose one of the actions per day. Given the integer n, return the minimum number of days to eat n oranges. ',
  },
  {
    question_title: 'Matrix Diagonal Sum',
    question_text:
      'Given a\xa0square\xa0matrix\xa0mat, return the sum of the matrix diagonals. Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal. ',
  },
  {
    question_title: 'Number of Ways to Split a String',
    question_text:
      'Given a binary string s, you can split s into 3 non-empty strings s1, s2, and s3 where s1 + s2 + s3 = s. Return the number of ways s can be split such that the number of ones is the same in s1, s2, and s3. Since the answer may be too large, return it modulo 109 + 7. ',
  },
  {
    question_title: 'Shortest Subarray to be Removed to Make Array Sorted',
    question_text:
      'Given an integer array arr, remove a subarray (can be empty) from arr such that the remaining elements in arr are non-decreasing. Return the length of the shortest subarray to remove. A subarray is a contiguous subsequence of the array. ',
  },
  {
    question_title: 'Count All Possible Routes',
    question_text:
      'You are given an array of distinct positive integers locations where locations[i] represents the position of city i. You are also given integers start, finish and fuel representing the starting city, ending city, and the initial amount of fuel you have, respectively. At each step, if you are at city i, you can pick any city j such that j != i and 0 <= j < locations.length and move to city j. Moving from city i to city j reduces the amount of fuel you have by |locations[i] - locations[j]|. Please notice that |x| denotes the absolute value of x. Notice that fuel cannot become negative at any point in time, and that you are allowed to visit any city more than once (including start and finish). Return the count of all possible routes from start to finish. Since the answer may be too large, return it modulo 109 + 7. ',
  },
  {
    question_title: 'Most Visited Sector in  a Circular Track',
    question_text:
      'Given an integer n and an integer array rounds. We have a circular track which consists of n sectors labeled from 1 to n. A marathon will be held on this track, the marathon consists of m rounds. The ith round starts at sector rounds[i - 1] and ends at sector rounds[i]. For example, round 1 starts at sector rounds[0] and ends at sector rounds[1] Return an array of the most visited sectors sorted in ascending order. Notice that you circulate the track in ascending order of sector numbers in the counter-clockwise direction (See the first example). ',
  },
  {
    question_title: 'Maximum Number of Coins You Can Get',
    question_text:
      'There are 3n piles of coins of varying size, you and your friends will take piles of coins as follows: Given an array of integers piles where piles[i] is the number of coins in the ith pile. Return the maximum number of coins that you can have. ',
  },
  {
    question_title: 'Find Latest Group of Size M',
    question_text:
      "Given an array arr that represents a permutation of numbers from 1 to n. You have a binary string of size n that initially has all its bits set to zero. At each step i (assuming both the binary string and arr are 1-indexed) from 1 to n, the bit at position arr[i] is set to 1. You are also given an integer m. Find the latest step at which there exists a group of ones of length m. A group of ones is a contiguous substring of 1's such that it cannot be extended in either direction. Return the latest step at which there exists a group of ones of length exactly m. If no such group exists, return -1. ",
  },
  {
    question_title: 'Stone Game V',
    question_text:
      "There are several stones arranged in a row, and each stone has an associated value which is an integer given in the array stoneValue. In each round of the game, Alice divides the row into two non-empty rows (i.e. left row and right row), then Bob calculates the value of each row which is the sum of the values of all the stones in this row. Bob throws away the row which has the maximum value, and Alice's score increases by the value of the remaining row. If the value of the two rows are equal, Bob lets Alice decide which row will be thrown away. The next round starts with the remaining row. The game ends when there is only one stone remaining. Alice's is initially zero. Return the maximum score that Alice can obtain. ",
  },
  {
    question_title: 'Detect Pattern of Length M Repeated K or More Times',
    question_text:
      'Given an array of positive integers arr, find a pattern of length m that is repeated k or more times. A pattern is a subarray (consecutive sub-sequence) that consists of one or more values, repeated multiple times consecutively without overlapping. A pattern is defined by its length and the number of repetitions. Return true if there exists a pattern of length m that is repeated k or more times, otherwise return false. ',
  },
  {
    question_title: 'Maximum Length of Subarray With Positive Product',
    question_text:
      'Given an array of integers nums, find the maximum length of a subarray where the product of all its elements is positive. A subarray of an array is a consecutive sequence of zero or more values taken out of that array. Return the maximum length of a subarray with positive product. ',
  },
  {
    question_title: 'Minimum Number of Days to Disconnect Island',
    question_text:
      "You are given an m x n binary grid grid where 1 represents land and 0 represents water. An island is a maximal 4-directionally (horizontal or vertical) connected group of 1's. The grid is said to be connected if we have exactly one island, otherwise is said disconnected. In one day, we are allowed to change any single land cell (1) into a water cell (0). Return the minimum number of days to disconnect the grid. ",
  },
  {
    question_title: 'Number of Ways to Reorder Array to Get Same BST',
    question_text:
      'Given an array nums that represents a permutation of integers from 1 to n. We are going to construct a binary search tree (BST) by inserting the elements of nums in order into an initially empty BST. Find the number of different ways to reorder nums so that the constructed BST is identical to that formed from the original array nums. Return the number of ways to reorder nums such that the BST formed is identical to the original BST formed from nums. Since the answer may be very large, return it modulo 109 + 7. ',
  },
  {
    question_title: 'Sum of All Odd Length Subarrays',
    question_text:
      'Given an array of positive integers\xa0arr, calculate the sum of all possible odd-length subarrays. A subarray is a contiguous\xa0subsequence of the array. Return\xa0the sum of all odd-length subarrays of\xa0arr. ',
  },
  {
    question_title: 'Make Sum Divisible by P',
    question_text:
      "Given an array of positive integers nums, remove the smallest subarray (possibly empty) such that the sum of the remaining elements is divisible by p. It is not allowed to remove the whole array. Return the length of the smallest subarray that you need to remove, or -1 if it's impossible. A subarray is defined as a contiguous block of elements in the array. ",
  },
  {
    question_title: 'Maximum Sum Obtained of Any Permutation',
    question_text:
      'We have an array of integers, nums, and an array of requests where requests[i] = [starti, endi]. The ith request asks for the sum of nums[starti] + nums[starti + 1] + ... + nums[endi - 1] + nums[endi]. Both starti and endi are 0-indexed. Return the maximum total sum of all requests among all permutations of nums. Since the answer may be too large, return it modulo 109 + 7. ',
  },
  {
    question_title: 'Strange Printer II',
    question_text:
      'There is a strange printer with the following two special requirements: You are given a m x n matrix targetGrid, where targetGrid[row][col] is the color in the position (row, col) of the grid. Return true if it is possible to print the matrix targetGrid, otherwise, return false. ',
  },
  {
    question_title: "Replace All ?'s to Avoid Consecutive Repeating Characters",
    question_text:
      "Given a string s containing only lowercase English letters and the '?' character, convert all the '?' characters into lowercase letters such that the final string does not contain any consecutive repeating characters. You cannot modify the non '?' characters. It is guaranteed that there are no consecutive repeating characters in the given string except for '?'. Return the final string after all the conversions (possibly zero) have been made. If there is more than one solution, return any of them. It can be shown that an answer is always possible with the given constraints. ",
  },
  {
    question_title: 'Number of Ways Where Square of Number Is Equal to Product of Two Numbers',
    question_text:
      'Given two arrays of integers nums1 and nums2, return the number of triplets formed (type 1 and type 2) under the following rules: ',
  },
  {
    question_title: 'Minimum Time to Make Rope Colorful',
    question_text:
      'Alice has n balloons arranged on a rope. You are given a 0-indexed string colors where colors[i] is the color of the ith balloon. Alice wants the rope to be colorful. She does not want two consecutive balloons to be of the same color, so she asks Bob for help. Bob can remove some balloons from the rope to make it colorful. You are given a 0-indexed integer array neededTime where neededTime[i] is the time (in seconds) that Bob needs to remove the ith balloon from the rope. Return the minimum time Bob needs to make the rope colorful. ',
  },
  {
    question_title: 'Special Positions in a Binary Matrix',
    question_text:
      'Given an m x n binary matrix mat, return the number of special positions in mat. A position (i, j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed). ',
  },
  {
    question_title: 'Count Unhappy Friends',
    question_text:
      'You are given a list of\xa0preferences\xa0for\xa0n\xa0friends, where n is always even. For each person i,\xa0preferences[i]\xa0contains\xa0a list of friends\xa0sorted in the order of preference. In other words, a friend earlier in the list is more preferred than a friend later in the list.\xa0Friends in\xa0each list are\xa0denoted by integers from 0 to n-1. All the friends are divided into pairs.\xa0The pairings are\xa0given in a list\xa0pairs,\xa0where pairs[i] = [xi, yi] denotes xi\xa0is paired with yi and yi is paired with xi. However, this pairing may cause some of the friends to be unhappy.\xa0A friend x\xa0is unhappy if x\xa0is paired with y\xa0and there exists a friend u\xa0who\xa0is paired with v\xa0but: Return the number of unhappy friends. ',
  },
  {
    question_title: 'Min Cost to Connect All Points',
    question_text:
      'You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi]. The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| + |yi - yj|, where |val| denotes the absolute value of val. Return the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points. ',
  },
  {
    question_title: 'Check If String Is Transformable With Substring Sort Operations',
    question_text:
      'Given two strings s and t, transform string s into string t using the following operation any number of times: Return true if it is possible to transform s into t. Otherwise, return false. A substring is a contiguous sequence of characters within a string. ',
  },
  {
    question_title: 'Alert Using Same Key-Card Three or More Times in a One Hour Period',
    question_text:
      'LeetCode company workers use key-cards to unlock office doors. Each time a worker uses their key-card, the security system saves the worker\'s name and the time when it was used. The system emits an alert if any worker uses the key-card three or more times in a one-hour period. You are given a list of strings keyName and keyTime where [keyName[i], keyTime[i]] corresponds to a person\'s name and the time when their key-card was used in a single day. Access times are given in the 24-hour time format "HH:MM", such as "23:51" and "09:49". Return a list of unique worker names who received an alert for frequent keycard use. Sort the names in ascending order alphabetically. Notice that "10:00" - "11:00" is considered to be within a one-hour period, while "22:51" - "23:52" is not considered to be within a one-hour period. ',
  },
  {
    question_title: 'Find Servers That Handled Most Number of Requests',
    question_text:
      'You have k servers numbered from 0 to k-1 that are being used to handle multiple requests simultaneously. Each server has infinite computational capacity but cannot handle more than one request at a time. The requests are assigned to servers according to a specific algorithm: You are given a strictly increasing array arrival of positive integers, where arrival[i] represents the arrival time of the ith request, and another array load, where load[i] represents the load of the ith request (the time it takes to complete). Your goal is to find the busiest server(s). A server is considered busiest if it handled the most number of requests successfully among all the servers. Return a list containing the IDs (0-indexed) of the busiest server(s). You may return the IDs in any order. ',
  },
  {
    question_title: 'Find Valid Matrix Given Row and Column Sums',
    question_text:
      "You are given two arrays rowSum and colSum of non-negative integers where rowSum[i] is the sum of the elements in the ith row and colSum[j] is the sum of the elements of the jth column of a 2D matrix. In other words, you do not know the elements of the matrix, but you do know the sums of each row and column. Find any matrix of non-negative integers of size rowSum.length x colSum.length that satisfies the rowSum and colSum requirements. Return a 2D array representing any matrix that fulfills the requirements. It's guaranteed that at least one matrix that fulfills the requirements exists. ",
  },
  {
    question_title: 'Rearrange Spaces Between Words',
    question_text:
      "You are given a string text of words that are placed among some number of spaces. Each word consists of one or more lowercase English letters and are separated by at least one space. It's guaranteed that text contains at least one word. Rearrange the spaces so that there is an equal number of spaces between every pair of adjacent words and that number is maximized. If you cannot redistribute all the spaces equally, place the extra spaces at the end, meaning the returned string should be the same length as text. Return the string after rearranging the spaces. ",
  },
  {
    question_title: 'Split a String Into the Max Number of Unique Substrings',
    question_text:
      'Given a string\xa0s,\xa0return the maximum\xa0number of unique substrings that the given string can be split into. You can split string\xa0s into any list of\xa0non-empty substrings, where the concatenation of the substrings forms the original string.\xa0However, you must split the substrings such that all of them are unique. A substring is a contiguous sequence of characters within a string. ',
  },
  {
    question_title: 'Maximum Non Negative Product in a Matrix',
    question_text:
      'You are given a m x n matrix grid. Initially, you are located at the top-left corner (0, 0), and in each step, you can only move right or down in the matrix. Among all possible paths starting from the top-left corner (0, 0) and ending in the bottom-right corner (m - 1, n - 1), find the path with the maximum non-negative product. The product of a path is the product of all integers in the grid cells visited along the path. Return the maximum non-negative product modulo 109 + 7. If the maximum product is negative, return -1. Notice that the modulo is performed after getting the maximum product. ',
  },
  {
    question_title: 'Minimum Cost to Connect Two Groups of Points',
    question_text:
      'You are given two groups of points where the first group has size1 points, the second group has size2 points, and size1 >= size2. The cost of the connection between any two points are given in an size1 x size2 matrix where cost[i][j] is the cost of connecting point i of the first group and point j of the second group. The groups are connected if each point in both groups is connected to one or more points in the opposite group. In other words, each point in the first group must be connected to at least one point in the second group, and each point in the second group must be connected to at least one point in the first group. Return the minimum cost it takes to connect the two groups. ',
  },
  {
    question_title: 'Crawler Log Folder',
    question_text:
      'The Leetcode file system keeps a log each time some user performs a change folder operation. The operations are described below: You are given a list of strings logs where logs[i] is the operation performed by the user at the ith step. The file system starts in the main folder, then the operations in logs are performed. Return the minimum number of operations needed to go back to the main folder after the change folder operations. ',
  },
  {
    question_title: 'Maximum Profit of Operating a Centennial Wheel',
    question_text:
      'You are the operator of a Centennial Wheel that has four gondolas, and each gondola has room for up to four people. You have the ability to rotate the gondolas counterclockwise, which costs you runningCost dollars. You are given an array customers of length n where customers[i] is the number of new customers arriving just before the ith rotation (0-indexed). This means you must rotate the wheel i times before the customers[i] customers arrive. You cannot make customers wait if there is room in the gondola. Each customer pays boardingCost dollars when they board on the gondola closest to the ground and will exit once that gondola reaches the ground again. You can stop the wheel at any time, including before serving all customers. If you decide to stop serving customers, all subsequent rotations are free in order to get all the customers down safely. Note that if there are currently more than four customers waiting at the wheel, only four will board the gondola, and the rest will wait for the next rotation. Return the minimum number of rotations you need to perform to maximize your profit. If there is no scenario where the profit is positive, return -1. ',
  },
  {
    question_title: 'Throne Inheritance',
    question_text:
      "A kingdom consists of a king, his children, his grandchildren, and so on. Every once in a while, someone in the family dies or a child is born. The kingdom has a well-defined order of inheritance that consists of the king as the first member. Let's define the recursive function Successor(x, curOrder), which given a person x and the inheritance order so far, returns who should be the next person after x in the order of inheritance. For example, assume we have a kingdom that consists of the king, his children Alice and Bob (Alice is older than Bob), and finally Alice's son Jack. Using the above function, we can always obtain a unique order of inheritance. Implement the ThroneInheritance class: ",
  },
  {
    question_title: 'Maximum Number of Achievable Transfer Requests',
    question_text:
      "We have n buildings numbered from 0 to n - 1. Each building has a number of employees. It's transfer season, and some employees want to change the building they reside in. You are given an array requests where requests[i] = [fromi, toi] represents an employee's request to transfer from building fromi to building toi. All buildings are full, so a list of requests is achievable only if for each building, the net change in employee transfers is zero. This means the number of employees leaving is equal to the number of employees moving in. For example if n = 3 and two employees are leaving building 0, one is leaving building 1, and one is leaving building 2, there should be two employees moving to building 0, one employee moving to building 1, and one employee moving to building 2. Return the maximum number of achievable requests. ",
  },
  {
    question_title: 'Number of Sets of K Non-Overlapping Line Segments',
    question_text:
      'Given n points on a 1-D plane, where the ith point (from 0 to n-1) is at x = i, find the number of ways we can draw exactly k non-overlapping line segments such that each segment covers two or more points. The endpoints of each segment must have integral coordinates. The k line segments do not have to cover all n points, and they are allowed to share endpoints. Return the number of ways we can draw k non-overlapping line segments. Since this number can be huge, return it modulo 109 + 7. ',
  },
  {
    question_title: 'Coordinate With Maximum Network Quality',
    question_text:
      'You are given an array of network towers towers, where towers[i] = [xi, yi, qi] denotes the ith network tower with location (xi, yi) and quality factor qi. All the coordinates are integral coordinates on the X-Y plane, and the distance between the two coordinates is the Euclidean distance. You are also given an integer radius where a tower is reachable if the distance is less than or equal to radius. Outside that distance, the signal becomes garbled, and the tower is not reachable. The signal quality of the ith tower at a coordinate (x, y) is calculated with the formula ⌊qi / (1 + d)⌋, where d is the distance between the tower and the coordinate. The network quality at a coordinate is the sum of the signal qualities from all the reachable towers. Return the array [cx, cy] representing the integral coordinate (cx, cy) where the network quality is maximum. If there are multiple coordinates with the same network quality, return the lexicographically minimum non-negative coordinate. Note: ',
  },
  {
    question_title: 'Cat and Mouse II',
    question_text:
      'A game is played by a cat and a mouse named Cat and Mouse. The environment is represented by a grid of size rows x cols, where each element is a wall, floor, player (Cat, Mouse), or food. Mouse and Cat play according to the following rules: The game can end in 4 ways: Given a rows x cols matrix grid and two integers catJump and mouseJump, return true if Mouse can win the game if both Cat and Mouse play optimally, otherwise return false. ',
  },
  {
    question_title: 'Fancy Sequence',
    question_text:
      'Write an API that generates fancy sequences using the append, addAll, and multAll operations. Implement the Fancy class: ',
  },
  {
    question_title: 'Special Array With X Elements Greater Than or Equal X',
    question_text:
      'You are given an array nums of non-negative integers. nums is considered special if there exists a number x such that there are exactly x numbers in nums that are greater than or equal to x. Notice that x does not have to be an element in nums. Return x if the array is special, otherwise, return -1. It can be proven that if nums is special, the value for x is unique. ',
  },
  {
    question_title: 'Even Odd Tree',
    question_text:
      'A binary tree is named Even-Odd if it meets the following conditions: Given the root of a binary tree, return true if the binary tree is Even-Odd, otherwise return false. ',
  },
  {
    question_title: 'Minimum One Bit Operations to Make Integers Zero',
    question_text:
      'Given an integer n, you must transform it into 0 using the following operations any number of times: Return the minimum number of operations to transform n into 0. ',
  },
  {
    question_title: 'Maximum Number of Visible Points',
    question_text:
      'You are given an array points, an integer angle, and your location, where location = [posx, posy] and points[i] = [xi, yi] both denote integral coordinates on the X-Y plane. Initially, you are facing directly east from your position. You cannot move from your position, but you can rotate. In other words, posx and posy cannot be changed. Your field of view in degrees is represented by angle, determining how wide you can see from any given view direction. Let d be the amount in degrees that you rotate counterclockwise. Then, your field of view is the inclusive range of angles [d - angle/2, d + angle/2]. Your browser does not support the video tag or this video format. You can see some set of points if, for each point, the angle formed by the point, your position, and the immediate east direction from your position is in your field of view. There can be multiple points at one coordinate. There may be points at your location, and you can always see these points regardless of your rotation. Points do not obstruct your vision to other points. Return the maximum number of points you can see. ',
  },
  {
    question_title: 'Maximum Nesting Depth of the Parentheses',
    question_text:
      'A string is a valid parentheses string (denoted VPS) if it meets one of the following: We can similarly define the nesting depth depth(S) of any VPS S as follows: For example, "", "()()", and "()(()())" are VPS\'s (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS\'s. Given a VPS represented as string s, return the nesting depth of s. ',
  },
  {
    question_title: 'Split Two Strings to Make Palindrome',
    question_text:
      'You are given two strings a and b of the same length. Choose an index and split both strings at the same index, splitting a into two strings: aprefix and asuffix where a = aprefix + asuffix, and splitting b into two strings: bprefix and bsuffix where b = bprefix + bsuffix. Check if aprefix + bsuffix or bprefix + asuffix forms a palindrome. When you split a string s into sprefix and ssuffix, either ssuffix or sprefix is allowed to be empty. For example, if s = "abc", then "" + "abc", "a" + "bc", "ab" + "c" , and "abc" + "" are valid splits. Return true if it is possible to form a palindrome string, otherwise return false. Notice that\xa0x + y denotes the concatenation of strings x and y. ',
  },
  {
    question_title: 'Count Subtrees With Max Distance Between Cities',
    question_text:
      'There are n cities numbered from 1 to n. You are given an array edges of size n-1, where edges[i] = [ui, vi] represents a bidirectional edge between cities ui and vi. There exists a unique path between each pair of cities. In other words, the cities form a tree. A subtree is a subset of cities where every city is reachable from every other city in the subset, where the path between each pair passes through only the cities from the subset. Two subtrees are different if there is a city in one subtree that is not present in the other. For each d from 1 to n-1, find the number of subtrees in which the maximum distance between any two cities in the subtree is equal to d. Return an array of size n-1 where the dth element (1-indexed) is the number of subtrees in which the maximum distance between any two cities is equal to d. Notice\xa0that\xa0the distance between the two cities is the number of edges in the path between them. ',
  },
  {
    question_title: 'Sort Array by Increasing Frequency',
    question_text:
      'Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order. Return the sorted array. ',
  },
  {
    question_title: 'Widest Vertical Area Between Two Points Containing No Points',
    question_text:
      'Given n points on a 2D plane where points[i] = [xi, yi], Return\xa0the widest vertical area between two points such that no points are inside the area. A vertical area is an area of fixed-width extending infinitely along the y-axis (i.e., infinite height). The widest vertical area is the one with the maximum width. Note that points on the edge of a vertical area are not considered included in the area. ',
  },
  {
    question_title: 'Count Substrings That Differ by One Character',
    question_text:
      'Given two strings s and t, find the number of ways you can choose a non-empty substring of s and replace a single character by a different character such that the resulting substring is a substring of t. In other words, find the number of substrings in s that differ from some substring in t by exactly one character. For example, the underlined substrings in "computer" and "computation" only differ by the \'e\'/\'a\', so this is a valid way. Return the number of substrings that satisfy the condition above. A substring is a contiguous sequence of characters within a string. ',
  },
  {
    question_title: 'Number of Ways to Form a Target String Given a Dictionary',
    question_text:
      'You are given a list of strings of the same length words and a string target. Your task is to form target using the given words under the following rules: Notice that you can use multiple characters from the same string in words provided the conditions above are met. Return the number of ways to form target from words. Since the answer may be too large, return it modulo 109 + 7. ',
  },
  {
    question_title: 'Largest Substring Between Two Equal Characters',
    question_text:
      'Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1. A substring is a contiguous sequence of characters within a string. ',
  },
  {
    question_title: 'Lexicographically Smallest String After Applying Operations',
    question_text:
      'You are given a string s of even length consisting of digits from 0 to 9, and two integers a and b. You can apply either of the following two operations any number of times and in any order on s: Return the lexicographically smallest string you can obtain by applying the above operations any number of times on s. A string a is lexicographically smaller than a string b (of the same length) if in the first position where a and b differ, string a has a letter that appears earlier in the alphabet than the corresponding letter in b. For example, "0158" is lexicographically smaller than "0190" because the first position they differ is at the third letter, and \'5\' comes before \'9\'. ',
  },
  {
    question_title: 'Best Team With No Conflicts',
    question_text:
      'You are the manager of a basketball team. For the upcoming tournament, you want to choose the team with the highest overall score. The score of the team is the sum of scores of all the players in the team. However, the basketball team is not allowed to have conflicts. A conflict exists if a younger player has a strictly higher score than an older player. A conflict does not occur between players of the same age. Given two lists, scores and ages, where each scores[i] and ages[i] represents the score and age of the ith player, respectively, return the highest overall score of all possible basketball teams. ',
  },
  {
    question_title: 'Slowest Key',
    question_text:
      'A newly designed keypad was tested, where a tester pressed a sequence of n keys, one at a time. You are given a string keysPressed of length n, where keysPressed[i] was the ith key pressed in the testing sequence, and a sorted list releaseTimes, where releaseTimes[i] was the time the ith key was released. Both arrays are 0-indexed. The 0th key was pressed at the time 0,\xa0and every subsequent key was pressed at the exact time the previous key was released. The tester wants to know the key of the keypress that had the longest duration. The ith keypress had a duration of releaseTimes[i] - releaseTimes[i - 1], and the 0th keypress had a duration of releaseTimes[0]. Note that the same key could have been pressed multiple times during the test, and these multiple presses of the same key may not have had the same duration. Return the key of the keypress that had the longest duration. If there are multiple such keypresses, return the lexicographically largest key of the keypresses. ',
  },
  {
    question_title: 'Arithmetic Subarrays',
    question_text:
      'A sequence of numbers is called arithmetic if it consists of at least two elements, and the difference between every two consecutive elements is the same. More formally, a sequence s is arithmetic if and only if s[i+1] - s[i] == s[1] - s[0] for all valid i. For example, these are arithmetic sequences: The following sequence is not arithmetic: You are given an array of n integers, nums, and two arrays of m integers each, l and r, representing the m range queries, where the ith query is the range [l[i], r[i]]. All the arrays are 0-indexed. Return a list of boolean elements answer, where answer[i] is true if the subarray nums[l[i]], nums[l[i]+1], ... , nums[r[i]] can be rearranged to form an arithmetic sequence, and false otherwise. ',
  },
  {
    question_title: 'Path With Minimum Effort',
    question_text:
      "You are a hiker preparing for an upcoming hike. You are given heights, a 2D array of size rows x columns, where heights[row][col] represents the height of cell (row, col). You are situated in the top-left cell, (0, 0), and you hope to travel to the bottom-right cell, (rows-1, columns-1) (i.e.,\xa00-indexed). You can move up, down, left, or right, and you wish to find a route that requires the minimum effort. A route's effort is the maximum absolute difference in heights between two consecutive cells of the route. Return the minimum effort required to travel from the top-left cell to the bottom-right cell. ",
  },
  {
    question_title: 'Defuse the Bomb',
    question_text:
      'You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code\xa0of length of n\xa0and a key k. To decrypt the code, you must replace every number. All the numbers are replaced simultaneously. As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1]. Given the circular array code and an integer key k, return the decrypted code to defuse the bomb! ',
  },
  {
    question_title: 'Minimum Deletions to Make String Balanced',
    question_text:
      "You are given a string s consisting only of characters 'a' and 'b'\u200b\u200b\u200b\u200b. You can delete any number of characters in s to make s balanced. s is balanced if there is no pair of indices (i,j) such that i < j and s[i] = 'b' and s[j]= 'a'. Return the minimum number of deletions needed to make s balanced. ",
  },
  {
    question_title: 'Minimum Jumps to Reach Home',
    question_text:
      "A certain bug's home is on the x-axis at position x. Help them get there from position 0. The bug jumps according to the following rules: The bug may jump forward beyond its home, but it cannot jump to positions numbered with negative integers. Given an array of integers forbidden, where forbidden[i] means that the bug cannot jump to the position forbidden[i], and integers a, b, and x, return the minimum number of jumps needed for the bug to reach its home. If there is no possible sequence of jumps that lands the bug on position x, return -1. ",
  },
  {
    question_title: 'Distribute Repeating Integers',
    question_text:
      'You are given an array of n integers, nums, where there are at most 50 unique values in the array. You are also given an array of m customer order quantities, quantity, where quantity[i] is the amount of integers the ith customer ordered. Determine if it is possible to distribute nums such that: Return true if it is possible to distribute nums according to the above conditions. ',
  },
  {
    question_title: 'Check Array Formation Through Concatenation',
    question_text:
      'You are given an array of distinct integers arr and an array of integer arrays pieces, where the integers in pieces are distinct. Your goal is to form arr by concatenating the arrays in pieces in any order. However, you are not allowed to reorder the integers in each array pieces[i]. Return true if it is possible to form the array arr from pieces. Otherwise, return false. ',
  },
  {
    question_title: 'Count Sorted Vowel Strings',
    question_text:
      'Given an integer n, return the number of strings of length n that consist only of vowels (a, e, i, o, u) and are lexicographically sorted. A string s is lexicographically sorted if for all valid i, s[i] is the same as or comes before s[i+1] in the alphabet. ',
  },
  {
    question_title: 'Furthest Building You Can Reach',
    question_text:
      'You are given an integer array heights representing the heights of buildings, some bricks, and some ladders. You start your journey from building 0 and move to the next building by possibly using bricks or ladders. While moving from building i to building i+1 (0-indexed), Return the furthest building index (0-indexed) you can reach if you use the given ladders and bricks optimally. ',
  },
  {
    question_title: 'Maximum Repeating Substring',
    question_text:
      "For a string sequence, a string word is k-repeating if word concatenated k times is a substring of sequence. The word's maximum k-repeating value is the highest value k where word is k-repeating in sequence. If word is not a substring of sequence, word's maximum k-repeating value is 0. Given strings sequence and word, return the maximum k-repeating value of word in sequence. ",
  },
  {
    question_title: 'Minimum Number of Removals to Make Mountain Array',
    question_text:
      'You may recall that an array arr is a mountain array if and only if: Given an integer array nums\u200b\u200b\u200b, return the minimum number of elements to remove to make nums\u200b\u200b\u200b a mountain array. ',
  },
  {
    question_title: 'Design Front Middle Back Queue',
    question_text:
      'Design a queue that supports push and pop operations in the front, middle, and back. Implement the FrontMiddleBack class: Notice that when there are two middle position choices, the operation is performed on the frontmost middle position choice. For example: ',
  },
  {
    question_title: 'Get Maximum in Generated Array',
    question_text:
      'You are given an integer n. A 0-indexed integer array nums of length n + 1 is generated in the following way: Return the maximum integer in the array nums\u200b\u200b\u200b. ',
  },
  {
    question_title: 'Minimum Deletions to Make Character Frequencies Unique',
    question_text:
      "A string s is called good if there are no two different characters in s that have the same frequency. Given a string s, return the minimum number of characters you need to delete to make s good. The frequency of a character in a string is the number of times it appears in the string. For example, in the string \"aab\", the frequency of 'a' is 2, while the frequency of 'b' is 1. ",
  },
  {
    question_title: 'Sell Diminishing-Valued Colored Balls',
    question_text:
      "You have an inventory of different colored balls, and there is a customer that wants orders balls of any color. The customer weirdly values the colored balls. Each colored ball's value is the number of balls of that color\xa0you currently have in your inventory. For example, if you own 6 yellow balls, the customer would pay 6 for the first yellow ball. After the transaction, there are only 5 yellow balls left, so the next yellow ball is then valued at 5 (i.e., the value of the balls decreases as you sell more to the customer). You are given an integer array, inventory, where inventory[i] represents the number of balls of the ith color that you initially own. You are also given an integer orders, which represents the total number of balls that the customer wants. You can sell the balls in any order. Return the maximum total value that you can attain after selling orders colored balls. As the answer may be too large, return it modulo 109 + 7. ",
  },
  {
    question_title: 'Create Sorted Array through Instructions',
    question_text:
      'Given an integer array instructions, you are asked to create a sorted array from the elements in instructions. You start with an empty container nums. For each element from left to right in instructions, insert it into nums. The cost of each insertion is the minimum of the following: For example, if inserting element 3 into nums = [1,2,3,5], the cost of insertion is min(2, 1) (elements 1 and 2 are less than 3, element 5 is greater than 3) and nums will become [1,2,3,3,5]. Return the total cost to insert all elements from instructions into nums. Since the answer may be large, return it modulo 109 + 7 ',
  },
  {
    question_title: 'Design an Ordered Stream',
    question_text:
      'There is a stream of n (idKey, value) pairs arriving in an arbitrary order, where idKey is an integer between 1 and n and value is a string. No two pairs have the same id. Design a stream that returns the values in increasing order of their IDs by returning a chunk (list) of values after each insertion. The concatenation of all the chunks should result in a list of the sorted values. Implement the OrderedStream class:  Example:   Constraints:',
  },
  {
    question_title: 'Minimum Operations to Reduce X to Zero',
    question_text:
      'You are given an integer array nums and an integer x. In one operation, you can either remove the leftmost or the rightmost element from the array nums and subtract its value from x. Note that this modifies the array for future operations. Return the minimum number of operations to reduce x to exactly 0 if it is possible, otherwise, return -1. ',
  },
  {
    question_title: 'Determine if Two Strings Are Close',
    question_text:
      'Two strings are considered close if you can attain one from the other using the following operations: You can use the operations on either string as many times as necessary. Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise. ',
  },
  {
    question_title: 'Maximize Grid Happiness',
    question_text:
      "You are given four integers, m, n, introvertsCount, and extrovertsCount. You have an m x n grid, and there are two types of people: introverts and extroverts. There are introvertsCount introverts and extrovertsCount extroverts. You should decide how many people you want to live in the grid and assign each of them one grid cell. Note that you do not have to have all the people living in the grid. The happiness of each person is calculated as follows: Neighbors live in the directly adjacent cells north, east, south, and west of a person's cell. The grid happiness is the sum of each person's happiness. Return the maximum possible grid happiness. ",
  },
  {
    question_title: 'Check If Two String Arrays are Equivalent',
    question_text:
      'Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise. A string is represented by an array if the array elements concatenated in order forms the string. ',
  },
  {
    question_title: 'Smallest String With A Given Numeric Value',
    question_text:
      'The numeric value of a lowercase character is defined as its position (1-indexed) in the alphabet, so the numeric value of a is 1, the numeric value of b is 2, the numeric value of c is 3, and so on. The numeric value of a string consisting of lowercase characters is defined as the sum of its characters\' numeric values. For example, the numeric value of the string "abe" is equal to 1 + 2 + 5 = 8. You are given two integers n and k. Return the lexicographically smallest string with length equal to n and numeric value equal to k. Note that a string x is lexicographically smaller than string y if x comes before y in dictionary order, that is, either x is a prefix of y, or if i is the first position such that x[i] != y[i], then x[i] comes before y[i] in alphabetic order. ',
  },
  {
    question_title: 'Ways to Make a Fair Array',
    question_text:
      'You are given an integer array\xa0nums. You can choose exactly one index (0-indexed) and remove the element. Notice that the index of the elements may change after the removal. For example, if nums = [6,1,7,4,1]: An array is fair if the sum of the odd-indexed values equals the sum of the even-indexed values. Return the number of indices that you could choose such that after the removal, nums is fair. ',
  },
  {
    question_title: 'Minimum Initial Energy to Finish Tasks',
    question_text:
      'You are given an array tasks where tasks[i] = [actuali, minimumi]: For example, if the task is [10, 12] and your current energy is 11, you cannot start this task. However, if your current energy is 13, you can complete this task, and your energy will be 3 after finishing it. You can finish the tasks in any order you like. Return the minimum initial amount of energy you will need to finish all the tasks. ',
  },
  {
    question_title: 'Count the Number of Consistent Strings',
    question_text:
      'You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed. Return the number of consistent strings in the array words. ',
  },
  {
    question_title: 'Sum of Absolute Differences in a Sorted Array',
    question_text:
      'You are given an integer array nums sorted in non-decreasing order. Build and return an integer array result with the same length as nums such that result[i] is equal to the summation of absolute differences between nums[i] and all the other elements in the array. In other words, result[i] is equal to sum(|nums[i]-nums[j]|) where 0 <= j < nums.length and j != i (0-indexed). ',
  },
  {
    question_title: 'Stone Game VI',
    question_text:
      "Alice and Bob take turns playing a game, with Alice starting first. There are n stones in a pile. On each player's turn, they can remove a stone from the pile and receive points based on the stone's value. Alice and Bob may value the stones differently. You are given two integer arrays of length n, aliceValues and bobValues. Each aliceValues[i] and bobValues[i] represents how Alice and Bob, respectively, value the ith stone. The winner is the person with the most points after all the stones are chosen. If both players have the same amount of points, the game results in a draw. Both players will play optimally.\xa0Both players know the other's values. Determine the result of the game, and: ",
  },
  {
    question_title: 'Delivering Boxes from Storage to Ports',
    question_text:
      'You have the task of delivering some boxes from storage to their ports using only one ship. However, this ship has a limit on the number of boxes and the total weight that it can carry. You are given an array boxes, where boxes[i] = [ports\u200b\u200bi\u200b, weighti], and three integers portsCount, maxBoxes, and maxWeight. The boxes need to be delivered in the order they are given. The ship will follow these steps: The ship must end at storage after all the boxes have been delivered. Return the minimum number of trips the ship needs to make to deliver all boxes to their respective ports. ',
  },
  {
    question_title: 'Richest Customer Wealth',
    question_text:
      "You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i\u200b\u200b\u200b\u200b\u200b\u200b\u200b\u200b\u200b\u200b\u200bth\u200b\u200b\u200b\u200b customer has in the j\u200b\u200b\u200b\u200b\u200b\u200b\u200b\u200b\u200b\u200b\u200bth\u200b\u200b\u200b\u200b bank. Return the wealth that the richest customer has. A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth. ",
  },
  {
    question_title: 'Find the Most Competitive Subsequence',
    question_text:
      "Given an integer array nums and a positive integer k, return the most competitive subsequence of nums of size k. An array's subsequence is a resulting sequence obtained by erasing some (possibly zero) elements from the array. We define that a subsequence a is more competitive than a subsequence b (of the same length) if in the first position where a and b differ, subsequence a has a number less than the corresponding number in b. For example, [1,3,4] is more competitive than [1,3,5] because the first position they differ is at the final number, and 4 is less than 5. ",
  },
  {
    question_title: 'Minimum Moves to Make Array Complementary',
    question_text:
      'You are given an integer array nums of even length n and an integer limit. In one move, you can replace any integer from nums with another integer between 1 and limit, inclusive. The array nums is complementary if for all indices i (0-indexed), nums[i] + nums[n - 1 - i] equals the same number. For example, the array [1,2,3,4] is complementary because for all indices i, nums[i] + nums[n - 1 - i] = 5. Return the minimum number of moves required to make nums complementary. ',
  },
  {
    question_title: 'Minimize Deviation in Array',
    question_text:
      'You are given an array nums of n positive integers. You can perform two types of operations on any element of the array any number of times: The deviation of the array is the maximum difference between any two elements in the array. Return the minimum deviation the array can have after performing some number of operations. ',
  },
  {
    question_title: 'Goal Parser Interpretation',
    question_text:
      'You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order. Given the string command, return the Goal Parser\'s interpretation of command. ',
  },
  {
    question_title: 'Max Number of K-Sum Pairs',
    question_text:
      'You are given an integer array nums and an integer k. In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array. Return the maximum number of operations you can perform on the array. ',
  },
  {
    question_title: 'Minimum Incompatibility',
    question_text:
      "You are given an integer array nums\u200b\u200b\u200b and an integer k. You are asked to distribute this array into k subsets of equal size such that there are no two equal elements in the same subset. A subset's incompatibility is the difference between the maximum and minimum elements in that array. Return the minimum possible sum of incompatibilities of the k subsets after distributing the array optimally, or return -1 if it is not possible. A subset is a group integers that appear in the array with no particular order. ",
  },
  {
    question_title: 'Concatenation of Consecutive Binary Numbers',
    question_text:
      'Given an integer n, return the decimal value of the binary string formed by concatenating the binary representations of 1 to n in order, modulo 109 + 7. ',
  },
  {
    question_title: 'Number of Students Unable to Eat Lunch',
    question_text:
      'The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers 0 and 1 respectively. All students stand in a queue. Each student either prefers square or circular sandwiches. The number of sandwiches in the cafeteria is equal to the number of students. The sandwiches are placed in a stack. At each step: This continues until none of the queue students want to take the top sandwich and are thus unable to eat. You are given two integer arrays students and sandwiches where sandwiches[i] is the type of the i\u200b\u200b\u200b\u200b\u200b\u200bth sandwich in the stack (i = 0 is the top of the stack) and students[j] is the preference of the j\u200b\u200b\u200b\u200b\u200b\u200bth student in the initial queue (j = 0 is the front of the queue). Return the number of students that are unable to eat. ',
  },
  {
    question_title: 'Average Waiting Time',
    question_text:
      'There is a restaurant with a single chef. You are given an array customers, where customers[i] = [arrivali, timei]: When a customer arrives, he gives the chef his order, and the chef starts preparing it once he is idle. The customer waits till the chef finishes preparing his order. The chef does not prepare food for more than one customer at a time. The chef prepares food for customers in the order they were given in the input. Return the average waiting time of all customers. Solutions within 10-5 from the actual answer are considered accepted. ',
  },
  {
    question_title: 'Maximum Binary String After Change',
    question_text:
      "You are given a binary string binary consisting of only 0's or 1's. You can apply each of the following operations any number of times: Return the maximum binary string you can obtain after any number of operations. Binary string x is greater than binary string y if x's decimal representation is greater than y's decimal representation. ",
  },
  {
    question_title: 'Minimum Adjacent Swaps for K Consecutive Ones',
    question_text:
      "You are given an integer array, nums, and an integer k. nums comprises of only 0's and 1's. In one move, you can choose two adjacent indices and swap their values. Return the minimum number of moves required so that nums has k consecutive 1's. ",
  },
  {
    question_title: 'Count of Matches in Tournament',
    question_text:
      'You are given an integer n, the number of teams in a tournament that has strange rules: Return the number of matches played in the tournament until a winner is decided. ',
  },
  {
    question_title: 'Partitioning Into Minimum Number Of Deci-Binary Numbers',
    question_text:
      'A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. For example, 101 and 1100 are deci-binary, while 112 and 3001 are not. Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that they sum up to n. ',
  },
  {
    question_title: 'Stone Game VII',
    question_text:
      "Alice and Bob take turns playing a game, with Alice starting first. There are n stones arranged in a row. On each player's turn, they can remove either the leftmost stone or the rightmost stone from the row and receive points equal to the sum of the remaining stones' values in the row. The winner is the one with the higher score when there are no stones left to remove. Bob found that he will always lose this game (poor Bob, he always loses), so he decided to minimize the score's difference. Alice's goal is to maximize the difference in the score. Given an array of integers stones where stones[i] represents the value of the ith stone from the left, return the difference in Alice and Bob's score if they both play optimally. ",
  },
  {
    question_title: 'Reformat Phone Number',
    question_text:
      "You are given a phone number as a string number. number consists of digits, spaces ' ', and/or dashes '-'. You would like to reformat the phone number in a certain manner. Firstly, remove all spaces and dashes. Then, group the digits from left to right into blocks of length 3 until there are 4 or fewer digits. The final digits are then grouped as follows: The blocks are then joined by dashes. Notice that the reformatting process should never produce any blocks of length 1 and produce at most two blocks of length 2. Return the phone number after formatting. ",
  },
  {
    question_title: 'Maximum Erasure Value',
    question_text:
      'You are given an array of positive integers nums and want to erase a subarray containing\xa0unique elements. The score you get by erasing the subarray is equal to the sum of its elements. Return the maximum score you can get by erasing exactly one subarray. An array b is called to be a subarray of a if it forms a contiguous subsequence of a, that is, if it is equal to a[l],a[l+1],...,a[r] for some (l,r). ',
  },
  {
    question_title: 'Jump Game VI',
    question_text:
      'You are given a 0-indexed integer array nums and an integer k. You are initially standing at index 0. In one move, you can jump at most k steps forward without going outside the boundaries of the array. That is, you can jump from index i to any index in the range [i + 1, min(n - 1, i + k)] inclusive. You want to reach the last index of the array (index n - 1). Your score is the sum of all nums[j] for each index j you visited in the array. Return the maximum score you can get. ',
  },
  {
    question_title: 'Checking Existence of Edge Length Limited Paths',
    question_text:
      'An undirected graph of n nodes is defined by edgeList, where edgeList[i] = [ui, vi, disi] denotes an edge between nodes ui and vi with distance disi. Note that there may be multiple edges between two nodes. Given an array queries, where queries[j] = [pj, qj, limitj], your task is to determine for each queries[j] whether there is a path between pj and qj such that each edge on the path has a distance strictly less than limitj . Return a boolean array answer, where answer.length == queries.length and the jth value of answer is true if there is a path for queries[j] is true, and false otherwise. ',
  },
  {
    question_title: 'Calculate Money in Leetcode Bank',
    question_text:
      'Hercy wants to save money for his first car. He puts money in the Leetcode\xa0bank every day. He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, he will put in $1 more than the day before. On every subsequent Monday, he will put in $1 more than the previous Monday. Given n, return the total amount of money he will have in the Leetcode bank at the end of the nth day. ',
  },
  {
    question_title: 'Maximum Score From Removing Substrings',
    question_text:
      'You are given a string s and two integers x and y. You can perform two types of operations any number of times. Return the maximum points you can gain after applying the above operations on s. ',
  },
  {
    question_title: 'Construct the Lexicographically Largest Valid Sequence',
    question_text:
      'Given an integer n, find a sequence that satisfies all of the following: The distance between two numbers on the sequence, a[i] and a[j], is the absolute difference of their indices, |j - i|. Return the lexicographically largest sequence. It is guaranteed that under the given constraints, there is always a solution. A sequence a is lexicographically larger than a sequence b (of the same length) if in the first position where a and b differ, sequence a has a number greater than the corresponding number in b. For example, [0,1,9,0] is lexicographically larger than [0,1,5,6] because the first position they differ is at the third number, and 9 is greater than 5. ',
  },
  {
    question_title: 'Determine if String Halves Are Alike',
    question_text:
      "You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half. Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters. Return true if a and b are alike. Otherwise, return false. ",
  },
  {
    question_title: 'Maximum Number of Eaten Apples',
    question_text:
      'There is a special kind of apple tree that grows apples every day for n days. On the ith day, the tree grows apples[i] apples that will rot after days[i] days, that is on day i + days[i] the apples will be rotten and cannot be eaten. On some days, the apple tree does not grow any apples, which are denoted by apples[i] == 0 and days[i] == 0. You decided to eat at most one apple a day (to keep the doctors away). Note that you can keep eating after the first n days. Given two integer arrays days and apples of length n, return the maximum number of apples you can eat. ',
  },
  {
    question_title: 'Find Minimum Time to Finish All Jobs',
    question_text:
      'You are given an integer array jobs, where jobs[i] is the amount of time it takes to complete the ith job. There are k workers that you can assign jobs to. Each job should be assigned to exactly one worker. The working time of a worker is the sum of the time it takes to complete all jobs assigned to them. Your goal is to devise an optimal assignment such that the maximum working time of any worker is minimized. Return the minimum possible maximum working time of any assignment. ',
  },
  {
    question_title: 'Maximum XOR With an Element From Array',
    question_text:
      'You are given an array nums consisting of non-negative integers. You are also given a queries array, where queries[i] = [xi, mi]. The answer to the ith query is the maximum bitwise XOR value of xi and any element of nums that does not exceed mi. In other words, the answer is max(nums[j] XOR xi) for all j such that nums[j] <= mi. If all elements in nums are larger than mi, then the answer is -1. Return an integer array answer where answer.length == queries.length and answer[i] is the answer to the ith query. ',
  },
  {
    question_title: 'Maximum Units on a Truck',
    question_text:
      'You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]: You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number\xa0of boxes does not exceed truckSize. Return the maximum total number of units that can be put on the truck. ',
  },
  {
    question_title: 'Count Good Meals',
    question_text:
      'A good meal is a meal that contains exactly two different food items with a sum of deliciousness equal to a power of two. You can pick any two different foods to make a good meal. Given an array of integers deliciousness where deliciousness[i] is the deliciousness of the i\u200b\u200b\u200b\u200b\u200b\u200bth\u200b\u200b\u200b\u200b\u200b\u200b\u200b\u200b item of food, return the number of different good meals you can make from this list modulo 109 + 7. Note that items with different indices are considered different even if they have the same deliciousness value. ',
  },
  {
    question_title: 'Ways to Split Array Into Three Subarrays',
    question_text:
      'A split of an integer array is good if: Given nums, an array of non-negative integers, return the number of good ways to split nums. As the number may be too large, return it modulo 109 + 7. ',
  },
  {
    question_title: 'Minimum Operations to Make a Subsequence',
    question_text:
      "You are given an array target that consists of distinct integers and another integer array arr that can have duplicates. In one operation, you can insert any integer at any position in arr. For example, if arr = [1,4,1,2], you can add 3 in the middle and make it [1,4,3,1,2]. Note that you can insert the integer at the very beginning or end of the array. Return the minimum number of operations needed to make target a subsequence of arr. A subsequence of an array is a new array generated from the original array by deleting some elements (possibly none) without changing the remaining elements' relative order. For example, [2,7,4] is a subsequence of [4,2,3,7,2,1,4] (the underlined elements), while [2,4,2] is not. ",
  },
  {
    question_title: 'Find the Highest Altitude',
    question_text:
      'There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0. You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i\u200b\u200b\u200b\u200b\u200b\u200b and i + 1 for all (0 <= i < n). Return the highest altitude of a point. ',
  },
  {
    question_title: 'Minimum Number of People to Teach',
    question_text:
      'On a social network consisting of m users and some friendships between users, two users can communicate with each other if they know a common language. You are given an integer n, an array languages, and an array friendships where: You can choose one language and teach it to some users so that all friends can communicate with each other. Return the minimum number of users you need to teach. ',
  },
  {
    question_title: 'Decode XORed Permutation',
    question_text:
      'There is an integer array perm that is a permutation of the first n positive integers, where n is always odd. It was encoded into another integer array encoded of length n - 1, such that encoded[i] = perm[i] XOR perm[i + 1]. For example, if perm = [1,3,2], then encoded = [2,1]. Given the encoded array, return the original array perm. It is guaranteed that the answer exists and is unique. ',
  },
  {
    question_title: 'Count Ways to Make Array With Product',
    question_text:
      'You are given a 2D integer array, queries. For each queries[i], where queries[i] = [ni, ki], find the number of different ways you can place positive integers into an array of size ni such that the product of the integers is ki. As the number of ways may be too large, the answer to the ith query is the number of ways modulo 109 + 7. Return an integer array answer where answer.length == queries.length, and answer[i] is the answer to the ith query. ',
  },
  {
    question_title: 'Decode XORed Array',
    question_text:
      'There is a hidden integer array arr that consists of n non-negative integers. It was encoded into another integer array encoded of length n - 1, such that encoded[i] = arr[i] XOR arr[i + 1]. For example, if arr = [1,0,2,1], then encoded = [1,2,3]. You are given the encoded array. You are also given an integer first, that is the first element of arr, i.e. arr[0]. Return the original array arr. It can be proved that the answer exists and is unique. ',
  },
  {
    question_title: 'Minimize Hamming Distance After Swap Operations',
    question_text:
      'You are given two integer arrays, source and target, both of length n. You are also given an array allowedSwaps where each allowedSwaps[i] = [ai, bi] indicates that you are allowed to swap the elements at index ai and index bi (0-indexed) of array source. Note that you can swap elements at a specific pair of indices multiple times and in any order. The Hamming distance of two arrays of the same length, source and target, is the number of positions where the elements are different. Formally, it is the number of indices i for 0 <= i <= n-1 where source[i] != target[i] (0-indexed). Return the minimum Hamming distance of source and target after performing any amount of swap operations on array source. ',
  },
  {
    question_title: 'Number Of Rectangles That Can Form The Largest Square',
    question_text:
      'You are given an array rectangles where rectangles[i] = [li, wi] represents the ith rectangle of length li and width wi. You can cut the ith rectangle to form a square with a side length of k if both k <= li and k <= wi. For example, if you have a rectangle [4,6], you can cut it to get a square with a side length of at most 4. Let maxLen be the side length of the largest square you can obtain from any of the given rectangles. Return the number of rectangles that can make a square with a side length of maxLen. ',
  },
  {
    question_title: 'Maximum Number of Balls in a Box',
    question_text:
      "You are working in a ball factory where you have n balls numbered from lowLimit up to highLimit inclusive (i.e., n == highLimit - lowLimit + 1), and an infinite number of boxes numbered from 1 to infinity. Your job at this factory is to put each ball in the box with a number equal to the sum of digits of the ball's number. For example, the ball number 321 will be put in the box number 3 + 2 + 1 = 6 and the ball number 10 will be put in the box number 1 + 0 = 1. Given two integers lowLimit and highLimit, return the number of balls in the box with the most balls. ",
  },
  {
    question_title: 'Largest Submatrix With Rearrangements',
    question_text:
      'You are given a binary matrix matrix of size m x n, and you are allowed to rearrange the columns of the matrix in any order. Return the area of the largest submatrix within matrix where every element of the submatrix is 1 after reordering the columns optimally. ',
  },
  {
    question_title: 'Sum of Unique Elements',
    question_text:
      'You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array. Return the sum of all the unique elements of nums. ',
  },
  {
    question_title: 'Maximum Absolute Sum of Any Subarray',
    question_text:
      'You are given an integer array nums. The absolute sum of a subarray [numsl, numsl+1, ..., numsr-1, numsr] is abs(numsl + numsl+1 + ... + numsr-1 + numsr). Return the maximum absolute sum of any (possibly empty) subarray of nums. Note that abs(x) is defined as follows: ',
  },
  {
    question_title: 'Minimum Length of String After Deleting Similar Ends',
    question_text:
      "Given a string s consisting only of characters 'a', 'b', and 'c'. You are asked to apply the following algorithm on the string any number of times: Return the minimum length of s after performing the above operation any number of times (possibly zero times). ",
  },
  {
    question_title: 'Maximum Number of Events That Can Be Attended II',
    question_text:
      'You are given an array of events where events[i] = [startDayi, endDayi, valuei]. The ith event starts at startDayi and ends at endDayi, and if you attend this event, you will receive a value of valuei. You are also given an integer k which represents the maximum number of events you can attend. You can only attend one event at a time. If you choose to attend an event, you must attend the entire event. Note that the end day is inclusive: that is, you cannot attend two events where one of them starts and the other ends on the same day. Return the maximum sum of values that you can receive by attending events. ',
  },
  {
    question_title: 'Latest Time by Replacing Hidden Digits',
    question_text:
      'You are given a string time in the form of  hh:mm, where some of the digits in the string are hidden (represented by ?). The valid times are those inclusively between 00:00 and 23:59. Return the latest valid time you can get from time by replacing the hidden digits. ',
  },
  {
    question_title: 'Change Minimum Characters to Satisfy One of Three Conditions',
    question_text:
      'You are given two strings a and b that consist of lowercase letters. In one operation, you can change any character in a or b to any lowercase letter. Your goal is to satisfy one of the following three conditions: Return the minimum number of operations needed to achieve your goal. ',
  },
  {
    question_title: 'Find Kth Largest XOR Coordinate Value',
    question_text:
      'You are given a 2D matrix of size m x n, consisting of non-negative integers. You are also given an integer k. The value of coordinate (a, b) of the matrix is the XOR of all matrix[i][j] where 0 <= i <= a < m and 0 <= j <= b < n (0-indexed). Find the kth largest value (1-indexed) of all the coordinates of matrix. ',
  },
  {
    question_title: 'Building Boxes',
    question_text:
      'You have a cubic storeroom where the width, length, and height of the room are all equal to n units. You are asked to place n boxes in this room where each box is a cube of unit side length. There are however some rules to placing the boxes: Given an integer n, return the minimum possible number of boxes touching the floor. ',
  },
  {
    question_title: 'Restore the Array From Adjacent Pairs',
    question_text:
      'There is an integer array nums that consists of n unique elements, but you have forgotten it. However, you do remember every pair of adjacent elements in nums. You are given a 2D integer array adjacentPairs of size n - 1 where each adjacentPairs[i] = [ui, vi] indicates that the elements ui and vi are adjacent in nums. It is guaranteed that every adjacent pair of elements nums[i] and nums[i+1] will exist in adjacentPairs, either as [nums[i], nums[i+1]] or [nums[i+1], nums[i]]. The pairs can appear in any order. Return the original array nums. If there are multiple solutions, return any of them. ',
  },
  {
    question_title: 'Palindrome Partitioning IV',
    question_text:
      'Given a string s, return true if it is possible to split the string s into three non-empty palindromic substrings. Otherwise, return false.\u200b\u200b\u200b\u200b\u200b A string is said to be palindrome if it the same string when reversed. ',
  },
  {
    question_title: 'Can You Eat Your Favorite Candy on Your Favorite Day?',
    question_text:
      'You are given a (0-indexed) array of positive integers candiesCount where candiesCount[i] represents the number of candies of the\xa0ith\xa0type you have. You are also given a 2D array queries where queries[i] = [favoriteTypei, favoriteDayi, dailyCapi]. You play a game with the following rules: Construct a boolean array answer such that answer.length == queries.length and answer[i] is true if you can eat a candy of type favoriteTypei on day favoriteDayi without eating more than dailyCapi candies on any day, and false otherwise. Note that you can eat different types of candy on the same day, provided that you follow rule 2. Return the constructed array answer. ',
  },
  {
    question_title: 'Longest Nice Substring',
    question_text:
      "A string s is nice if, for every letter of the alphabet that s contains, it appears both in uppercase and lowercase. For example, \"abABB\" is nice because 'A' and 'a' appear, and 'B' and 'b' appear. However, \"abA\" is not because 'b' appears, but 'B' does not. Given a string s, return the longest substring of s that is nice. If there are multiple, return the substring of the earliest occurrence. If there are none, return an empty string. ",
  },
  {
    question_title: 'Form Array by Concatenating Subarrays of Another Array',
    question_text:
      'You are given a 2D integer array groups of length n. You are also given an integer array nums. You are asked if you can choose n disjoint subarrays from the array nums such that the ith subarray is equal to groups[i] (0-indexed), and if i > 0, the (i-1)th subarray appears before the ith subarray in nums (i.e. the subarrays must be in the same order as groups). Return true if you can do this task, and false otherwise. Note that the subarrays are disjoint if and only if there is no index k such that nums[k] belongs to more than one subarray. A subarray is a contiguous sequence of elements within an array. ',
  },
  {
    question_title: 'Tree of Coprimes',
    question_text:
      "There is a tree (i.e.,\xa0a connected, undirected graph that has no cycles) consisting of n nodes numbered from 0 to n - 1 and exactly n - 1 edges. Each node has a value associated with it, and the root of the tree is node 0. To represent this tree, you are given an integer array nums and a 2D array edges. Each nums[i] represents the ith node's value, and each edges[j] = [uj, vj] represents an edge between nodes uj and vj in the tree. Two values x and y are coprime if gcd(x, y) == 1 where gcd(x, y) is the greatest common divisor of x and y. An ancestor of a node i is any other node on the shortest path from node i to the root. A node is not considered an ancestor of itself. Return an array ans of size n, where ans[i] is the closest ancestor to node i such that nums[i] and nums[ans[i]] are coprime, or -1 if there is no such ancestor. ",
  },
  {
    question_title: 'Map of Highest Peak',
    question_text:
      "You are given an integer matrix isWater of size m x n that represents a map of land and water cells. You must assign each cell a height in a way that follows these rules: Find an assignment of heights such that the maximum height in the matrix is maximized. Return an integer matrix height of size m x n where height[i][j] is cell (i, j)'s height. If there are multiple solutions, return any of them. ",
  },
  {
    question_title: 'Check if Array Is Sorted and Rotated',
    question_text:
      'Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false. There may be duplicates in the original array. Note: An array A rotated by x positions results in an array B of the same length such that A[i] == B[(i+x) % A.length], where % is the modulo operation. ',
  },
  {
    question_title: 'Maximum Score From Removing Stones',
    question_text:
      'You are playing a solitaire game with three piles of stones of sizes a\u200b\u200b\u200b\u200b\u200b\u200b, b,\u200b\u200b\u200b\u200b\u200b\u200b and c\u200b\u200b\u200b\u200b\u200b\u200b respectively. Each turn you choose two different non-empty piles, take one stone from each, and add 1 point to your score. The game stops when there are fewer than two non-empty piles (meaning there are no more available moves). Given three integers a\u200b\u200b\u200b\u200b\u200b, b,\u200b\u200b\u200b\u200b\u200b and c\u200b\u200b\u200b\u200b\u200b, return the maximum score you can get. ',
  },
  {
    question_title: 'Largest Merge Of Two Strings',
    question_text:
      'You are given two strings word1 and word2. You want to construct a string merge in the following way: while either word1 or word2 are non-empty, choose one of the following options: Return the lexicographically largest merge you can construct. A string a is lexicographically larger than a string b (of the same length) if in the first position where a and b differ, a has a character strictly larger than the corresponding character in b. For example, "abcd" is lexicographically larger than "abcc" because the first position they differ is at the fourth character, and d is greater than c. ',
  },
  {
    question_title: 'Closest Subsequence Sum',
    question_text:
      "You are given an integer array nums and an integer goal. You want to choose a subsequence of nums such that the sum of its elements is the closest possible to goal. That is, if the sum of the subsequence's elements is sum, then you want to minimize the absolute difference abs(sum - goal). Return the minimum possible value of abs(sum - goal). Note that a subsequence of an array is an array formed by removing some elements (possibly all or none) of the original array. ",
  },
  {
    question_title: 'Minimum Changes To Make Alternating Binary String',
    question_text:
      "You are given a string s consisting only of the characters '0' and '1'. In one operation, you can change any '0' to '1' or vice versa. The string is called alternating if no two adjacent characters are equal. For example, the string \"010\" is alternating, while the string \"0100\" is not. Return the minimum number of operations needed to make s alternating. ",
  },
  {
    question_title: 'Count Number of Homogenous Substrings',
    question_text:
      'Given a string s, return the number of homogenous substrings of s. Since the answer may be too large, return it modulo 109 + 7. A string is homogenous if all the characters of the string are the same. A substring is a contiguous sequence of characters within a string. ',
  },
  {
    question_title: 'Minimum Limit of Balls in a Bag',
    question_text:
      'You are given an integer array nums where the ith bag contains nums[i] balls. You are also given an integer maxOperations. You can perform the following operation at most maxOperations times: Your penalty is the maximum number of balls in a bag. You want to minimize your penalty after the operations. Return the minimum possible penalty\xa0after performing the operations. ',
  },
  {
    question_title: 'Find Nearest Point That Has the Same X or Y Coordinate',
    question_text:
      'You are given two integers, x and y, which represent your current location on a Cartesian grid: (x, y). You are also given an array points where each points[i] = [ai, bi] represents that a point exists at (ai, bi). A point is valid if it shares the same x-coordinate or the same y-coordinate as your location. Return the index (0-indexed) of the valid point with the smallest Manhattan distance from your current location. If there are multiple, return the valid point with the smallest index. If there are no valid points, return -1. The Manhattan distance between two points (x1, y1) and (x2, y2) is abs(x1 - x2) + abs(y1 - y2). ',
  },
  {
    question_title: 'Check if Number is a Sum of Powers of Three',
    question_text:
      'Given an integer n, return true if it is possible to represent n as the sum of distinct powers of three. Otherwise, return false. An integer y is a power of three if there exists an integer x such that y == 3x. ',
  },
  {
    question_title: 'Sum of Beauty of All Substrings',
    question_text:
      'The beauty of a string is the difference in frequencies between the most frequent and least frequent characters. Given a string s, return the sum of beauty of all of its substrings. ',
  },
  {
    question_title: 'Count Pairs Of Nodes',
    question_text:
      'You are given an undirected graph defined by an integer n, the number of nodes, and a 2D integer array edges, the edges in the graph, where edges[i] = [ui, vi] indicates that there is an undirected edge between ui and vi. You are also given an integer array queries. Let incident(a, b) be defined as the number of edges that are connected to either node a or b. The answer to the jth query is the number of pairs of nodes (a, b) that satisfy both of the following conditions: Return an array answers such that answers.length == queries.length and answers[j] is the answer of the jth query. Note that there can be multiple edges between the same two nodes. ',
  },
  {
    question_title: 'Merge Strings Alternately',
    question_text:
      'You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string. Return the merged string. ',
  },
  {
    question_title: 'Minimum Number of Operations to Move All Balls to Each Box',
    question_text:
      "You have n boxes. You are given a binary string boxes of length n, where boxes[i] is '0' if the ith box is empty, and '1' if it contains one ball. In one operation, you can move one ball from a box to an adjacent box. Box i is adjacent to box j if abs(i - j) == 1. Note that after doing so, there may be more than one ball in some boxes. Return an array answer of size n, where answer[i] is the minimum number of operations needed to move all the balls to the ith box. Each answer[i] is calculated considering the initial state of the boxes. ",
  },
  {
    question_title: 'Maximum Score from Performing Multiplication Operations',
    question_text:
      'You are given two integer arrays nums and multipliers of size n and m respectively, where n >= m. The arrays are 1-indexed. You begin with a score of 0. You want to perform exactly m operations. On the ith operation (1-indexed), you will: Return the maximum score after performing m operations. ',
  },
  {
    question_title: 'Maximize Palindrome Length From Subsequences',
    question_text:
      'You are given two strings, word1 and word2. You want to construct a string in the following manner: Return the length of the longest palindrome that can be constructed in the described manner. If no palindromes can be constructed, return 0. A subsequence of a string s is a string that can be made by deleting some (possibly none) characters from s without changing the order of the remaining characters. A palindrome is a string that reads the same forward\xa0as well as backward. ',
  },
  {
    question_title: 'Count Items Matching a Rule',
    question_text:
      'You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue. The ith item is said to match the rule if one of the following is true: Return the number of items that match the given rule. ',
  },
  {
    question_title: 'Closest Dessert Cost',
    question_text:
      'You would like to make dessert and are preparing to buy the ingredients. You have n ice cream base flavors and m types of toppings to choose from. You must follow these rules when making your dessert: You are given three inputs: You want to make a dessert with a total cost as close to target as possible. Return the closest possible cost of the dessert to target. If there are multiple, return the lower one. ',
  },
  {
    question_title: 'Equal Sum Arrays With Minimum Number of Operations',
    question_text:
      "You are given two arrays of integers nums1 and nums2, possibly of different lengths. The values in the arrays are between 1 and 6, inclusive. In one operation, you can change any integer's value in any of the arrays to any value between 1 and 6, inclusive. Return the minimum number of operations required to make the sum of values in nums1 equal to the sum of values in nums2. Return -1\u200b\u200b\u200b\u200b\u200b if it is not possible to make the sum of the two arrays equal. ",
  },
  {
    question_title: 'Car Fleet II',
    question_text:
      'There are n cars traveling at different speeds in the same direction along a one-lane road. You are given an array cars of length n, where cars[i] = [positioni, speedi] represents: For simplicity, cars can be considered as points moving along the number line. Two cars collide when they occupy the same position. Once a car collides with another car, they unite and form a single car fleet. The cars in the formed fleet will have the same position and the same speed, which is the initial speed of the slowest car in the fleet. Return an array answer, where answer[i] is the time, in seconds, at which the ith car collides with the next car, or -1 if the car does not collide with the next car. Answers within 10-5 of the actual answers are accepted. ',
  },
  {
    question_title: 'Second Largest Digit in a String',
    question_text:
      'Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist. An alphanumeric string is a string consisting of lowercase English letters and digits. ',
  },
  {
    question_title: 'Design Authentication Manager',
    question_text:
      'There is an authentication system that works with authentication tokens. For each session, the user will receive a new authentication token that will expire timeToLive seconds after the currentTime. If the token is renewed, the expiry time will be extended to expire timeToLive seconds after the (potentially different) currentTime. Implement the AuthenticationManager class: Note that if a token expires at time t, and another action happens on time t (renew or countUnexpiredTokens), the expiration takes place before the other actions. ',
  },
  {
    question_title: 'Maximize Score After N Operations',
    question_text:
      'You are given nums, an array of positive integers of size 2 * n. You must perform n operations on this array. In the ith operation (1-indexed), you will: Return the maximum score you can receive after performing n operations. The function gcd(x, y) is the greatest common divisor of x and y. ',
  },
  {
    question_title: 'Count Pairs With XOR in a Range',
    question_text:
      'Given a (0-indexed) integer array nums and two integers low and high, return the number of nice pairs. A nice pair is a pair (i, j) where 0 <= i < j < nums.length and low <= (nums[i] XOR nums[j]) <= high. ',
  },
  {
    question_title: 'Check if Binary String Has at Most One Segment of Ones',
    question_text:
      'Given a binary string s \u200b\u200b\u200b\u200b\u200bwithout leading zeros, return true\u200b\u200b\u200b if s contains at most one contiguous segment of ones. Otherwise, return false. ',
  },
  {
    question_title: 'Minimum Elements to Add to Form a Given Sum',
    question_text:
      'You are given an integer array nums and two integers limit and goal. The array nums has an interesting property that abs(nums[i]) <= limit. Return the minimum number of elements you need to add to make the sum of the array equal to goal. The array must maintain its property that abs(nums[i]) <= limit. Note that abs(x) equals x if x >= 0, and -x otherwise. ',
  },
  {
    question_title: 'Number of Restricted Paths From First to Last Node',
    question_text:
      'There is an undirected weighted connected graph. You are given a positive integer n which denotes that the graph has n nodes labeled from 1 to n, and an array edges where each edges[i] = [ui, vi, weighti] denotes that there is an edge between nodes ui and vi with weight equal to weighti. A path from node start to node end is a sequence of nodes [z0, z1, z2, ..., zk] such that z0 = start and zk = end and there is an edge between zi and zi+1 where 0 <= i <= k-1. The distance of a path is the sum of the weights on the edges of the path. Let distanceToLastNode(x) denote the shortest distance of a path between node n and node x. A restricted path is a path that also satisfies that distanceToLastNode(zi) > distanceToLastNode(zi+1) where 0 <= i <= k-1. Return the number of restricted paths from node 1 to node n. Since that number may be too large, return it modulo 109 + 7. ',
  },
  {
    question_title: 'Make the XOR of All Segments Equal to Zero',
    question_text:
      'You are given an array nums\u200b\u200b\u200b and an integer k\u200b\u200b\u200b\u200b\u200b. The XOR of a segment [left, right] where left <= right is the XOR of all the elements with indices between left and right, inclusive: nums[left] XOR nums[left+1] XOR ... XOR nums[right]. Return the minimum number of elements to change in the array such that the XOR of all segments of size k\u200b\u200b\u200b\u200b\u200b\u200b is equal to zero. ',
  },
  {
    question_title: 'Check if One String Swap Can Make Strings Equal',
    question_text:
      'You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices. Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false. ',
  },
  {
    question_title: 'Maximum Average Pass Ratio',
    question_text:
      'There is a school that has classes of students and each class will be having a final exam. You are given a 2D integer array classes, where classes[i] = [passi, totali]. You know beforehand that in the ith class, there are totali total students, but only passi number of students will pass the exam. You are also given an integer extraStudents. There are another extraStudents brilliant students that are guaranteed to pass the exam of any class they are assigned to. You want to assign each of the extraStudents students to a class in a way that maximizes the average pass ratio across all the classes. The pass ratio of a class is equal to the number of students of the class that will pass the exam divided by the total number of students of the class. The average pass ratio is the sum of pass ratios of all the classes divided by the number of the classes. Return the maximum possible average pass ratio after assigning the extraStudents students. Answers within 10-5 of the actual answer will be accepted. ',
  },
  {
    question_title: 'Maximum Score of a Good Subarray',
    question_text:
      'You are given an array of integers nums (0-indexed) and an integer k. The score of a subarray (i, j) is defined as min(nums[i], nums[i+1], ..., nums[j]) * (j - i + 1). A good subarray is a subarray where i <= k <= j. Return the maximum possible score of a good subarray. ',
  },
  {
    question_title: 'Determine Color of a Chessboard Square',
    question_text:
      'You are given coordinates, a string that represents the coordinates of a square of the chessboard. Below is a chessboard for your reference.  Return true if the square is white, and false if the square is black. The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second. ',
  },
  {
    question_title: 'Sentence Similarity III',
    question_text:
      'A sentence is a list of words that are separated by a single space with no leading or trailing spaces. For example, "Hello World", "HELLO", "hello world hello world" are all sentences. Words consist of only uppercase and lowercase English letters. Two sentences sentence1 and sentence2 are similar if it is possible to insert an arbitrary sentence (possibly empty) inside one of these sentences such that the two sentences become equal. For example, sentence1 = "Hello my name is Jane" and sentence2 = "Hello Jane" can be made equal by inserting "my name is" between "Hello" and "Jane" in sentence2. Given two sentences sentence1 and sentence2, return true if sentence1 and sentence2 are similar. Otherwise, return false. ',
  },
  {
    question_title: 'Maximum Number of Groups Getting Fresh Donuts',
    question_text:
      'There is a donuts shop that bakes donuts in batches of batchSize. They have a rule where they must serve all of the donuts of a batch before serving any donuts of the next batch. You are given an integer batchSize and an integer array groups, where groups[i] denotes that there is a group of groups[i] customers that will visit the shop. Each customer will get exactly one donut. When a group visits the shop, all customers of the group must be served before serving any of the following groups. A group will be happy if they all get fresh donuts. That is, the first customer of the group does not receive a donut that was left over from the previous group. You can freely rearrange the ordering of the groups. Return the maximum possible number of happy groups after rearranging the groups. ',
  },
  {
    question_title: 'Count Nice Pairs in an Array',
    question_text:
      'You are given an array nums that consists of non-negative integers. Let us define rev(x) as the reverse of the non-negative integer x. For example, rev(123) = 321, and rev(120) = 21. A pair of indices (i, j) is nice if it satisfies all of the following conditions: Return the number of nice pairs of indices. Since that number can be too large, return it modulo 109 + 7. ',
  },
  {
    question_title: 'Maximum Ascending Subarray Sum',
    question_text:
      'Given an array of positive integers nums, return the maximum possible sum of an ascending subarray in nums. A subarray is defined as a contiguous sequence of numbers in an array. A subarray [numsl, numsl+1, ..., numsr-1, numsr] is ascending if for all i where l <= i < r, numsi  < numsi+1. Note that a subarray of size 1 is ascending. ',
  },
  {
    question_title: 'Number of Orders in the Backlog',
    question_text:
      'You are given a 2D integer array orders, where each orders[i] = [pricei, amounti, orderTypei] denotes that amounti orders have been placed of type orderTypei at the price pricei. The orderTypei is: Note that orders[i] represents a batch of amounti independent orders with the same price and order type. All orders represented by orders[i] will be placed before all orders represented by orders[i+1] for all valid i. There is a backlog that consists of orders that have not been executed. The backlog is initially empty. When an order is placed, the following happens: Return the total amount of orders in the backlog after placing all the orders from the input. Since this number can be large, return it modulo 109 + 7. ',
  },
  {
    question_title: 'Maximum Value at a Given Index in a Bounded Array',
    question_text:
      'You are given three positive integers:\xa0n, index, and maxSum. You want to construct an array nums (0-indexed) that satisfies the following conditions: Return nums[index] of the constructed array. Note that abs(x) equals x if x >= 0, and -x otherwise. ',
  },
  {
    question_title: 'Maximum Number of Consecutive Values You Can Make',
    question_text:
      'You are given an integer array coins of length n which represents the n coins that you own. The value of the ith coin is coins[i]. You can make some value x if you can choose some of your n coins such that their values sum up to x. Return the maximum number of consecutive integer values that you can make with your coins starting from and including 0. Note that you may have multiple coins of the same value. ',
  },
  {
    question_title: 'Number of Different Integers in a String',
    question_text:
      'You are given a string word that consists of digits and lowercase English letters. You will replace every non-digit character with a space. For example, "a123bc34d8ef34" will become " 123\xa0 34 8\xa0 34". Notice that you are left with some integers that are separated by at least one space: "123", "34", "8", and "34". Return the number of different integers after performing the replacement operations on word. Two integers are considered different if their decimal representations without any leading zeros are different. ',
  },
  {
    question_title: 'Evaluate the Bracket Pairs of a String',
    question_text:
      'You are given a string s that contains some bracket pairs, with each pair containing a non-empty key. You know the values of a wide range of keys. This is represented by a 2D string array knowledge where each knowledge[i] = [keyi, valuei] indicates that key keyi has a value of valuei. You are tasked to evaluate all of the bracket pairs. When you evaluate a bracket pair that contains some key keyi, you will: Each key will appear at most once in your knowledge. There will not be any nested brackets in s. Return the resulting string after evaluating all of the bracket pairs. ',
  },
  {
    question_title: 'Minimum Number of Operations to Reinitialize a Permutation',
    question_text:
      'You are given an even integer n\u200b\u200b\u200b\u200b\u200b\u200b. You initially have a permutation perm of size n\u200b\u200b where perm[i] == i\u200b (0-indexed)\u200b\u200b\u200b\u200b. In one operation, you will create a new array arr, and for each i: You will then assign arr\u200b\u200b\u200b\u200b to perm. Return the minimum non-zero number of operations you need to perform on perm to return the permutation to its initial value. ',
  },
  {
    question_title: 'Maximize Number of Nice Divisors',
    question_text:
      'You are given a positive integer primeFactors. You are asked to construct a positive integer n that satisfies the following conditions: Return the number of nice divisors of n. Since that number can be too large, return it modulo 109 + 7. Note that a prime number is a natural number greater than 1 that is not a product of two smaller natural numbers. The prime factors of a number n is a list of prime numbers such that their product equals n. ',
  },
  {
    question_title: 'Minimum Operations to Make the Array Increasing',
    question_text:
      'You are given an integer array nums (0-indexed). In one operation, you can choose an element of the array and increment it by 1. Return the minimum number of operations needed to make nums strictly increasing. An array nums is strictly increasing if nums[i] < nums[i+1] for all 0 <= i < nums.length - 1. An array of length 1 is trivially strictly increasing. ',
  },
  {
    question_title: 'Queries on Number of Points Inside a Circle',
    question_text:
      'You are given an array points where points[i] = [xi, yi] is the coordinates of the ith point on a 2D plane. Multiple points can have the same coordinates. You are also given an array queries where queries[j] = [xj, yj, rj] describes a circle centered at (xj, yj) with a radius of rj. For each query queries[j], compute the number of points inside the jth circle. Points on the border of the circle are considered inside. Return an array answer, where answer[j] is the answer to the jth query. ',
  },
  {
    question_title: 'Maximum XOR for Each Query',
    question_text:
      'You are given a sorted array nums of n non-negative integers and an integer maximumBit. You want to perform the following query n times: Return an array answer, where answer[i] is the answer to the ith query. ',
  },
  {
    question_title: 'Minimum Number of Operations to Make String Sorted',
    question_text:
      'You are given a string s (0-indexed)\u200b\u200b\u200b\u200b\u200b\u200b. You are asked to perform the following operation on s\u200b\u200b\u200b\u200b\u200b\u200b until you get a sorted string: Return the number of operations needed to make the string sorted. Since the answer can be too large, return it modulo 109 + 7. ',
  },
  {
    question_title: 'Truncate Sentence',
    question_text:
      'A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation). You are given a sentence s\u200b\u200b\u200b\u200b\u200b\u200b and an integer k\u200b\u200b\u200b\u200b\u200b\u200b. You want to truncate s\u200b\u200b\u200b\u200b\u200b\u200b such that it contains only the first k\u200b\u200b\u200b\u200b\u200b\u200b words. Return s\u200b\u200b\u200b\u200b\u200b\u200b after truncating it. ',
  },
  {
    question_title: 'Finding the Users Active Minutes',
    question_text:
      "You are given the logs for users' actions on LeetCode, and an integer k. The logs are represented by a 2D integer array logs where each logs[i] = [IDi, timei] indicates that the user with IDi performed an action at the minute timei. Multiple users can perform actions simultaneously, and a single user can perform multiple actions in the same minute. The user active minutes (UAM) for a given user is defined as the number of unique minutes in which the user performed an action on LeetCode. A minute can only be counted once, even if multiple actions occur during it. You are to calculate a 1-indexed array answer of size k such that, for each j (1 <= j <= k), answer[j] is the number of users whose UAM equals j. Return the array answer as described above. ",
  },
  {
    question_title: 'Minimum Absolute Sum Difference',
    question_text:
      'You are given two positive integer arrays nums1 and nums2, both of length n. The absolute sum difference of arrays nums1 and nums2 is defined as the sum of |nums1[i] - nums2[i]| for each 0 <= i < n (0-indexed). You can replace at most one element of nums1 with any other element in nums1 to minimize the absolute sum difference. Return the minimum absolute sum difference after replacing at most one element in the array nums1. Since the answer may be large, return it modulo 109 + 7. |x| is defined as: ',
  },
  {
    question_title: 'Number of Different Subsequences GCDs',
    question_text:
      'You are given an array nums that consists of positive integers. The GCD of a sequence of numbers is defined as the greatest integer that divides all the numbers in the sequence evenly. A subsequence of an array is a sequence that can be formed by removing some elements (possibly none) of the array. Return the number of different GCDs among all non-empty subsequences of nums. ',
  },
  {
    question_title: 'Sign of the Product of an Array',
    question_text:
      'There is a function signFunc(x) that returns: You are given an integer array nums. Let product be the product of all values in the array nums. Return signFunc(product). ',
  },
  {
    question_title: 'Find the Winner of the Circular Game',
    question_text:
      'There are n friends that are playing a game. The friends are sitting in a circle and are numbered from 1 to n in clockwise order. More formally, moving clockwise from the ith friend brings you to the (i+1)th friend for 1 <= i < n, and moving clockwise from the nth friend brings you to the 1st friend. The rules of the game are as follows: Given the number of friends, n, and an integer k, return the winner of the game. ',
  },
  {
    question_title: 'Minimum Sideway Jumps',
    question_text:
      'There is a 3 lane road of length n that consists of n + 1 points labeled from 0 to n. A frog starts at point 0 in the second lane and wants to jump to point n. However, there could be obstacles along the way. You are given an array obstacles of length n + 1 where each obstacles[i] (ranging from 0 to 3) describes an obstacle on the lane obstacles[i] at point i. If obstacles[i] == 0, there are no obstacles at point i. There will be at most one obstacle in the 3 lanes at each point. The frog can only travel from point i to point i + 1 on the same lane if there is not an obstacle on the lane at point i + 1. To avoid obstacles, the frog can also perform a side jump to jump to another lane (even if they are not adjacent) at the same point if there is no obstacle on the new lane. Return the minimum number of side jumps the frog needs to reach any lane at point n starting from lane 2 at point 0. Note: There will be no obstacles on points 0 and n. ',
  },
  {
    question_title: 'Replace All Digits with Characters',
    question_text:
      "You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices. There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c. For every odd\xa0index i, you want to replace the digit s[i] with shift(s[i-1], s[i]). Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'. ",
  },
  {
    question_title: 'Maximum Element After Decreasing and Rearranging',
    question_text:
      'You are given an array of positive integers arr. Perform some operations (possibly none) on arr so that it satisfies these conditions: There are 2 types of operations that you can perform any number of times: Return the maximum possible value of an element in arr after performing the operations to satisfy the conditions. ',
  },
  {
    question_title: 'Closest Room',
    question_text:
      'There is a hotel with n rooms. The rooms are represented by a 2D integer array rooms where rooms[i] = [roomIdi, sizei] denotes that there is a room with room number roomIdi and size equal to sizei. Each roomIdi is guaranteed to be unique. You are also given k queries in a 2D array queries where queries[j] = [preferredj, minSizej]. The answer to the jth query is the room number id of a room such that: If there is a tie in the absolute difference, then use the room with the smallest such id. If there is no such room, the answer is -1. Return an array answer of length k where answer[j] contains the answer to the jth query. ',
  },
  {
    question_title: 'Check if the Sentence Is Pangram',
    question_text:
      'A pangram is a sentence where every letter of the English alphabet appears at least once. Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise. ',
  },
  {
    question_title: 'Maximum Ice Cream Bars',
    question_text:
      'It is a sweltering summer day, and a boy wants to buy some ice cream bars. At the store, there are n ice cream bars. You are given an array costs of length n, where costs[i] is the price of the ith ice cream bar in coins. The boy initially has coins coins to spend, and he wants to buy as many ice cream bars as possible. Return the maximum number of ice cream bars the boy can buy with coins coins. Note: The boy can buy the ice cream bars in any order. ',
  },
  {
    question_title: 'Single-Threaded CPU',
    question_text:
      'You are given n\u200b\u200b\u200b\u200b\u200b\u200b tasks labeled from 0 to n - 1 represented by a 2D integer array tasks, where tasks[i] = [enqueueTimei, processingTimei] means that the i\u200b\u200b\u200b\u200b\u200b\u200bth\u200b\u200b\u200b\u200b task will be available to process at enqueueTimei and will take processingTimei to finish processing. You have a single-threaded CPU that can process at most one task at a time and will act in the following way: Return the order in which the CPU will process the tasks. ',
  },
  {
    question_title: 'Find XOR Sum of All Pairs Bitwise AND',
    question_text:
      'The XOR sum of a list is the bitwise XOR of all its elements. If the list only contains one element, then its XOR sum will be equal to this element. You are given two 0-indexed arrays arr1 and arr2 that consist only of non-negative integers. Consider the list containing the result of arr1[i] AND arr2[j] (bitwise AND) for every (i, j) pair where 0 <= i < arr1.length and 0 <= j < arr2.length. Return the XOR sum of the aforementioned list. ',
  },
  {
    question_title: 'Sum of Digits in Base K',
    question_text:
      'Given an integer n (in base 10) and a base k, return the sum of the digits of n after converting n from base 10 to base k. After converting, each digit should be interpreted as a base 10 number, and the sum should be returned in base 10. ',
  },
  {
    question_title: 'Frequency of the Most Frequent Element',
    question_text:
      'The frequency of an element is the number of times it occurs in an array. You are given an integer array nums and an integer k. In one operation, you can choose an index of nums and increment the element at that index by 1. Return the maximum possible frequency of an element after performing at most k operations. ',
  },
  {
    question_title: 'Longest Substring Of All Vowels in Order',
    question_text:
      'A string is considered beautiful if it satisfies the following conditions: For example, strings "aeiou" and "aaaaaaeiiiioou" are considered beautiful, but "uaeio", "aeoiu", and "aaaeeeooo" are not beautiful. Given a string word consisting of English vowels, return the length of the longest beautiful substring of word. If no such substring exists, return 0. A substring is a contiguous sequence of characters in a string. ',
  },
  {
    question_title: 'Maximum Building Height',
    question_text:
      'You want to build n new buildings in a city. The new buildings will be built in a line and are labeled from 1 to n. However, there are city restrictions on the heights of the new buildings: Additionally, there are city restrictions on the maximum height of specific buildings. These restrictions are given as a 2D integer array restrictions where restrictions[i] = [idi, maxHeighti] indicates that building idi must have a height less than or equal to maxHeighti. It is guaranteed that each building will appear at most once in restrictions, and building 1 will not be in restrictions. Return the maximum possible height of the tallest building. ',
  },
  {
    question_title: 'Sorting the Sentence',
    question_text:
      'A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters. A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence. Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence. ',
  },
  {
    question_title: 'Rotating the Box',
    question_text:
      "You are given an m x n matrix of characters box representing a side-view of a box. Each cell of the box is one of the following: The box is rotated 90 degrees clockwise, causing some of the stones to fall due to gravity. Each stone falls down until it lands on an obstacle, another stone, or the bottom of the box. Gravity does not affect the obstacles' positions, and the inertia from the box's rotation does not affect the stones' horizontal positions. It is guaranteed that each stone in box rests on an obstacle, another stone, or the bottom of the box. Return an n x m matrix representing the box after the rotation described above. ",
  },
  {
    question_title: 'Minimum Distance to the Target Element',
    question_text:
      'Given an integer array nums (0-indexed) and two integers target and start, find an index i such that nums[i] == target and abs(i - start) is minimized. Note that\xa0abs(x)\xa0is the absolute value of x. Return abs(i - start). It is guaranteed that target exists in nums. ',
  },
  {
    question_title: 'Splitting a String Into Descending Consecutive Values',
    question_text:
      'You are given a string s that consists of only digits. Check if we can split s into two or more non-empty substrings such that the numerical values of the substrings are in descending order and the difference between numerical values of every two adjacent substrings is equal to 1. Return true if it is possible to split s\u200b\u200b\u200b\u200b\u200b\u200b as described above, or false otherwise. A substring is a contiguous sequence of characters in a string. ',
  },
  {
    question_title: 'Minimum Interval to Include Each Query',
    question_text:
      'You are given a 2D integer array intervals, where intervals[i] = [lefti, righti] describes the ith interval starting at lefti and ending at righti (inclusive). The size of an interval is defined as the number of integers it contains, or more formally righti - lefti + 1. You are also given an integer array queries. The answer to the jth query is the size of the smallest interval i such that lefti <= queries[j] <= righti. If no such interval exists, the answer is -1. Return an array containing the answers to the queries. ',
  },
  {
    question_title: 'Minimum Adjacent Swaps to Reach the Kth Smallest Number',
    question_text:
      'You are given a string num, representing a large integer, and an integer k. We call some integer wonderful if it is a permutation of the digits in num and is greater in value than num. There can be many wonderful integers. However, we only care about the smallest-valued ones. Return the minimum number of adjacent digit swaps that needs to be applied to num to reach the kth smallest wonderful integer. The tests are generated in such a way that kth\xa0smallest wonderful integer exists. ',
  },
  {
    question_title: 'Maximum Population Year',
    question_text:
      "You are given a 2D integer array logs where each logs[i] = [birthi, deathi] indicates the birth and death years of the ith person. The population of some year x is the number of people alive during that year. The ith person is counted in year x's population if x is in the inclusive range [birthi, deathi - 1]. Note that the person is not counted in the year that they die. Return the earliest year with the maximum population. ",
  },
  {
    question_title: 'Maximum Distance Between a Pair of Values',
    question_text:
      'You are given two non-increasing 0-indexed integer arrays nums1\u200b\u200b\u200b\u200b\u200b\u200b and nums2\u200b\u200b\u200b\u200b\u200b\u200b. A pair of indices (i, j), where 0 <= i < nums1.length and 0 <= j < nums2.length, is valid if both i <= j and nums1[i] <= nums2[j]. The distance of the pair is j - i\u200b\u200b\u200b\u200b. Return the maximum distance of any valid pair (i, j). If there are no valid pairs, return 0. An array arr is non-increasing if arr[i-1] >= arr[i] for every 1 <= i < arr.length. ',
  },
  {
    question_title: 'Maximum Subarray Min-Product',
    question_text:
      "The min-product of an array is equal to the minimum value in the array multiplied by the array's sum. Given an array of integers nums, return the maximum min-product of any non-empty subarray of nums. Since the answer may be large, return it modulo 109 + 7. Note that the min-product should be maximized before performing the modulo operation. Testcases are generated such that the maximum min-product without modulo will fit in a 64-bit signed integer. A subarray is a contiguous part of an array. ",
  },
  {
    question_title: 'Largest Color Value in a Directed Graph',
    question_text:
      'There is a directed graph of n colored nodes and m edges. The nodes are numbered from 0 to n - 1. You are given a string colors where colors[i] is a lowercase English letter representing the color of the ith node in this graph (0-indexed). You are also given a 2D array edges where edges[j] = [aj, bj] indicates that there is a directed edge from node aj to node bj. A valid path in the graph is a sequence of nodes x1 -> x2 -> x3 -> ... -> xk such that there is a directed edge from xi to xi+1 for every 1 <= i < k. The color value of the path is the number of nodes that are colored the most frequently occurring color along that path. Return the largest color value of any valid path in the given graph, or -1 if the graph contains a cycle. ',
  },
  {
    question_title: 'Substrings of Size Three with Distinct Characters',
    question_text:
      'A string is good if there are no repeated characters. Given a string s\u200b\u200b\u200b\u200b\u200b, return the number of good substrings of length three in s\u200b\u200b\u200b\u200b\u200b\u200b. Note that if there are multiple occurrences of the same substring, every occurrence should be counted. A substring is a contiguous sequence of characters in a string. ',
  },
  {
    question_title: 'Minimize Maximum Pair Sum in Array',
    question_text:
      'The pair sum of a pair (a,b) is equal to a + b. The maximum pair sum is the largest pair sum in a list of pairs. Given an array nums of even length n, pair up the elements of nums into n / 2 pairs such that: Return the minimized maximum pair sum after optimally pairing up the elements. ',
  },
  {
    question_title: 'Minimum XOR Sum of Two Arrays',
    question_text:
      'You are given two integer arrays nums1 and nums2 of length n. The XOR sum of the two integer arrays is (nums1[0] XOR nums2[0]) + (nums1[1] XOR nums2[1]) + ... + (nums1[n - 1] XOR nums2[n - 1]) (0-indexed). Rearrange the elements of nums2 such that the resulting XOR sum is minimized. Return the XOR sum after the rearrangement. ',
  },
  {
    question_title: 'Get Biggest Three Rhombus Sums in a Grid',
    question_text:
      'You are given an m x n integer matrix grid\u200b\u200b\u200b. A rhombus sum is the sum of the elements that form the border of a regular rhombus shape in grid\u200b\u200b\u200b. The rhombus must have the shape of a square rotated 45 degrees with each of the corners centered in a grid cell. Below is an image of four valid rhombus shapes with the corresponding colored cells that should be included in each rhombus sum: Note that the rhombus can have an area of 0, which is depicted by the purple rhombus in the bottom right corner. Return the biggest three distinct rhombus sums in the grid in descending order. If there are less than three distinct values, return all of them. ',
  },
  {
    question_title: 'Sum of All Subset XOR Totals',
    question_text:
      'The XOR total of an array is defined as the bitwise XOR of all its elements, or 0 if the array is empty. Given an array nums, return the sum of all XOR totals for every subset of nums. Note: Subsets with the same elements should be counted multiple times. An array a is a subset of an array b if a can be obtained from b by deleting some (possibly zero) elements of b. ',
  },
  {
    question_title: 'Minimum Number of Swaps to Make the Binary String Alternating',
    question_text:
      'Given a binary string s, return the minimum number of character swaps to make it alternating, or -1 if it is impossible. The string is called alternating if no two adjacent characters are equal. For example, the strings "010" and "1010" are alternating, while the string "0100" is not. Any two characters may be swapped, even if they are\xa0not adjacent. ',
  },
  {
    question_title: 'Finding Pairs With a Certain Sum',
    question_text:
      'You are given two integer arrays nums1 and nums2. You are tasked to implement a data structure that supports queries of two types: Implement the FindSumPairs class: ',
  },
  {
    question_title: 'Number of Ways to Rearrange Sticks With K Sticks Visible',
    question_text:
      'There are n uniquely-sized sticks whose lengths are integers from 1 to n. You want to arrange the sticks such that exactly k\xa0sticks are visible from the left. A stick\xa0is visible from the left if there are no longer\xa0sticks to the left of it. Given n and k, return the number of such arrangements. Since the answer may be large, return it modulo 109 + 7. ',
  },
  {
    question_title: 'Longer Contiguous Segments of Ones than Zeros',
    question_text:
      "Given a binary string s, return true if the longest contiguous segment of 1's is strictly longer than the longest contiguous segment of 0's in s, or return false otherwise. Note that if there are no 0's, then the longest continuous segment of 0's is considered to have a length 0. The same applies if there is no 1's. ",
  },
  {
    question_title: 'Minimum Speed to Arrive on Time',
    question_text:
      'You are given a floating-point number hour, representing the amount of time you have to reach the office. To commute to the office, you must take n trains in sequential order. You are also given an integer array dist of length n, where dist[i] describes the distance (in kilometers) of the ith train ride. Each train can only depart at an integer hour, so you may need to wait in between each train ride. Return the minimum positive integer speed (in kilometers per hour) that all the trains must travel at for you to reach the office on time, or -1 if it is impossible to be on time. Tests are generated such that the answer will not exceed 107 and hour will have at most two digits after the decimal point. ',
  },
  {
    question_title: 'Jump Game VII',
    question_text:
      "You are given a 0-indexed binary string s and two integers minJump and maxJump. In the beginning, you are standing at index 0, which is equal to '0'. You can move from index i to index j if the following conditions are fulfilled: Return true if you can reach index s.length - 1 in s, or false otherwise. ",
  },
  {
    question_title: 'Stone Game VIII',
    question_text:
      "Alice and Bob take turns playing a game, with Alice starting first. There are n stones arranged in a row. On each player's turn, while the number of stones is more than one, they will do the following: The game stops when only one stone is left in the row. The score difference between Alice and Bob is (Alice's score - Bob's score). Alice's goal is to maximize the score difference, and Bob's goal is the minimize the score difference. Given an integer array stones of length n where stones[i] represents the value of the ith stone from the left, return the score difference between Alice and Bob if they both play optimally. ",
  },
  {
    question_title: 'Check if All the Integers in a Range Are Covered',
    question_text:
      'You are given a 2D integer array ranges and two integers left and right. Each ranges[i] = [starti, endi] represents an inclusive interval between starti and endi. Return true if each integer in the inclusive range [left, right] is covered by at least one interval in ranges. Return false otherwise. An integer x is covered by an interval ranges[i] = [starti, endi] if starti <= x <= endi. ',
  },
  {
    question_title: 'Find the Student that Will Replace the Chalk',
    question_text:
      'There are n students in a class numbered from 0 to n - 1. The teacher will give each student a problem starting with the student number 0, then the student number 1, and so on until the teacher reaches the student number n - 1. After that, the teacher will restart the process, starting with the student number 0 again. You are given a 0-indexed integer array chalk and an integer k. There are initially k pieces of chalk. When the student number i is given a problem to solve, they will use chalk[i] pieces of chalk to solve that problem. However, if the current number of chalk pieces is strictly less than chalk[i], then the student number i will be asked to replace the chalk. Return the index of the student that will replace the chalk. ',
  },
  {
    question_title: 'Minimum Cost to Change the Final Value of Expression',
    question_text:
      "You are given a valid boolean expression as a string expression consisting of the characters '1','0','&' (bitwise AND operator),'|' (bitwise OR operator),'(', and ')'. Return the minimum cost to change the final value of the expression. The cost of changing the final value of an expression is the number of operations performed on the expression. The types of operations are described as follows: Note: '&' does not take precedence over '|' in the order of calculation. Evaluate parentheses first, then in left-to-right order. ",
  },
  {
    question_title: 'Check if Word Equals Summation of Two Words',
    question_text:
      "The letter value of a letter is its position in the alphabet starting from 0 (i.e. 'a' -> 0, 'b' -> 1, 'c' -> 2, etc.). The numerical value of some string of lowercase English letters s is the concatenation of the letter values of each letter in s, which is then converted into an integer. You are given three strings firstWord, secondWord, and targetWord, each consisting of lowercase English letters 'a' through 'j' inclusive. Return true if the summation of the numerical values of firstWord and secondWord equals the numerical value of targetWord, or false otherwise. ",
  },
  {
    question_title: 'Maximum Value after Insertion',
    question_text:
      "You are given a very large integer n, represented as a string,\u200b\u200b\u200b\u200b\u200b\u200b and an integer digit x. The digits in n and the digit x are in the inclusive range [1, 9], and n may represent a negative number. You want to maximize n's numerical value by inserting x anywhere in the decimal representation of n\u200b\u200b\u200b\u200b\u200b\u200b. You cannot insert x to the left of the negative sign. Return a string representing the maximum value of n\u200b\u200b\u200b\u200b\u200b\u200b after the insertion. ",
  },
  {
    question_title: 'Process Tasks Using Servers',
    question_text:
      'You are given two 0-indexed integer arrays servers and tasks of lengths n\u200b\u200b\u200b\u200b\u200b\u200b and m\u200b\u200b\u200b\u200b\u200b\u200b respectively. servers[i] is the weight of the i\u200b\u200b\u200b\u200b\u200b\u200bth\u200b\u200b\u200b\u200b server, and tasks[j] is the time needed to process the j\u200b\u200b\u200b\u200b\u200b\u200bth\u200b\u200b\u200b\u200b task in seconds. Tasks are assigned to the servers using a task queue. Initially, all servers are free, and the queue is empty. At second j, the jth task is inserted into the queue (starting with the 0th task being inserted at second 0). As long as there are free servers and the queue is not empty, the task in the front of the queue will be assigned to a free server with the smallest weight, and in case of a tie, it is assigned to a free server with the smallest index. If there are no free servers and the queue is not empty, we wait until a server becomes free and immediately assign the next task. If multiple servers become free at the same time, then multiple tasks from the queue will be assigned in order of insertion following the weight and index priorities above. A server that is assigned task j at second t will be free again at second t + tasks[j]. Build an array ans\u200b\u200b\u200b\u200b of length m, where ans[j] is the index of the server the j\u200b\u200b\u200b\u200b\u200b\u200bth task will be assigned to. Return the array ans\u200b\u200b\u200b\u200b. ',
  },
  {
    question_title: 'Minimum Skips to Arrive at Meeting On Time',
    question_text:
      'You are given an integer hoursBefore, the number of hours you have to travel to your meeting. To arrive at your meeting, you have to travel through n roads. The road lengths are given as an integer array dist of length n, where dist[i] describes the length of the ith road in kilometers. In addition, you are given an integer speed, which is the speed (in km/h) you will travel at. After you travel road i, you must rest and wait for the next integer hour before you can begin traveling on the next road. Note that you do not have to rest after traveling the last road because you are already at the meeting. However, you are allowed to skip some rests to be able to arrive on time, meaning you do not need to wait for the next integer hour. Note that this means you may finish traveling future roads at different hour marks. Return the minimum number of skips required to arrive at the meeting on time, or -1 if it is impossible. ',
  },
  {
    question_title: 'Determine Whether Matrix Can Be Obtained By Rotation',
    question_text:
      'Given two n x n binary matrices mat and target, return true if it is possible to make mat equal to target by rotating mat in 90-degree increments, or false otherwise. ',
  },
  {
    question_title: 'Reduction Operations to Make the Array Elements Equal',
    question_text:
      'Given an integer array nums, your goal is to make all elements in nums equal. To complete one operation, follow these steps: Return the number of operations to make all elements in nums equal. ',
  },
  {
    question_title: 'Minimum Number of Flips to Make the Binary String Alternating',
    question_text:
      'You are given a binary string s. You are allowed to perform two types of operations on the string in any sequence: Return the minimum number of type-2 operations you need to perform such that s becomes alternating. The string is called alternating if no two adjacent characters are equal. ',
  },
  {
    question_title: 'Minimum Space Wasted From Packaging',
    question_text:
      'You have n packages that you are trying to place in boxes, one package in each box. There are m suppliers that each produce boxes of different sizes (with infinite supply). A package can be placed in a box if the size of the package is less than or equal to the size of the box. The package sizes are given as an integer array packages, where packages[i] is the size of the ith package. The suppliers are given as a 2D integer array boxes, where boxes[j] is an array of box sizes that the jth supplier produces. You want to choose a single supplier and use boxes from them such that the total wasted space is minimized. For each package in a box, we define the space wasted to be size of the box - size of the package. The total wasted space is the sum of the space wasted in all the boxes. Return the minimum total wasted space by choosing the box supplier optimally, or -1 if it is impossible to fit all the packages inside boxes. Since the answer may be large, return it modulo 109 + 7. ',
  },
  {
    question_title: 'Remove One Element to Make the Array Strictly Increasing',
    question_text:
      'Given a 0-indexed integer array nums, return true if it can be made strictly increasing after removing exactly one element, or false otherwise. If the array is already strictly increasing, return true. The array nums is strictly increasing if nums[i - 1] < nums[i] for each index (1 <= i < nums.length). ',
  },
  {
    question_title: 'Remove All Occurrences of a Substring',
    question_text:
      'Given two strings s and part, perform the following operation on s until all occurrences of the substring part are removed: Return s after removing all occurrences of part. A substring is a contiguous sequence of characters in a string. ',
  },
  {
    question_title: 'Maximum Alternating Subsequence Sum',
    question_text:
      "The alternating sum of a 0-indexed array is defined as the sum of the elements at even indices minus the sum of the elements at odd indices. Given an array nums, return the maximum alternating sum of any subsequence of nums (after reindexing the elements of the subsequence). A subsequence of an array is a new array generated from the original array by deleting some elements (possibly none) without changing the remaining elements' relative order. For example, [2,7,4] is a subsequence of [4,2,3,7,2,1,4] (the underlined elements), while [2,4,2] is not. ",
  },
  {
    question_title: 'Design Movie Rental System',
    question_text:
      'You have a movie renting company consisting of n shops. You want to implement a renting system that supports searching for, booking, and returning movies. The system should also support generating a report of the currently rented movies. Each movie is given as a 2D integer array entries where entries[i] = [shopi, moviei, pricei] indicates that there is a copy of movie moviei at shop shopi with a rental price of pricei. Each shop carries at most one copy of a movie moviei. The system should support the following functions: Implement the MovieRentingSystem class: Note: The test cases will be generated such that rent will only be called if the shop has an unrented copy of the movie, and drop will only be called if the shop had previously rented out the movie. ',
  },
  {
    question_title: 'Redistribute Characters to Make All Strings Equal',
    question_text:
      'You are given an array of strings words (0-indexed). In one operation, pick two distinct indices i and j, where words[i] is a non-empty string, and move any character from words[i] to any position in words[j]. Return true if you can make every string in words equal using any number of operations, and false otherwise. ',
  },
  {
    question_title: 'Merge Triplets to Form Target Triplet',
    question_text:
      'A triplet is an array of three integers. You are given a 2D integer array triplets, where triplets[i] = [ai, bi, ci] describes the ith triplet. You are also given an integer array target = [x, y, z] that describes the triplet you want to obtain. To obtain target, you may apply the following operation on triplets any number of times (possibly zero): Return true if it is possible to obtain the target triplet [x, y, z] as an element of triplets, or false otherwise. ',
  },
  {
    question_title: 'Maximum Number of Removable Characters',
    question_text:
      'You are given two strings s and p where p is a subsequence of s. You are also given a distinct 0-indexed integer array removable containing a subset of indices of s (s is also 0-indexed). You want to choose an integer k (0 <= k <= removable.length) such that, after removing k characters from s using the first k indices in removable, p is still a subsequence of s. More formally, you will mark the character at s[removable[i]] for each 0 <= i < k, then remove all marked characters and check if p is still a subsequence. Return the maximum k you can choose such that p is still a subsequence of s after the removals. A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters. ',
  },
  {
    question_title: 'The Earliest and Latest Rounds Where Players Compete',
    question_text:
      'There is a tournament where n players are participating. The players are standing in a single row and are numbered from 1 to n based on their initial standing position (player 1 is the first player in the row, player 2 is the second player in the row, etc.). The tournament consists of multiple rounds (starting from round number 1). In each round, the ith player from the front of the row competes against the ith player from the end of the row, and the winner advances to the next round. When the number of players is odd for the current round, the player in the middle automatically advances to the next round. After each round is over, the winners are lined back up in the row based on the original ordering assigned to them initially (ascending order). The players numbered firstPlayer and secondPlayer are the best in the tournament. They can win against any other player before they compete against each other. If any two other players compete against each other, either of them might win, and thus you may choose the outcome of this round. Given the integers n, firstPlayer, and secondPlayer, return an integer array containing two values, the earliest possible round number and the\xa0latest possible round number in which these two players will compete against each other, respectively. ',
  },
  {
    question_title: 'Egg Drop With 2 Eggs and N Floors',
    question_text:
      'You are given two identical eggs and you have access to a building with n floors labeled from 1 to n. You know that there exists a floor f where 0 <= f <= n such that any egg dropped at a floor higher than f will break, and any egg dropped at or below floor f will not break. In each move, you may take an unbroken egg and drop it from any floor x (where 1 <= x <= n). If the egg breaks, you can no longer use it. However, if the egg does not break, you may reuse it in future moves. Return the minimum number of moves that you need to determine with certainty what the value of f is. ',
  },
  {
    question_title: 'Largest Odd Number in String',
    question_text:
      'You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists. A substring is a contiguous sequence of characters within a string. ',
  },
  {
    question_title: 'The Number of Full Rounds You Have Played',
    question_text:
      'You are participating in an online chess tournament. There is a chess round that starts every 15 minutes. The first round of the day starts at 00:00, and after every 15 minutes, a new round starts. You are given two strings loginTime and logoutTime where: If logoutTime is earlier than loginTime, this means you have played from loginTime to midnight and from midnight to logoutTime. Return the number of full chess rounds you have played in the tournament. Note:\xa0All the given times follow the 24-hour clock. That means the first round of the day starts at 00:00 and the last round of the day starts at 23:45. ',
  },
  {
    question_title: 'Minimum Absolute Difference Queries',
    question_text:
      'The minimum absolute difference of an array a is defined as the minimum value of |a[i] - a[j]|, where 0 <= i < j < a.length and a[i] != a[j]. If all elements of a are the same, the minimum absolute difference is -1. You are given an integer array nums and the array queries where queries[i] = [li, ri]. For each query i, compute the minimum absolute difference of the subarray nums[li...ri] containing the elements of nums between the 0-based indices li and ri (inclusive). Return an array ans where ans[i] is the answer to the ith query. A subarray is a contiguous sequence of elements in an array. The value of |x| is defined as: ',
  },
  {
    question_title: 'Count Sub Islands',
    question_text:
      "You are given two m x n binary matrices grid1 and grid2 containing only 0's (representing water) and 1's (representing land). An island is a group of 1's connected 4-directionally (horizontal or vertical). Any cells outside of the grid are considered water cells. An island in grid2 is considered a sub-island if there is an island in grid1 that contains all the cells that make up this island in grid2. Return the number of islands in grid2 that are considered sub-islands. ",
  },
  {
    question_title: 'Count Square Sum Triples',
    question_text:
      'A square triple (a,b,c) is a triple where a, b, and c are integers and a2 + b2 = c2. Given an integer n, return the number of square triples such that 1 <= a, b, c <= n. ',
  },
  {
    question_title: 'Nearest Exit from Entrance in Maze',
    question_text:
      "You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') and walls (represented as '+'). You are also given the entrance of the maze, where entrance = [entrancerow, entrancecol] denotes the row and column of the cell you are initially standing at. In one step, you can move one cell up, down, left, or right. You cannot step into a cell with a wall, and you cannot step outside the maze. Your goal is to find the nearest exit from the entrance. An exit is defined as an empty cell that is at the border of the maze. The entrance does not count as an exit. Return the number of steps in the shortest path from the entrance to the nearest exit, or -1 if no such path exists. ",
  },
  {
    question_title: 'Sum Game',
    question_text:
      "Alice and Bob take turns playing a game, with Alice\xa0starting first. You are given a string num of even length consisting of digits and '?' characters. On each turn, a player will do the following if there is still at least one '?' in num: The game ends when there are no more '?' characters in num. For Bob\xa0to win, the sum of the digits in the first half of num must be equal to the sum of the digits in the second half. For Alice\xa0to win, the sums must not be equal. Assuming Alice and Bob play optimally, return true if Alice will win and false if Bob will win. ",
  },
  {
    question_title: 'Minimum Cost to Reach Destination in Time',
    question_text:
      'There is a country of n cities numbered from 0 to n - 1 where all the cities are connected by bi-directional roads. The roads are represented as a 2D integer array edges where edges[i] = [xi, yi, timei] denotes a road between cities xi and yi that takes timei minutes to travel. There may be multiple roads of differing travel times connecting the same two cities, but no road connects a city to itself. Each time you pass through a city, you must pay a passing fee. This is represented as a 0-indexed integer array passingFees of length n where passingFees[j] is the amount of dollars you must pay when you pass through city j. In the beginning, you are at city 0 and want to reach city n - 1 in maxTime minutes or less. The cost of your journey is the summation of passing fees for each city that you passed through at some moment of your journey (including the source and destination cities). Given maxTime, edges, and passingFees, return the minimum cost to complete your journey, or -1 if you cannot complete it within maxTime minutes. ',
  },
  {
    question_title: 'Maximum Product Difference Between Two Pairs',
    question_text:
      'The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d). Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized. Return the maximum such product difference. ',
  },
  {
    question_title: 'Cyclically Rotating a Grid',
    question_text:
      'You are given an m x n integer matrix grid\u200b\u200b\u200b, where m and n are both even integers, and an integer k. The matrix is composed of several layers, which is shown in the below image, where each color is its own layer:  A cyclic rotation of the matrix is done by cyclically rotating each layer in the matrix. To cyclically rotate a layer once, each element in the layer will take the place of the adjacent element in the counter-clockwise direction. An example rotation is shown below: Return the matrix after applying k cyclic rotations to it. ',
  },
  {
    question_title: 'Number of Wonderful Substrings',
    question_text:
      "A wonderful string is a string where at most one letter appears an odd number of times. Given a string word that consists of the first ten lowercase English letters ('a' through 'j'), return the number of wonderful non-empty substrings in word. If the same substring appears multiple times in word, then count each occurrence separately. A substring is a contiguous sequence of characters in a string. ",
  },
  {
    question_title: 'Find a Peak Element II',
    question_text:
      'A peak element in a 2D grid is an element that is strictly greater than all of its adjacent neighbors to the left, right, top, and bottom. Given a 0-indexed m x n matrix mat where no two adjacent cells are equal, find any peak element mat[i][j] and return the length 2 array [i,j]. You may assume that the entire matrix is surrounded by an outer perimeter with the value -1 in each cell. You must write an algorithm that runs in O(m log(n)) or O(n log(m)) time. ',
  },
  {
    question_title: 'Build Array from Permutation',
    question_text:
      'Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it. A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive). ',
  },
  {
    question_title: 'Eliminate Maximum Number of Monsters',
    question_text:
      'You are playing a video game where you are defending your city from a group of n monsters. You are given a 0-indexed integer array dist of size n, where dist[i] is the initial distance in kilometers of the ith monster from the city. The monsters walk toward the city at a constant speed. The speed of each monster is given to you in an integer array speed of size n, where speed[i] is the speed of the ith monster in kilometers per minute. You have a weapon that, once fully charged, can eliminate a single monster. However, the weapon takes one minute to charge.The weapon is fully charged at the very start. You lose when any monster reaches your city. If a monster reaches the city at the exact moment the weapon is fully charged, it counts as a loss, and the game ends before you can use your weapon. Return the maximum number of monsters that you can eliminate before you lose, or n if you can eliminate all the monsters before they reach the city. ',
  },
  {
    question_title: 'Count Good Numbers',
    question_text:
      'A digit string is good if the digits (0-indexed) at even indices are even and the digits at odd indices are prime (2, 3, 5, or 7). Given an integer n, return the total number of good digit strings of length n. Since the answer may be large, return it modulo 109 + 7. A digit string is a string consisting of digits 0 through 9 that may contain leading zeros. ',
  },
  {
    question_title: 'Longest Common Subpath',
    question_text:
      "There is a country of n cities numbered from 0 to n - 1. In this country, there is a road connecting every pair of cities. There are m friends numbered from 0 to m - 1 who are traveling through the country. Each one of them will take a path consisting of some cities. Each path is represented by an integer array that contains the visited cities in order. The path may contain a city more than once, but the same city will not be listed consecutively. Given an integer n and a 2D integer array paths where paths[i] is an integer array representing the path of the ith friend, return the length of the longest common subpath that is shared by every friend's path, or 0 if there is no common subpath at all. A subpath of a path is a contiguous sequence of cities within that path. ",
  },
  {
    question_title: 'Check if All Characters Have Equal Number of Occurrences',
    question_text:
      'Given a string s, return true if s is a good string, or false otherwise. A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency). ',
  },
  {
    question_title: 'The Number of the Smallest Unoccupied Chair',
    question_text:
      'There is a party where n friends numbered from 0 to n - 1 are attending. There is an infinite number of chairs in this party that are numbered from 0 to infinity. When a friend arrives at the party, they sit on the unoccupied chair with the smallest number. When a friend leaves the party, their chair becomes unoccupied at the moment they leave. If another friend arrives at that same moment, they can sit in that chair. You are given a 0-indexed 2D integer array times where times[i] = [arrivali, leavingi], indicating the arrival and leaving times of the ith friend respectively, and an integer targetFriend. All arrival times are distinct. Return the chair number that the friend numbered targetFriend will sit on. ',
  },
  {
    question_title: 'Describe the Painting',
    question_text:
      'There is a long and thin painting that can be represented by a number line. The painting was painted with multiple overlapping segments where each segment was painted with a unique color. You are given a 2D integer array segments, where segments[i] = [starti, endi, colori] represents the half-closed segment [starti, endi) with colori as the color. The colors in the overlapping segments of the painting were mixed when it was painted. When two or more colors mix, they form a new color that can be represented as a set of mixed colors. For the sake of simplicity, you should only output the sum of the elements in the set rather than the full set. You want to describe the painting with the minimum number of non-overlapping half-closed segments of these mixed colors. These segments can be represented by the 2D array painting where painting[j] = [leftj, rightj, mixj] describes a half-closed segment [leftj, rightj) with the mixed color sum of mixj. Return the 2D array painting describing the finished painting (excluding any parts that are not painted). You may return the segments in any order. A half-closed segment [a, b) is the section of the number line between points a and b including point a and not including point b. ',
  },
  {
    question_title: 'Concatenation of Array',
    question_text:
      'Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed). Specifically, ans is the concatenation of two nums arrays. Return the array ans. ',
  },
  {
    question_title: 'Unique Length-3 Palindromic Subsequences',
    question_text:
      'Given a string s, return the number of unique palindromes of length three that are a subsequence of s. Note that even if there are multiple ways to obtain the same subsequence, it is still only counted once. A palindrome is a string that reads the same forwards and backwards. A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters. ',
  },
  {
    question_title: 'Merge BSTs to Create Single BST',
    question_text:
      'You are given n BST (binary search tree) root nodes for n separate BSTs stored in an array trees (0-indexed). Each BST in trees has at most 3 nodes, and no two roots have the same value. In one operation, you can: Return the root of the resulting BST if it is possible to form a valid BST after performing n - 1 operations, or null if it is impossible to create a valid BST. A BST (binary search tree) is a binary tree where each node satisfies the following property: A leaf is a node that has no children. ',
  },
  {
    question_title: 'Painting a Grid With Three Different Colors',
    question_text:
      'You are given two integers m and n. Consider an m x n grid where each cell is initially white. You can paint each cell red, green, or blue. All cells must be painted. Return the number of ways to color the grid with no two adjacent cells having the same color. Since the answer can be very large, return it modulo 109 + 7. ',
  },
  {
    question_title: 'Add Minimum Number of Rungs',
    question_text:
      'You are given a strictly increasing integer array rungs that represents the height of rungs on a ladder. You are currently on the floor at height 0, and you want to reach the last rung. You are also given an integer dist. You can only climb to the next highest rung if the distance between where you are currently at (the floor or on a rung) and the next rung is at most dist. You are able to insert rungs at any positive integer height if a rung is not already there. Return the minimum number of rungs that must be added to the ladder in order for you to climb to the last rung. ',
  },
  {
    question_title: 'Maximum Number of Points with Cost',
    question_text:
      'You are given an m x n integer matrix points (0-indexed). Starting with 0 points, you want to maximize the number of points you can get from the matrix. To gain points, you must pick one cell in each row. Picking the cell at coordinates (r, c) will add points[r][c] to your score. However, you will lose points if you pick a cell too far from the cell that you picked in the previous row. For every two adjacent rows r and r + 1 (where 0 <= r < m - 1), picking cells at coordinates (r, c1) and (r + 1, c2) will subtract abs(c1 - c2) from your score. Return the maximum number of points you can achieve. abs(x) is defined as: ',
  },
  {
    question_title: 'Maximum Genetic Difference Query',
    question_text:
      "There is a rooted tree consisting of n nodes numbered 0 to n - 1. Each node's number denotes its unique genetic value (i.e. the genetic value of node x is x). The genetic difference between two genetic values is defined as the bitwise-XOR of their values. You are given the integer array parents, where parents[i] is the parent for node i. If node x is the root of the tree, then parents[x] == -1. You are also given the array queries where queries[i] = [nodei, vali]. For each query i, find the maximum genetic difference between vali and pi, where pi is the genetic value of any node that is on the path between nodei and the root (including nodei and the root). More formally, you want to maximize vali XOR pi. Return an array ans where ans[i] is the answer to the ith query. ",
  },
  {
    question_title: 'Sum of Digits of String After Convert',
    question_text:
      "You are given a string s consisting of lowercase English letters, and an integer k. First, convert s into an integer by replacing each letter with its position in the alphabet (i.e., replace 'a' with 1, 'b' with 2, ..., 'z' with 26). Then, transform the integer by replacing it with the sum of its digits. Repeat the transform operation k times in total. For example, if s = \"zbax\" and k = 2, then the resulting integer would be 8 by the following operations: Return the resulting integer after performing the operations described above. ",
  },
  {
    question_title: 'Largest Number After Mutating Substring',
    question_text:
      'You are given a string num, which represents a large integer. You are also given a 0-indexed integer array change of length 10 that maps each digit 0-9 to another digit. More formally, digit d maps to digit change[d]. You may choose to mutate a single substring of num. To mutate a substring, replace each digit num[i] with the digit it maps to in change (i.e. replace num[i] with change[num[i]]). Return a string representing the largest possible integer after mutating (or choosing not to) a single substring of num. A substring is a contiguous sequence of characters within the string. ',
  },
  {
    question_title: 'Maximum Compatibility Score Sum',
    question_text:
      "There is a survey that consists of n questions where each question's answer is either 0 (no) or 1 (yes). The survey was given to m students numbered from 0 to m - 1 and m mentors numbered from 0 to m - 1. The answers of the students are represented by a 2D integer array students where students[i] is an integer array that contains the answers of the ith student (0-indexed). The answers of the mentors are represented by a 2D integer array mentors where mentors[j] is an integer array that contains the answers of the jth mentor (0-indexed). Each student will be assigned to one mentor, and each mentor will have one student assigned to them. The compatibility score of a student-mentor pair is the number of answers that are the same for both the student and the mentor. You are tasked with finding the optimal student-mentor pairings to maximize the sum of the compatibility scores. Given students and mentors, return the maximum compatibility score sum that can be achieved. ",
  },
  {
    question_title: 'Delete Duplicate Folders in System',
    question_text:
      'Due to a bug, there are many duplicate folders in a file system. You are given a 2D array paths, where paths[i] is an array representing an absolute path to the ith folder in the file system. Two folders (not necessarily on the same level) are identical if they contain the same non-empty set of identical subfolders and underlying subfolder structure. The folders do not need to be at the root level to be identical. If two or more folders are identical, then mark the folders as well as all their subfolders. Once all the identical folders and their subfolders have been marked, the file system will delete all of them. The file system only runs the deletion once, so any folders that become identical after the initial deletion are not deleted. Return the 2D array ans containing the paths of the remaining folders after deleting all the marked folders. The paths may be returned in any order. ',
  },
  {
    question_title: 'Check if Move is Legal',
    question_text:
      "You are given a 0-indexed 8 x 8 grid board, where board[r][c] represents the cell (r, c) on a game board. On the board, free cells are represented by '.', white cells are represented by 'W', and black cells are represented by 'B'. Each move in this game consists of choosing a free cell and changing it to the color you are playing as (either white or black). However, a move is only legal if, after changing it, the cell becomes the endpoint of a good line (horizontal, vertical, or diagonal). A good line is a line of three or more cells (including the endpoints) where the endpoints of the line are one color, and the remaining cells in the middle are the opposite color (no cells in the line are free). You can find examples for good lines in the figure below: Given two integers rMove and cMove and a character color representing the color you are playing as (white or black), return true if changing cell (rMove, cMove) to color color is a legal move, or false if it is not legal. ",
  },
  {
    question_title: 'Minimum Total Space Wasted With K Resizing Operations',
    question_text:
      'You are currently designing a dynamic array. You are given a 0-indexed integer array nums, where nums[i] is the number of elements that will be in the array at time i. In addition, you are given an integer k, the maximum number of times you can resize the array (to any size). The size of the array at time t, sizet, must be at least nums[t] because there needs to be enough space in the array to hold all the elements. The space wasted at\xa0time t is defined as sizet - nums[t], and the total space wasted is the sum of the space wasted across every time t where 0 <= t < nums.length. Return the minimum total space wasted if you can resize the array at most k times. Note: The array can have any size at the start and does not count towards the number of resizing operations. ',
  },
  {
    question_title: 'Three Divisors',
    question_text:
      'Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false. An integer m is a divisor of n if there exists an integer k such that n = k * m. ',
  },
  {
    question_title: 'Maximum Number of Weeks for Which You Can Work',
    question_text:
      "There are n projects numbered from 0 to n - 1. You are given an integer array milestones where each milestones[i] denotes the number of milestones the ith project has. You can work on the projects following these two rules: Once all the milestones of all the projects are finished, or if the only milestones that you can work on will cause you to violate the above rules, you will stop working. Note that you may not be able to finish every project's milestones due to these constraints. Return the maximum number of weeks you would be able to work on the projects without violating the rules mentioned above. ",
  },
  {
    question_title: 'Array With Elements Not Equal to Average of Neighbors',
    question_text:
      'You are given a 0-indexed array nums of distinct integers. You want to rearrange the elements in the array such that every element in the rearranged array is not equal to the average of its neighbors. More formally, the rearranged array should have the property such that for every i in the range 1 <= i < nums.length - 1, (nums[i-1] + nums[i+1]) / 2 is not equal to nums[i]. Return any rearrangement of nums that meets the requirements. ',
  },
  {
    question_title: 'Count Number of Special Subsequences',
    question_text:
      'A sequence is special if it consists of a positive number of 0s, followed by a positive number of 1s, then a positive number of 2s. Given an array nums (consisting of only integers 0, 1, and 2), return the number of different subsequences that are special. Since the answer may be very large, return it modulo 109 + 7. A subsequence of an array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements. Two subsequences are different if the set of indices chosen are different. ',
  },
  {
    question_title: 'Minimum Time to Type Word Using Special Typewriter',
    question_text:
      "There is a special typewriter with lowercase English letters 'a' to 'z' arranged in a circle with a pointer. A character can only be typed if the pointer is pointing to that character. The pointer is initially pointing to the character 'a'. Each second, you may perform one of the following operations: Given a string word, return the minimum number of seconds to type out the characters in word. ",
  },
  {
    question_title: 'Maximum Matrix Sum',
    question_text:
      "You are given an n x n integer matrix. You can do the following operation any number of times: Two elements are considered adjacent if and only if they share a border. Your goal is to maximize the summation of the matrix's elements. Return the maximum sum of the matrix's elements using the operation mentioned above. ",
  },
  {
    question_title: 'Number of Ways to Arrive at Destination',
    question_text:
      'You are in a city that consists of n intersections numbered from 0 to n - 1 with bi-directional roads between some intersections. The inputs are generated such that you can reach any intersection from any other intersection and that there is at most one road between any two intersections. You are given an integer n and a 2D integer array roads where roads[i] = [ui, vi, timei] means that there is a road between intersections ui and vi that takes timei minutes to travel. You want to know in how many ways you can travel from intersection 0 to intersection n - 1 in the shortest amount of time. Return the number of ways you can arrive at your destination in the shortest amount of time. Since the answer may be large, return it modulo 109 + 7. ',
  },
  {
    question_title: 'Number of Ways to Separate Numbers',
    question_text:
      'You wrote down many positive integers in a string called num. However, you realized that you forgot to add commas to seperate the different numbers. You remember that the list of integers was non-decreasing and that no integer had leading zeros. Return the number of possible lists of integers that you could have written down to get the string num. Since the answer may be large, return it modulo 109 + 7. ',
  },
  {
    question_title: 'Check If String Is a Prefix of Array',
    question_text:
      'Given a string s and an array of strings words, determine whether s is a prefix string of words. A string s is a prefix string of words if s can be made by concatenating the first k strings in words for some positive k no larger than words.length. Return true if s is a prefix string of words, or false otherwise. ',
  },
  {
    question_title: 'Remove Stones to Minimize the Total',
    question_text:
      'You are given a 0-indexed integer array piles, where piles[i] represents the number of stones in the ith pile, and an integer k. You should apply the following operation exactly k times: Notice that you can apply the operation on the same pile more than once. Return the minimum possible total number of stones remaining after applying the k operations. floor(x) is the greatest integer that is smaller than or equal to x (i.e., rounds x down). ',
  },
  {
    question_title: 'Minimum Number of Swaps to Make the String Balanced',
    question_text:
      "You are given a 0-indexed string s of even length n. The string consists of exactly n / 2 opening brackets '[' and n / 2 closing brackets ']'. A string is called balanced if and only if: You may swap the brackets at any two indices any number of times. Return the minimum number of swaps to make s balanced. ",
  },
  {
    question_title: 'Find the Longest Valid Obstacle Course at Each Position',
    question_text:
      'You want to build some obstacle courses. You are given a 0-indexed integer array obstacles of length n, where obstacles[i] describes the height of the ith obstacle. For every index i between 0 and n - 1 (inclusive), find the length of the longest obstacle course in obstacles such that: Return an array ans of length n, where ans[i] is the length of the longest obstacle course for index i as described above. ',
  },
  {
    question_title: 'Number of Strings That Appear as Substrings in Word',
    question_text:
      'Given an array of strings patterns and a string word, return the number of strings in patterns that exist as a substring in word. A substring is a contiguous sequence of characters within a string. ',
  },
  {
    question_title: 'Minimum Non-Zero Product of the Array Elements',
    question_text:
      'You are given a positive integer p. Consider an array nums (1-indexed) that consists of the integers in the inclusive range [1, 2p - 1] in their binary representations. You are allowed to do the following operation any number of times: For example, if x = 1101 and y = 0011, after swapping the 2nd bit from the right, we have x = 1111 and y = 0001. Find the minimum non-zero product of nums after performing the above operation any number of times. Return this product modulo 109 + 7. Note: The answer should be the minimum product before the modulo operation is done. ',
  },
  {
    question_title: 'Last Day Where You Can Still Cross',
    question_text:
      'There is a 1-based binary matrix where 0 represents land and 1 represents water. You are given integers row and col representing the number of rows and columns in the matrix, respectively. Initially on day 0, the entire matrix is land. However, each day a new cell becomes flooded with water. You are given a 1-based 2D array cells, where cells[i] = [ri, ci] represents that on the ith day, the cell on the rith row and cith column (1-based coordinates) will be covered with water (i.e., changed to 1). You want to find the last day that it is possible to walk from the top to the bottom by only walking on land cells. You can start from any cell in the top row and end at any cell in the bottom row. You can only travel in the four cardinal directions (left, right, up, and down). Return the last day where it is possible to walk from the top to the bottom by only walking on land cells. ',
  },
  {
    question_title: 'Find the Middle Index in Array',
    question_text:
      'Given a 0-indexed integer array nums, find the leftmost middleIndex (i.e., the smallest amongst all the possible ones). A middleIndex is an index where nums[0] + nums[1] + ... + nums[middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ... + nums[nums.length-1]. If middleIndex == 0, the left side sum is considered to be 0. Similarly, if middleIndex == nums.length - 1, the right side sum is considered to be 0. Return the leftmost middleIndex that satisfies the condition, or -1 if there is no such index. ',
  },
  {
    question_title: 'Find All Groups of Farmland',
    question_text:
      'You are given a 0-indexed m x n binary matrix land where a 0 represents a hectare of forested land and a 1 represents a hectare of farmland. To keep the land organized, there are designated rectangular areas of hectares that consist entirely of farmland. These rectangular areas are called groups. No two groups are adjacent, meaning farmland in one group is not four-directionally adjacent to another farmland in a different group. land can be represented by a coordinate system where the top left corner of land is (0, 0) and the bottom right corner of land is (m-1, n-1). Find the coordinates of the top left and bottom right corner of each group of farmland. A group of farmland with a top left corner at (r1, c1) and a bottom right corner at (r2, c2) is represented by the 4-length array [r1, c1, r2, c2]. Return a 2D array containing the 4-length arrays described above for each group of farmland in land. If there are no groups of farmland, return an empty array. You may return the answer in any order. ',
  },
  {
    question_title: 'Operations on Tree',
    question_text:
      'You are given a tree with n nodes numbered from 0 to n - 1 in the form of a parent array parent where parent[i] is the parent of the ith node. The root of the tree is node 0, so parent[0] = -1 since it has no parent. You want to design a data structure that allows users to lock, unlock, and upgrade nodes in the tree. The data structure should support the following functions: Implement the LockingTree class: ',
  },
  {
    question_title: 'The Number of Good Subsets',
    question_text:
      'You are given an integer array nums. We call a subset of nums good if its product can be represented as a product of one or more distinct prime numbers. Return the number of different good subsets in nums modulo 109 + 7. A subset of nums is any array that can be obtained by deleting some (possibly none or all) elements from nums. Two subsets are different if and only if the chosen indices to delete are different. ',
  },
  {
    question_title: 'Find Greatest Common Divisor of Array',
    question_text:
      'Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums. The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers. ',
  },
  {
    question_title: 'Find Unique Binary String',
    question_text:
      'Given an array of strings nums containing n unique binary strings each of length n, return a binary string of length n that does not appear in nums. If there are multiple answers, you may return any of them. ',
  },
  {
    question_title: 'Minimize the Difference Between Target and Chosen Elements',
    question_text:
      'You are given an m x n integer matrix mat and an integer target. Choose one integer from each row in the matrix such that the absolute difference between target and the sum of the chosen elements is minimized. Return the minimum absolute difference. The absolute difference between two numbers a and b is the absolute value of a - b. ',
  },
  {
    question_title: 'Find Array Given Subset Sums',
    question_text:
      'You are given an integer n representing the length of an unknown array that you are trying to recover. You are also given an array sums containing the values of all 2n subset sums of the unknown array (in no particular order). Return the array ans of length n representing the unknown array. If multiple answers exist, return any of them. An array sub is a subset of an array arr if sub can be obtained from arr by deleting some (possibly zero or all) elements of arr. The sum of the elements in sub is one possible subset sum of arr. The sum of an empty array is considered to be 0. Note: Test cases are generated such that there will always be at least one correct answer. ',
  },
  {
    question_title: 'Minimum Difference Between Highest and Lowest of K Scores',
    question_text:
      'You are given a 0-indexed integer array nums, where nums[i] represents the score of the ith student. You are also given an integer k. Pick the scores of any k students from the array so that the difference between the highest and the lowest of the k scores is minimized. Return the minimum possible difference. ',
  },
  {
    question_title: 'Find the Kth Largest Integer in the Array',
    question_text:
      'You are given an array of strings nums and an integer k. Each string in nums represents an integer without leading zeros. Return the string that represents the kth largest integer in nums. Note: Duplicate numbers should be counted distinctly. For example, if nums is ["1","2","2"], "2" is the first largest integer, "2" is the second-largest integer, and "1" is the third-largest integer. ',
  },
  {
    question_title: 'Minimum Number of Work Sessions to Finish the Tasks',
    question_text:
      'There are n tasks assigned to you. The task times are represented as an integer array tasks of length n, where the ith task takes tasks[i] hours to finish. A work session is when you work for at most sessionTime consecutive hours and then take a break. You should finish the given tasks in a way that satisfies the following conditions: Given tasks and sessionTime, return the minimum number of work sessions needed to finish all the tasks following the conditions above. The tests are generated such that sessionTime is greater than or equal to the maximum element in tasks[i]. ',
  },
  {
    question_title: 'Number of Unique Good Subsequences',
    question_text:
      'You are given a binary string binary. A subsequence of binary is considered good if it is not empty and has no leading zeros (with the exception of "0"). Find the number of unique good subsequences of binary. Return the number of unique good subsequences of binary. Since the answer may be very large, return it modulo 109 + 7. A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements. ',
  },
  {
    question_title: 'Count Number of Pairs With Absolute Difference K',
    question_text:
      'Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k. The value of |x| is defined as: ',
  },
  {
    question_title: 'Find Original Array From Doubled Array',
    question_text:
      'An integer array original is transformed into a doubled array changed by appending twice the value of every element in original, and then randomly shuffling the resulting array. Given an array changed, return original if changed is a doubled array. If changed is not a doubled array, return an empty array. The elements in original may be returned in any order. ',
  },
  {
    question_title: 'Maximum Earnings From Taxi',
    question_text:
      'There are n points on a road you are driving your taxi on. The n points on the road are labeled from 1 to n in the direction you are going, and you want to drive from point 1 to point n to make money by picking up passengers. You cannot change the direction of the taxi. The passengers are represented by a 0-indexed 2D integer array rides, where rides[i] = [starti, endi, tipi] denotes the ith passenger requesting a ride from point starti to point endi who is willing to give a tipi dollar tip. For each passenger i you pick up, you earn endi - starti + tipi dollars. You may only drive at most one passenger at a time. Given n and rides, return the maximum number of dollars you can earn by picking up the passengers optimally. Note: You may drop off a passenger and pick up a different passenger at the same point. ',
  },
  {
    question_title: 'Minimum Number of Operations to Make Array Continuous',
    question_text:
      'You are given an integer array nums. In one operation, you can replace any element in nums with any integer. nums is considered continuous if both of the following conditions are fulfilled: For example, nums = [4, 2, 5, 3] is continuous, but nums = [1, 2, 3, 5, 6] is not continuous. Return the minimum number of operations to make nums continuous. ',
  },
  {
    question_title: 'Find if Path Exists in Graph',
    question_text:
      'There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself. You want to determine if there is a valid path that exists from vertex source to vertex destination. Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise. ',
  },
  {
    question_title: 'Count Special Quadruplets',
    question_text:
      'Given a 0-indexed integer array nums, return the number of distinct quadruplets (a, b, c, d) such that: ',
  },
  {
    question_title: 'The Number of Weak Characters in the Game',
    question_text:
      "You are playing a game that contains multiple characters, and each of the characters has two main properties: attack and defense. You are given a 2D integer array properties where properties[i] = [attacki, defensei] represents the properties of the ith character in the game. A character is said to be weak if any other character has both attack and defense levels strictly greater than this character's attack and defense levels. More formally, a character i is said to be weak if there exists another character j where attackj > attacki and defensej > defensei. Return the number of weak characters. ",
  },
  {
    question_title: 'First Day Where You Have Been in All the Rooms',
    question_text:
      'There are n rooms you need to visit, labeled from 0 to n - 1. Each day is labeled, starting from 0. You will go in and visit one room a day. Initially on day 0, you visit room 0. The order you visit the rooms for the coming days is determined by the following rules and a given 0-indexed array nextVisit of length n: Return the label of the first day where you have been in all the rooms. It can be shown that such a day exists. Since the answer may be very large, return it modulo 109 + 7. ',
  },
  {
    question_title: 'GCD Sort of an Array',
    question_text:
      'You are given an integer array nums, and you can perform the following operation any number of times on nums: Return true if it is possible to sort nums in non-decreasing order using the above swap method, or false otherwise. ',
  },
  {
    question_title: 'Reverse Prefix of Word',
    question_text:
      'Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing. Return the resulting string. ',
  },
  {
    question_title: 'Number of Pairs of Interchangeable Rectangles',
    question_text:
      'You are given n rectangles represented by a 0-indexed 2D integer array rectangles, where rectangles[i] = [widthi, heighti] denotes the width and height of the ith rectangle. Two rectangles i and j (i < j) are considered interchangeable if they have the same width-to-height ratio. More formally, two rectangles are interchangeable if widthi/heighti == widthj/heightj (using decimal division, not integer division). Return the number of pairs of interchangeable rectangles in rectangles. ',
  },
  {
    question_title: 'Maximum Product of the Length of Two Palindromic Subsequences',
    question_text:
      'Given a string s, find two disjoint palindromic subsequences of s such that the product of their lengths is maximized. The two subsequences are disjoint if they do not both pick a character at the same index. Return the maximum possible product of the lengths of the two palindromic subsequences. A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters. A string is palindromic if it reads the same forward and backward. ',
  },
  {
    question_title: 'Smallest Missing Genetic Value in Each Subtree',
    question_text:
      'There is a family tree rooted at 0 consisting of n nodes numbered 0 to n - 1. You are given a 0-indexed integer array parents, where parents[i] is the parent for node i. Since node 0 is the root, parents[0] == -1. There are 105 genetic values, each represented by an integer in the inclusive range [1, 105]. You are given a 0-indexed integer array nums, where nums[i] is a distinct genetic value for node i. Return an array ans of length n where ans[i] is the smallest genetic value that is missing from the subtree rooted at node i. The subtree rooted at a node x contains node x and all of its descendant nodes. ',
  },
  {
    question_title: 'Convert 1D Array Into 2D Array',
    question_text:
      'You are given a 0-indexed 1-dimensional (1D) integer array original, and two integers, m and n. You are tasked with creating a 2-dimensional (2D) array with  m rows and n columns using all the elements from original. The elements from indices 0 to n - 1 (inclusive) of original should form the first row of the constructed 2D array, the elements from indices n to 2 * n - 1 (inclusive) should form the second row of the constructed 2D array, and so on. Return an m x n 2D array constructed according to the above procedure, or an empty 2D array if it is impossible. ',
  },
  {
    question_title: 'Number of Pairs of Strings With Concatenation Equal to Target',
    question_text:
      'Given an array of digit strings nums and a digit string target, return the number of pairs of indices (i, j) (where i != j) such that the concatenation of nums[i] + nums[j] equals target. ',
  },
  {
    question_title: 'Maximize the Confusion of an Exam',
    question_text:
      "A teacher is writing a test with n true/false questions, with 'T' denoting true and 'F' denoting false. He wants to confuse the students by maximizing the number of consecutive questions with the same answer (multiple trues or multiple falses in a row). You are given a string answerKey, where answerKey[i] is the original answer to the ith question. In addition, you are given an integer k, the maximum number of times you may perform the following operation: Return the maximum number of consecutive 'T's or 'F's in the answer key after performing the operation at most k times. ",
  },
  {
    question_title: 'Maximum Number of Ways to Partition an Array',
    question_text:
      'You are given a 0-indexed integer array nums of length n. The number of ways to partition nums is the number of pivot indices that satisfy both conditions: You are also given an integer k. You can choose to change the value of one element of nums to k, or to leave the array unchanged. Return the maximum possible number of ways to partition nums to satisfy both conditions after changing at most one element. ',
  },
  {
    question_title: 'Final Value of Variable After Performing Operations',
    question_text:
      'There is a programming language with only four operations and one variable X: Initially, the value of X is 0. Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations. ',
  },
  {
    question_title: 'Sum of Beauty in the Array',
    question_text:
      'You are given a 0-indexed integer array nums. For each index i (1 <= i <= nums.length - 2) the beauty of nums[i] equals: Return the sum of beauty of all nums[i] where 1 <= i <= nums.length - 2. ',
  },
  {
    question_title: 'Detect Squares',
    question_text:
      'You are given a stream of points on the X-Y plane. Design an algorithm that: An axis-aligned square is a square whose edges are all the same length and are either parallel or perpendicular to the x-axis and y-axis. Implement the DetectSquares class: ',
  },
  {
    question_title: 'Longest Subsequence Repeated k Times',
    question_text:
      'You are given a string s of length n, and an integer k. You are tasked to find the longest subsequence repeated k times in string s. A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters. A subsequence seq is repeated k times in the string s if seq * k is a subsequence of s, where seq * k represents a string constructed by concatenating seq k times. Return the longest subsequence repeated k times in string s. If multiple such subsequences are found, return the lexicographically largest one. If there is no such subsequence, return an empty string. ',
  },
  {
    question_title: 'Maximum Difference Between Increasing Elements',
    question_text:
      'Given a 0-indexed integer array nums of size n, find the maximum difference between nums[i] and nums[j] (i.e., nums[j] - nums[i]), such that 0 <= i < j < n and nums[i] < nums[j]. Return the maximum difference. If no such i and j exists, return -1. ',
  },
  {
    question_title: 'Grid Game',
    question_text:
      'You are given a 0-indexed 2D array grid of size 2 x n, where grid[r][c] represents the number of points at position (r, c) on the matrix. Two robots are playing a game on this matrix. Both robots initially start at (0, 0) and want to reach (1, n-1). Each robot may only move to the right ((r, c) to (r, c + 1)) or down ((r, c) to (r + 1, c)). At the start of the game, the first robot moves from (0, 0) to (1, n-1), collecting all the points from the cells on its path. For all cells (r, c) traversed on the path, grid[r][c] is set to 0. Then, the second robot moves from (0, 0) to (1, n-1), collecting the points on its path. Note that their paths may intersect with one another. The first robot wants to minimize the number of points collected by the second robot. In contrast, the second robot wants to maximize the number of points it collects. If both robots play optimally, return the number of points collected by the second robot. ',
  },
  {
    question_title: 'Check if Word Can Be Placed In Crossword',
    question_text:
      "You are given an m x n matrix board, representing the current state of a crossword puzzle. The crossword contains lowercase English letters (from solved words), ' ' to represent any empty cells, and '#' to represent any blocked cells. A word can be placed horizontally (left to right or right to left) or vertically (top to bottom or bottom to top) in the board if: Given a string word, return true if word can be placed in board, or false otherwise. ",
  },
  {
    question_title: 'The Score of Students Solving Math Expression',
    question_text:
      "You are given a string s that contains digits 0-9, addition symbols '+', and multiplication symbols '*' only, representing a valid math expression of single digit numbers (e.g., 3+5*2). This expression was given to n elementary school students. The students were instructed to get the answer of the expression by following this order of operations: You are given an integer array answers of length n, which are the submitted answers of the students in no particular order. You are asked to grade the answers, by following these rules: Return the sum of the points of the students. ",
  },
  {
    question_title: 'Minimum Number of Moves to Seat Everyone',
    question_text:
      'There are n seats and n students in a room. You are given an array seats of length n, where seats[i] is the position of the ith seat. You are also given the array students of length n, where students[j] is the position of the jth student. You may perform the following move any number of times: Return the minimum number of moves required to move each student to a seat such that no two students are in the same seat. Note that there may be multiple seats or students in the same position at the beginning. ',
  },
  {
    question_title: 'Remove Colored Pieces if Both Neighbors are the Same Color',
    question_text:
      "There are n pieces arranged in a line, and each piece is colored either by 'A' or by 'B'. You are given a string colors of length n where colors[i] is the color of the ith piece. Alice and Bob are playing a game where they take alternating turns removing pieces from the line. In this game, Alice moves first. Assuming Alice and Bob play optimally, return true if Alice wins, or return false if Bob wins. ",
  },
  {
    question_title: 'The Time When the Network Becomes Idle',
    question_text:
      'There is a network of n servers, labeled from 0 to n - 1. You are given a 2D integer array edges, where edges[i] = [ui, vi] indicates there is a message channel between servers ui and vi, and they can pass any number of messages to each other directly in one second. You are also given a 0-indexed integer array patience of length n. All servers are connected, i.e., a message can be passed from one server to any other server(s) directly or indirectly through the message channels. The server labeled 0 is the master server. The rest are data servers. Each data server needs to send its message to the master server for processing and wait for a reply. Messages move between servers optimally, so every message takes the least amount of time to arrive at the master server. The master server will process all newly arrived messages instantly and send a reply to the originating server via the reversed path the message had gone through. At the beginning of second 0, each data server sends its message to be processed. Starting from second 1, at the beginning of every second, each data server will check if it has received a reply to the message it sent (including any newly arrived replies) from the master server: The network becomes idle when there are no messages passing between servers or arriving at servers. Return the earliest second starting from which the network becomes idle. ',
  },
  {
    question_title: 'Minimum Moves to Convert String',
    question_text:
      "You are given a string s consisting of n characters which are either 'X' or 'O'. A move is defined as selecting three consecutive characters of s and converting them to 'O'. Note that if a move is applied to the character 'O', it will stay the same. Return the minimum number of moves required so that all the characters of s are converted to 'O'. ",
  },
  {
    question_title: 'Find Missing Observations',
    question_text:
      'You have observations of n + m 6-sided dice rolls with each face numbered from 1 to 6. n of the observations went missing, and you only have the observations of m rolls. Fortunately, you have also calculated the average value of the n + m rolls. You are given an integer array rolls of length m where rolls[i] is the value of the ith observation. You are also given the two integers mean and n. Return an array of length n containing the missing observations such that the average value of the n + m rolls is exactly mean. If there are multiple valid answers, return any of them. If no such array exists, return an empty array. The average value of a set of k numbers is the sum of the numbers divided by k. Note that mean is an integer, so the sum of the n + m rolls should be divisible by n + m. ',
  },
  {
    question_title: 'Stone Game IX',
    question_text:
      "Alice and Bob continue their games with stones. There is a row of n stones, and each stone has an associated value. You are given an integer array stones, where stones[i] is the value of the ith stone. Alice and Bob take turns, with Alice starting first. On each turn, the player may remove any stone from stones. The player who removes a stone loses if the sum of the values of all removed stones is divisible by 3. Bob will win automatically if there are no remaining stones (even if it is Alice's turn). Assuming both players play optimally, return true if Alice wins and false if Bob wins. ",
  },
  {
    question_title: 'Smallest K-Length Subsequence With Occurrences of a Letter',
    question_text:
      'You are given a string s, an integer k, a letter letter, and an integer repetition. Return the lexicographically smallest subsequence of s of length k that has the letter letter appear at least repetition times. The test cases are generated so that the letter appears in s at least repetition times. A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters. A string a is lexicographically smaller than a string b if in the first position where a and b differ, string a has a letter that appears earlier in the alphabet than the corresponding letter in b. ',
  },
  {
    question_title: 'Minimum Operations to Make a Uni-Value Grid',
    question_text:
      'You are given a 2D integer grid of size m x n and an integer x. In one operation, you can add x to or subtract x from any element in the grid. A uni-value grid is a grid where all the elements of it are equal. Return the minimum number of operations to make the grid uni-value. If it is not possible, return -1. ',
  },
  {
    question_title: 'Stock Price Fluctuation ',
    question_text:
      'You are given a stream of records about a particular stock. Each record contains a timestamp and the corresponding price of the stock at that timestamp. Unfortunately due to the volatile nature of the stock market, the records do not come in order. Even worse, some records may be incorrect. Another record with the same timestamp may appear later in the stream correcting the price of the previous wrong record. Design an algorithm that: Implement the StockPrice class: ',
  },
  {
    question_title: 'Partition Array Into Two Arrays to Minimize Sum Difference',
    question_text:
      'You are given an integer array nums of 2 * n integers. You need to partition nums into two arrays of length n to minimize the absolute difference of the sums of the arrays. To partition nums, put each element of nums into one of the two arrays. Return the minimum possible absolute difference. ',
  },
  {
    question_title: 'Kth Distinct String in an Array',
    question_text:
      'A distinct string is a string that is present only once in an array. Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "". Note that the strings are considered in the order in which they appear in the array. ',
  },
  {
    question_title: 'Two Best Non-Overlapping Events',
    question_text:
      'You are given a 0-indexed 2D integer array of events where events[i] = [startTimei, endTimei, valuei]. The ith event starts at startTimei and ends at endTimei, and if you attend this event, you will receive a value of valuei. You can choose at most two non-overlapping events to attend such that the sum of their values is maximized. Return this maximum sum. Note that the start time and end time is inclusive: that is, you cannot attend two events where one of them starts and the other ends at the same time. More specifically, if you attend an event with end time t, the next event must start at or after t + 1. ',
  },
  {
    question_title: 'Plates Between Candles',
    question_text:
      "There is a long table with a line of plates and candles arranged on top of it. You are given a 0-indexed string s consisting of characters '*' and '|' only, where a '*' represents a plate and a '|' represents a candle. You are also given a 0-indexed 2D integer array queries where queries[i] = [lefti, righti] denotes the substring s[lefti...righti] (inclusive). For each query, you need to find the number of plates between candles that are in the substring. A plate is considered between candles if there is at least one candle to its left and at least one candle to its right in the substring. Return an integer array answer where answer[i] is the answer to the ith query. ",
  },
  {
    question_title: 'Number of Valid Move Combinations On Chessboard',
    question_text:
      'There is an 8 x 8 chessboard containing n pieces (rooks, queens, or bishops). You are given a string array pieces of length n, where pieces[i] describes the type (rook, queen, or bishop) of the ith piece. In addition, you are given a 2D integer array positions also of length n, where positions[i] = [ri, ci] indicates that the ith piece is currently at the 1-based coordinate (ri, ci) on the chessboard. When making a move for a piece, you choose a destination square that the piece will travel toward and stop on. You must make a move for every piece on the board simultaneously. A move combination consists of all the moves performed on all the given pieces. Every second, each piece will instantaneously travel one square towards their destination if they are not already at it. All pieces start traveling at the 0th second. A move combination is invalid if, at a given time, two or more pieces occupy the same square. Return the number of valid move combinations\u200b\u200b\u200b\u200b\u200b. Notes: ',
  },
  {
    question_title: 'Check if Numbers Are Ascending in a Sentence',
    question_text:
      'A sentence is a list of tokens separated by a single space with no leading or trailing spaces. Every token is either a positive number consisting of digits 0-9 with no leading zeros, or a word consisting of lowercase English letters. Given a string s representing a sentence, you need to check if all the numbers in s are strictly increasing from left to right (i.e., other than the last number, each number is strictly smaller than the number on its right in s). Return true if so, or false otherwise. ',
  },
  {
    question_title: 'Simple Bank System',
    question_text:
      'You have been tasked with writing a program for a popular bank that will automate all its incoming transactions (transfer, deposit, and withdraw). The bank has n accounts numbered from 1 to n. The initial balance of each account is stored in a 0-indexed integer array balance, with the (i + 1)th account having an initial balance of balance[i]. Execute all the valid transactions. A transaction is valid if: Implement the Bank class: ',
  },
  {
    question_title: 'Count Number of Maximum Bitwise-OR Subsets',
    question_text:
      'Given an integer array nums, find the maximum possible bitwise OR of a subset of nums and return the number of different non-empty subsets with the maximum bitwise OR. An array a is a subset of an array b if a can be obtained from b by deleting some (possibly zero) elements of b. Two subsets are considered different if the indices of the elements chosen are different. The bitwise OR of an array a is equal to a[0] OR a[1] OR ... OR a[a.length - 1] (0-indexed). ',
  },
  {
    question_title: 'Second Minimum Time to Reach Destination',
    question_text:
      'A city is represented as a bi-directional connected graph with n vertices where each vertex is labeled from 1 to n (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself. The time taken to traverse any edge is time minutes. Each vertex has a traffic signal which changes its color from green to red and vice versa every\xa0change minutes. All signals change at the same time. You can enter a vertex at any time, but can leave a vertex only when the signal is green. You cannot wait at a vertex if the signal is green. The second minimum value is defined as the smallest value strictly larger than the minimum value. Given n, edges, time, and change, return the second minimum time it will take to go from vertex 1 to vertex n. Notes: ',
  },
  {
    question_title: 'Number of Valid Words in a Sentence',
    question_text:
      "A sentence consists of lowercase letters ('a' to 'z'), digits ('0' to '9'), hyphens ('-'), punctuation marks ('!', '.', and ','), and spaces (' ') only. Each sentence can be broken down into one or more tokens separated by one or more spaces ' '. A token is a valid word if all three of the following are true: Examples of valid words include \"a-b.\", \"afad\", \"ba-c\", \"a!\", and \"!\". Given a string sentence, return the number of valid words in sentence. ",
  },
  {
    question_title: 'Next Greater Numerically Balanced Number',
    question_text:
      'An integer x is numerically balanced if for every digit d in the number x, there are exactly d occurrences of that digit in x. Given an integer n, return the smallest numerically balanced number strictly greater than n. ',
  },
  {
    question_title: 'Count Nodes With the Highest Score',
    question_text:
      'There is a binary tree rooted at 0 consisting of n nodes. The nodes are labeled from 0 to n - 1. You are given a 0-indexed integer array parents representing the tree, where parents[i] is the parent of node i. Since node 0 is the root, parents[0] == -1. Each node has a score. To find the score of a node, consider if the node and the edges connected to it were removed. The tree would become one or more non-empty subtrees. The size of a subtree is the number of the nodes in it. The score of the node is the product of the sizes of all those subtrees. Return the number of nodes that have the highest score. ',
  },
  {
    question_title: 'Parallel Courses III',
    question_text:
      'You are given an integer n, which indicates that there are n courses labeled from 1 to n. You are also given a 2D integer array relations where relations[j] = [prevCoursej, nextCoursej] denotes that course prevCoursej has to be completed before course nextCoursej (prerequisite relationship). Furthermore, you are given a 0-indexed integer array time where time[i] denotes how many months it takes to complete the (i+1)th course. You must find the minimum number of months needed to complete all the courses following these rules: Return the minimum number of months needed to complete all the courses. Note: The test cases are generated such that it is possible to complete every course (i.e., the graph is a directed acyclic graph). ',
  },
  {
    question_title: 'Check Whether Two Strings are Almost Equivalent',
    question_text:
      "Two strings word1 and word2 are considered almost equivalent if the differences between the frequencies of each letter from 'a' to 'z' between word1 and word2 is at most 3. Given two strings word1 and word2, each of length n, return true if word1 and word2 are almost equivalent, or false otherwise. The frequency of a letter x is the number of times it occurs in the string. ",
  },
  {
    question_title: 'Most Beautiful Item for Each Query',
    question_text:
      'You are given a 2D integer array items where items[i] = [pricei, beautyi] denotes the price and beauty of an item respectively. You are also given a 0-indexed integer array queries. For each queries[j], you want to determine the maximum beauty of an item whose price is less than or equal to queries[j]. If no such item exists, then the answer to this query is 0. Return an array answer of the same length as queries where answer[j] is the answer to the jth query. ',
  },
  {
    question_title: 'Maximum Number of Tasks You Can Assign',
    question_text:
      "You have n tasks and m workers. Each task has a strength requirement stored in a 0-indexed integer array tasks, with the ith task requiring tasks[i] strength to complete. The strength of each worker is stored in a 0-indexed integer array workers, with the jth worker having workers[j] strength. Each worker can only be assigned to a single task and must have a strength greater than or equal to the task's strength requirement (i.e., workers[j] >= tasks[i]). Additionally, you have pills magical pills that will increase a worker's strength by strength. You can decide which workers receive the magical pills, however, you may only give each worker at most one magical pill. Given the 0-indexed integer arrays tasks and workers and the integers pills and strength, return the maximum number of tasks that can be completed. ",
  },
  {
    question_title: 'Smallest Index With Equal Value',
    question_text:
      'Given a 0-indexed integer array nums, return the smallest index i of nums such that i mod 10 == nums[i], or -1 if such index does not exist. x mod y denotes the remainder when x is divided by y. ',
  },
  {
    question_title: 'Minimum Operations to Convert Number',
    question_text:
      'You are given a 0-indexed integer array nums containing distinct numbers, an integer start, and an integer goal. There is an integer x that is initially set to start, and you want to perform operations on x such that it is converted to goal. You can perform the following operation repeatedly on the number x: If 0 <= x <= 1000, then for any index i in the array (0 <= i < nums.length), you can set x to any of the following: Note that you can use each nums[i] any number of times in any order. Operations that set x to be out of the range 0 <= x <= 1000 are valid, but no more operations can be done afterward. Return the minimum number of operations needed to convert x = start into goal, and -1 if it is not possible. ',
  },
  {
    question_title: 'Check if an Original String Exists Given Two Encoded Strings',
    question_text:
      'An original string, consisting of lowercase English letters, can be encoded by the following steps: For example, one way to encode an original string "abcdefghijklmnop" might be: Given two encoded strings s1 and s2, consisting of lowercase English letters and digits 1-9 (inclusive), return true if there exists an original string that could be encoded as both s1 and s2. Otherwise, return false. Note: The test cases are generated such that the number of consecutive digits in s1 and s2 does not exceed 3. ',
  },
  {
    question_title: 'Count Vowel Substrings of a String',
    question_text:
      "A substring is a contiguous (non-empty) sequence of characters within a string. A vowel substring is a substring that only consists of vowels ('a', 'e', 'i', 'o', and 'u') and has all five vowels present in it. Given a string word, return the number of vowel substrings in word. ",
  },
  {
    question_title: 'Vowels of All Substrings',
    question_text:
      "Given a string word, return the sum of the number of vowels ('a', 'e', 'i', 'o', and 'u') in every substring of word. A substring is a contiguous (non-empty) sequence of characters within a string. Note: Due to the large constraints, the answer may not fit in a signed 32-bit integer. Please be careful during the calculations. ",
  },
  {
    question_title: 'Minimized Maximum of Products Distributed to Any Store',
    question_text:
      'You are given an integer n indicating there are n specialty retail stores. There are m product types of varying amounts, which are given as a 0-indexed integer array quantities, where quantities[i] represents the number of products of the ith product type. You need to distribute all products to the retail stores following these rules: Return the minimum possible x. ',
  },
  {
    question_title: 'Maximum Path Quality of a Graph',
    question_text:
      "There is an undirected graph with n nodes numbered from 0 to n - 1 (inclusive). You are given a 0-indexed integer array values where values[i] is the value of the ith node. You are also given a 0-indexed 2D integer array edges, where each edges[j] = [uj, vj, timej] indicates that there is an undirected edge between the nodes uj and vj, and it takes timej seconds to travel between the two nodes. Finally, you are given an integer maxTime. A valid path in the graph is any path that starts at node 0, ends at node 0, and takes at most maxTime seconds to complete. You may visit the same node multiple times. The quality of a valid path is the sum of the values of the unique nodes visited in the path (each node's value is added at most once to the sum). Return the maximum quality of a valid path. Note: There are at most four edges connected to each node. ",
  },
  {
    question_title: 'Count Common Words With One Occurrence',
    question_text:
      'Given two string arrays words1 and words2, return the number of strings that appear exactly once in each\xa0of the two arrays. ',
  },
  {
    question_title: 'Minimum Number of Buckets Required to Collect Rainwater from Houses',
    question_text:
      "You are given a 0-indexed string street. Each character in street is either 'H' representing a house or '.' representing an empty space. You can place buckets on the empty spaces to collect rainwater that falls from the adjacent houses. The rainwater from a house at index i is collected if a bucket is placed at index i - 1 and/or index i + 1. A single bucket, if placed adjacent to two houses, can collect the rainwater from both houses. Return the minimum number of buckets needed so that for every house, there is at least one bucket collecting rainwater from it, or -1 if it is impossible. ",
  },
  {
    question_title: 'Minimum Cost Homecoming of a Robot in a Grid',
    question_text:
      'There is an m x n grid, where (0, 0) is the top-left cell and (m - 1, n - 1) is the bottom-right cell. You are given an integer array startPos where startPos = [startrow, startcol] indicates that initially, a robot is at the cell (startrow, startcol). You are also given an integer array homePos where homePos = [homerow, homecol] indicates that its home is at the cell (homerow, homecol). The robot needs to go to its home. It can move one cell in four directions: left, right, up, or down, and it can not move outside the boundary. Every move incurs some cost. You are further given two 0-indexed integer arrays: rowCosts of length m and colCosts of length n. Return the minimum total cost for this robot to return home. ',
  },
  {
    question_title: 'Count Fertile Pyramids in a Land',
    question_text:
      'A farmer has a rectangular grid of land with m rows and n columns that can be divided into unit cells. Each cell is either fertile (represented by a 1) or barren (represented by a 0). All cells outside the grid are considered barren. A pyramidal plot of land can be defined as a set of cells with the following criteria: An inverse pyramidal plot of land can be defined as a set of cells with similar criteria: Some examples of valid and invalid pyramidal (and inverse pyramidal) plots are shown below. Black cells indicate fertile cells. Given a 0-indexed m x n binary matrix grid representing the farmland, return the total number of pyramidal and inverse pyramidal plots that can be found in grid. ',
  },
  {
    question_title: 'Time Needed to Buy Tickets',
    question_text:
      'There are n people in a line queuing to buy tickets, where the 0th person is at the front of the line and the (n - 1)th person is at the back of the line. You are given a 0-indexed integer array tickets of length n where the number of tickets that the ith person would like to buy is tickets[i]. Each person takes exactly 1 second to buy a ticket. A person can only buy 1 ticket at a time and has to go back to the end of the line (which happens instantaneously) in order to buy more tickets. If a person does not have any tickets left to buy, the person will leave the line. Return the time taken for the person at position k\xa0(0-indexed)\xa0to finish buying tickets. ',
  },
  {
    question_title: 'Decode the Slanted Ciphertext',
    question_text:
      'A string originalText is encoded using a slanted transposition cipher to a string encodedText with the help of a matrix having a fixed number of rows rows. originalText is placed first in a top-left to bottom-right manner. The blue cells are filled first, followed by the red cells, then the yellow cells, and so on, until we reach the end of originalText. The arrow indicates the order in which the cells are filled. All empty cells are filled with \' \'. The number of columns is chosen such that the rightmost column will not be empty after filling in originalText. encodedText is then formed by appending all characters of the matrix in a row-wise fashion. The characters in the blue cells are appended first to encodedText, then the red cells, and so on, and finally the yellow cells. The arrow indicates the order in which the cells are accessed. For example, if originalText = "cipher" and rows = 3, then we encode it in the following manner: The blue arrows depict how originalText is placed in the matrix, and the red arrows denote the order in which encodedText is formed. In the above example, encodedText = "ch ie pr". Given the encoded string encodedText and number of rows rows, return the original string originalText. Note: originalText does not have any trailing spaces \' \'. The test cases are generated such that there is only one possible originalText. ',
  },
  {
    question_title: 'Two Furthest Houses With Different Colors',
    question_text:
      'There are n houses evenly lined up on the street, and each house is beautifully painted. You are given a 0-indexed integer array colors of length n, where colors[i] represents the color of the ith house. Return the maximum distance between two houses with different colors. The distance between the ith and jth houses is abs(i - j), where abs(x) is the absolute value of x. ',
  },
  {
    question_title: 'Stamping the Grid',
    question_text:
      'You are given an m x n binary matrix grid where each cell is either 0 (empty) or 1 (occupied). You are then given stamps of size stampHeight x stampWidth. We want to fit the stamps such that they follow the given restrictions and requirements: Return true if it is possible to fit the stamps while following the given restrictions and requirements. Otherwise, return false. ',
  },
  {
    question_title: 'Valid Arrangement of Pairs',
    question_text:
      'You are given a 0-indexed 2D integer array pairs where pairs[i] = [starti, endi]. An arrangement of pairs is valid if for every index i where 1 <= i < pairs.length, we have endi-1 == starti. Return any valid arrangement of pairs. Note: The inputs will be generated such that there exists a valid arrangement of pairs. ',
  },
  {
    question_title: 'Sum of k-Mirror Numbers',
    question_text:
      'A k-mirror number is a positive integer without leading zeros that reads the same both forward and backward in base-10 as well as in base-k. Given the base k and the number n, return the sum of the n smallest k-mirror numbers. ',
  },
  {
    question_title: 'Find Subsequence of Length K With the Largest Sum',
    question_text:
      'You are given an integer array nums and an integer k. You want to find a subsequence of nums of length k that has the largest sum. Return any such subsequence as an integer array of length k. A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements. ',
  },
  {
    question_title: 'Find Good Days to Rob the Bank',
    question_text:
      'You and a gang of thieves are planning on robbing a bank. You are given a 0-indexed integer array security, where security[i] is the number of guards on duty on the ith day. The days are numbered starting from 0. You are also given an integer time. The ith day is a good day to rob the bank if: More formally, this means day i is a good day to rob the bank if and only if security[i - time] >= security[i - time + 1] >= ... >= security[i] <= ... <= security[i + time - 1] <= security[i + time]. Return a list of all days (0-indexed) that are good days to rob the bank. The order that the days are returned in does not matter. ',
  },
  {
    question_title: 'Detonate the Maximum Bombs',
    question_text:
      'You are given a list of bombs. The range of a bomb is defined as the area where its effect can be felt. This area is in the shape of a circle with the center as the location of the bomb. The bombs are represented by a 0-indexed 2D integer array bombs where bombs[i] = [xi, yi, ri]. xi and yi denote the X-coordinate and Y-coordinate of the location of the ith bomb, whereas ri denotes the radius of its range. You may choose to detonate a single bomb. When a bomb is detonated, it will detonate all bombs that lie in its range. These bombs will further detonate the bombs that lie in their ranges. Given the list of bombs, return the maximum number of bombs that can be detonated if you are allowed to detonate only one bomb. ',
  },
  {
    question_title: 'Find Target Indices After Sorting Array',
    question_text:
      'You are given a 0-indexed integer array nums and a target element target. A target index is an index i such that nums[i] == target. Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order. ',
  },
  {
    question_title: 'K Radius Subarray Averages',
    question_text:
      'You are given a 0-indexed array nums of n integers, and an integer k. The k-radius average for a subarray of nums centered at some index i with the radius k is the average of all elements in nums between the indices i - k and i + k (inclusive). If there are less than k elements before or after the index i, then the k-radius average is -1. Build and return an array avgs of length n where avgs[i] is the k-radius average for the subarray centered at index i. The average of x elements is the sum of the x elements divided by x, using integer division. The integer division truncates toward zero, which means losing its fractional part. ',
  },
  {
    question_title: 'Removing Minimum and Maximum From Array',
    question_text:
      'You are given a 0-indexed array of distinct integers nums. There is an element in nums that has the lowest value and an element that has the highest value. We call them the minimum and maximum respectively. Your goal is to remove both these elements from the array. A deletion is defined as either removing an element from the front of the array or removing an element from the back of the array. Return the minimum number of deletions it would take to remove both the minimum and maximum element from the array. ',
  },
  {
    question_title: 'Find All People With Secret',
    question_text:
      'You are given an integer n indicating there are n people numbered from 0 to n - 1. You are also given a 0-indexed 2D integer array meetings where meetings[i] = [xi, yi, timei] indicates that person xi and person yi have a meeting at timei. A person may attend multiple meetings at the same time. Finally, you are given an integer firstPerson. Person 0 has a secret and initially shares the secret with a person firstPerson at time 0. This secret is then shared every time a meeting takes place with a person that has the secret. More formally, for every meeting, if a person xi has the secret at timei, then they will share the secret with person yi, and vice versa. The secrets are shared instantaneously. That is, a person may receive the secret and share it with people in other meetings within the same time frame. Return a list of all the people that have the secret after all the meetings have taken place. You may return the answer in any order. ',
  },
  {
    question_title: 'Finding 3-Digit Even Numbers',
    question_text:
      'You are given an integer array digits, where each element is a digit. The array may contain duplicates. You need to find all the unique integers that follow the given requirements: For example, if the given digits were [1, 2, 3], integers 132 and 312 follow the requirements. Return a sorted array of the unique integers. ',
  },
  {
    question_title: 'Step-By-Step Directions From a Binary Tree Node to Another',
    question_text:
      "You are given the root of a binary tree with n nodes. Each node is uniquely assigned a value from 1 to n. You are also given an integer startValue representing the value of the start node s, and a different integer destValue representing the value of the destination node t. Find the shortest path starting from node s and ending at node t. Generate step-by-step directions of such path as a string consisting of only the uppercase letters 'L', 'R', and 'U'. Each letter indicates a specific direction: Return the step-by-step directions of the shortest path from node s to node t. ",
  },
  {
    question_title: 'Maximum Number of Words Found in Sentences',
    question_text:
      'A sentence is a list of words that are separated by a single space\xa0with no leading or trailing spaces. You are given an array of strings sentences, where each sentences[i] represents a single sentence. Return the maximum number of words that appear in a single sentence. ',
  },
  {
    question_title: 'Find All Possible Recipes from Given Supplies',
    question_text:
      'You have information about n different recipes. You are given a string array recipes and a 2D string array ingredients. The ith recipe has the name recipes[i], and you can create it if you have all the needed ingredients from ingredients[i]. Ingredients to a recipe may need to be created from other recipes, i.e., ingredients[i] may contain a string that is in recipes. You are also given a string array supplies containing all the ingredients that you initially have, and you have an infinite supply of all of them. Return a list of all the recipes that you can create. You may return the answer in any order. Note that two recipes may contain each other in their ingredients. ',
  },
  {
    question_title: 'Check if a Parentheses String Can Be Valid',
    question_text:
      "A parentheses string is a non-empty string consisting only of '(' and ')'. It is valid if any of the following conditions is true: You are given a parentheses string s and a string locked, both of length n. locked is a binary string consisting only of '0's and '1's. For each index i of locked, Return true if you can make s a valid parentheses string. Otherwise, return false. ",
  },
  {
    question_title: 'Abbreviating the Product of a Range',
    question_text:
      'You are given two positive integers left and right with left <= right. Calculate the product of all integers in the inclusive range [left, right]. Since the product may be very large, you will abbreviate it following these steps: Return a string denoting the abbreviated product of all integers in the inclusive range [left, right]. ',
  },
  {
    question_title: 'Rings and Rods',
    question_text:
      'There are n rings and each ring is either red, green, or blue. The rings are distributed across ten rods labeled from 0 to 9. You are given a string rings of length 2n that describes the n rings that are placed onto the rods. Every two characters in rings forms a color-position pair that is used to describe each ring where: For example, "R3G2B1" describes n == 3 rings: a red ring placed onto the rod labeled 3, a green ring placed onto the rod labeled 2, and a blue ring placed onto the rod labeled 1. Return the number of rods that have all three colors of rings on them. ',
  },
  {
    question_title: 'Sum of Subarray Ranges',
    question_text:
      'You are given an integer array nums. The range of a subarray of nums is the difference between the largest and smallest element in the subarray. Return the sum of all subarray ranges of nums. A subarray is a contiguous non-empty sequence of elements within an array. ',
  },
  {
    question_title: 'Watering Plants II',
    question_text:
      "Alice and Bob want to water n plants in their garden. The plants are arranged in a row and are labeled from 0 to n - 1 from left to right where the ith plant is located at x = i. Each plant needs a specific amount of water. Alice and Bob have a watering can each, initially full. They water the plants in the following way: Given a 0-indexed integer array plants of n integers, where plants[i] is the amount of water the ith plant needs, and two integers capacityA and capacityB representing the capacities of Alice's and Bob's watering cans respectively, return the number of times they have to refill to water all the plants. ",
  },
  {
    question_title: 'Maximum Fruits Harvested After at Most K Steps',
    question_text:
      'Fruits are available at some positions on an infinite x-axis. You are given a 2D integer array fruits where fruits[i] = [positioni, amounti] depicts amounti fruits at the position positioni. fruits is already sorted by positioni in ascending order, and each positioni is unique. You are also given an integer startPos and an integer k. Initially, you are at the position startPos. From any position, you can either walk to the left or right. It takes one step to move one unit on the x-axis, and you can walk at most k steps in total. For every position you reach, you harvest all the fruits at that position, and the fruits will disappear from that position. Return the maximum total number of fruits you can harvest. ',
  },
  {
    question_title: 'Find First Palindromic String in the Array',
    question_text:
      'Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "". A string is palindromic if it reads the same forward and backward. ',
  },
  {
    question_title: 'Adding Spaces to a String',
    question_text:
      'You are given a 0-indexed string s and a 0-indexed integer array spaces that describes the indices in the original string where spaces will be added. Each space should be inserted before the character at the given index. Return the modified string after the spaces have been added. ',
  },
  {
    question_title: 'Number of Smooth Descent Periods of a Stock',
    question_text:
      'You are given an integer array prices representing the daily price history of a stock, where prices[i] is the stock price on the ith day. A smooth descent period of a stock consists of one or more contiguous days such that the price on each day is lower than the price on the preceding day by exactly 1. The first day of the period is exempted from this rule. Return the number of smooth descent periods. ',
  },
  {
    question_title: 'Minimum Operations to Make the Array K-Increasing',
    question_text:
      'You are given a 0-indexed array arr consisting of n positive integers, and a positive integer k. The array arr is called K-increasing if arr[i-k] <= arr[i] holds for every index i, where k <= i <= n-1. In one operation, you can choose an index i and change arr[i] into any positive integer. Return the minimum number of operations required to make the array K-increasing for the given k. ',
  },
  {
    question_title: 'Capitalize the Title',
    question_text:
      'You are given a string title consisting of one or more words separated by a single space, where each word consists of English letters. Capitalize the string by changing the capitalization of each word such that: Return the capitalized title. ',
  },
  {
    question_title: 'Longest Palindrome by Concatenating Two Letter Words',
    question_text:
      'You are given an array of strings words. Each element of words consists of two lowercase English letters. Create the longest possible palindrome by selecting some elements from words and concatenating them in any order. Each element can be selected at most once. Return the length of the longest palindrome that you can create. If it is impossible to create any palindrome, return 0. A palindrome is a string that reads the same forward and backward. ',
  },
  {
    question_title: 'A Number After a Double Reversal',
    question_text:
      'Reversing an integer means to reverse all its digits. Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2. Return true if reversed2 equals num. Otherwise return false. ',
  },
  {
    question_title: 'Execution of All Suffix Instructions Staying in a Grid',
    question_text:
      "There is an n x n grid, with the top-left cell at (0, 0) and the bottom-right cell at (n - 1, n - 1). You are given the integer n and an integer array startPos where startPos = [startrow, startcol] indicates that a robot is initially at cell (startrow, startcol). You are also given a 0-indexed string s of length m where s[i] is the ith instruction for the robot: 'L' (move left), 'R' (move right), 'U' (move up), and 'D' (move down). The robot can begin executing from any ith instruction in s. It executes the instructions one by one towards the end of s but it stops if either of these conditions is met: Return an array answer of length m where answer[i] is the number of instructions the robot can execute if the robot begins executing from the ith instruction in s. ",
  },
  {
    question_title: 'Intervals Between Identical Elements',
    question_text:
      'You are given a 0-indexed array of n integers arr. The interval between two elements in arr is defined as the absolute difference between their indices. More formally, the interval between arr[i] and arr[j] is |i - j|. Return an array intervals of length n where intervals[i] is the sum of intervals between arr[i] and each element in arr with the same value as arr[i]. Note: |x| is the absolute value of x. ',
  },
  {
    question_title: 'Recover the Original Array',
    question_text:
      'Alice had a 0-indexed array arr consisting of n positive integers. She chose an arbitrary positive integer k and created two new 0-indexed integer arrays lower and higher in the following manner: Unfortunately, Alice lost all three arrays. However, she remembers the integers that were present in the arrays lower and higher, but not the array each integer belonged to. Help Alice and recover the original array. Given an array nums consisting of 2n integers, where exactly n of the integers were present in lower and the remaining in higher, return the original array arr. In case the answer is not unique, return any valid array. Note: The test cases are generated such that there exists at least one valid array arr. ',
  },
  {
    question_title: "Check if All A's Appears Before All B's",
    question_text:
      "Given a string s consisting of only the characters 'a' and 'b', return true if every 'a' appears before every 'b' in the string. Otherwise, return false. ",
  },
  {
    question_title: 'Number of Laser Beams in a Bank',
    question_text:
      "Anti-theft security devices are activated inside a bank. You are given a 0-indexed binary string array bank representing the floor plan of the bank, which is an m x n 2D matrix. bank[i] represents the ith row, consisting of '0's and '1's. '0' means the cell is empty, while'1' means the cell has a security device. There is one laser beam between any two security devices if both conditions are met: Laser beams are independent, i.e., one beam does not interfere nor join with another. Return the total number of laser beams in the bank. ",
  },
  {
    question_title: 'Destroying Asteroids',
    question_text:
      'You are given an integer mass, which represents the original mass of a planet. You are further given an integer array asteroids, where asteroids[i] is the mass of the ith asteroid. You can arrange for the planet to collide with the asteroids in any arbitrary order. If the mass of the planet is greater than or equal to the mass of the asteroid, the asteroid is destroyed and the planet gains the mass of the asteroid. Otherwise, the planet is destroyed. Return true if all asteroids can be destroyed. Otherwise, return false. ',
  },
  {
    question_title: 'Maximum Employees to Be Invited to a Meeting',
    question_text:
      'A company is organizing a meeting and has a list of n employees, waiting to be invited. They have arranged for a large circular table, capable of seating any number of employees. The employees are numbered from 0 to n - 1. Each employee has a favorite person and they will attend the meeting only if they can sit next to their favorite person at the table. The favorite person of an employee is not themself. Given a 0-indexed integer array favorite, where favorite[i] denotes the favorite person of the ith employee, return the maximum number of employees that can be invited to the meeting. ',
  },
  {
    question_title: 'Minimum Cost of Buying Candies With Discount',
    question_text:
      'A shop is selling candies at a discount. For every two candies sold, the shop gives a third candy for free. The customer can choose any candy to take away for free as long as the cost of the chosen candy is less than or equal to the minimum cost of the two candies bought. Given a 0-indexed integer array cost, where cost[i] denotes the cost of the ith candy, return the minimum cost of buying all the candies. ',
  },
  {
    question_title: 'Count the Hidden Sequences',
    question_text:
      'You are given a 0-indexed array of n integers differences, which describes the differences between each pair of consecutive integers of a hidden sequence of length (n + 1). More formally, call the hidden sequence hidden, then we have that differences[i] = hidden[i + 1] - hidden[i]. You are further given two integers lower and upper that describe the inclusive range of values [lower, upper] that the hidden sequence can contain. Return the number of possible hidden sequences there are. If there are no possible sequences, return 0. ',
  },
  {
    question_title: 'K Highest Ranked Items Within a Price Range',
    question_text:
      'You are given a 0-indexed 2D integer array grid of size m x n that represents a map of the items in a shop. The integers in the grid represent the following: It takes 1 step to travel between adjacent grid cells. You are also given integer arrays pricing and start where pricing = [low, high] and start = [row, col] indicates that you start at the position (row, col) and are interested only in items with a price in the range of [low, high] (inclusive). You are further given an integer k. You are interested in the positions of the k highest-ranked items whose prices are within the given price range. The rank is determined by the first of these criteria that is different: Return the k highest-ranked items within the price range sorted by their rank (highest to lowest). If there are fewer than k reachable items within the price range, return all of them. ',
  },
  {
    question_title: 'Number of Ways to Divide a Long Corridor',
    question_text:
      "Along a long library corridor, there is a line of seats and decorative plants. You are given a 0-indexed string corridor of length n consisting of letters 'S' and 'P' where each 'S' represents a seat and each 'P' represents a plant. One room divider has already been installed to the left of index 0, and another to the right of index n - 1. Additional room dividers can be installed. For each position between indices i - 1 and i (1 <= i <= n - 1), at most one divider can be installed. Divide the corridor into non-overlapping sections, where each section has exactly two seats with any number of plants. There may be multiple ways to perform the division. Two ways are different if there is a position with a room divider installed in the first way but not in the second way. Return the number of ways to divide the corridor. Since the answer may be very large, return it modulo 109 + 7. If there is no way, return 0. ",
  },
  {
    question_title: 'Check if Every Row and Column Contains All Numbers',
    question_text:
      'An n x n matrix is valid if every row and every column contains all the integers from 1 to n (inclusive). Given an n x n integer matrix matrix, return true if the matrix is valid. Otherwise, return false. ',
  },
  {
    question_title: "Minimum Swaps to Group All 1's Together II",
    question_text:
      "A swap is defined as taking two distinct positions in an array and swapping the values in them. A circular array is defined as an array where we consider the first element and the last element to be adjacent. Given a binary circular array nums, return the minimum number of swaps required to group all 1's present in the array together at any location. ",
  },
  {
    question_title: 'Count Words Obtained After Adding a Letter',
    question_text:
      'You are given two 0-indexed arrays of strings startWords and targetWords. Each string consists of lowercase English letters only. For each string in targetWords, check if it is possible to choose a string from startWords and perform a conversion operation on it to be equal to that from targetWords. The conversion operation is described in the following two steps: Return the number of strings in targetWords that can be obtained by performing the operations on any string of startWords. Note that you will only be verifying if the string in targetWords can be obtained from a string in startWords by performing the operations. The strings in startWords do not actually change during this process. ',
  },
  {
    question_title: 'Earliest Possible Day of Full Bloom',
    question_text:
      'You have n flower seeds. Every seed must be planted first before it can begin to grow, then bloom. Planting a seed takes time and so does the growth of a seed. You are given two 0-indexed integer arrays plantTime and growTime, of length n each: From the beginning of day 0, you can plant the seeds in any order. Return the earliest possible day where all seeds are blooming. ',
  },
  {
    question_title: 'Divide a String Into Groups of Size k',
    question_text:
      'A string s can be partitioned into groups of size k using the following procedure: Note that the partition is done so that after removing the fill character from the last group (if it exists) and concatenating all the groups in order, the resultant string should be s. Given the string s, the size of each group k and the character fill, return a string array denoting the composition of every group s has been divided into, using the above procedure. ',
  },
  {
    question_title: 'All Divisions With the Highest Score of a Binary Array',
    question_text:
      "You are given a 0-indexed binary array nums of length n. nums can be divided at index i (where 0 <= i <= n) into two arrays (possibly empty) numsleft and numsright: The division score of an index i is the sum of the number of 0's in numsleft and the number of 1's in numsright. Return all distinct indices that have the highest possible division score. You may return the answer in any order. ",
  },
  {
    question_title: 'Solving Questions With Brainpower',
    question_text:
      'You are given a 0-indexed 2D integer array questions where questions[i] = [pointsi, brainpoweri]. The array describes the questions of an exam, where you have to process the questions in order (i.e., starting from question 0) and make a decision whether to solve or skip each question. Solving question i will earn you pointsi points but you will be unable to solve each of the next brainpoweri questions. If you skip question i, you get to make the decision on the next question. Return the maximum points you can earn for the exam. ',
  },
  {
    question_title: 'Maximum Running Time of N Computers',
    question_text:
      'You have n computers. You are given the integer n and a 0-indexed integer array batteries where the ith battery can run a computer for batteries[i] minutes. You are interested in running all n computers simultaneously using the given batteries. Initially, you can insert at most one battery into each computer. After that and at any integer time moment, you can remove a battery from a computer and insert another battery any number of times. The inserted battery can be a totally new battery or a battery from another computer. You may assume that the removing and inserting processes take no time. Note that the batteries cannot be recharged. Return the maximum number of minutes you can run all the n computers simultaneously. ',
  },
  {
    question_title: 'Minimum Sum of Four Digit Number After Splitting Digits',
    question_text:
      'You are given a positive integer num consisting of exactly four digits. Split num into two new integers new1 and new2 by using the digits found in num. Leading zeros are allowed in new1 and new2, and all the digits found in num must be used. Return the minimum possible sum of new1 and new2. ',
  },
  {
    question_title: 'Partition Array According to Given Pivot',
    question_text:
      'You are given a 0-indexed integer array nums and an integer pivot. Rearrange nums such that the following conditions are satisfied: Return nums after the rearrangement. ',
  },
  {
    question_title: 'Minimum Cost to Set Cooking Time',
    question_text:
      'A generic microwave supports cooking times for: To set the cooking time, you push at most four digits. The microwave normalizes what you push as four digits by prepending zeroes. It interprets the first two digits as the minutes and the last two digits as the seconds. It then adds them up as the cooking time. For example, You are given integers startAt, moveCost, pushCost, and targetSeconds. Initially, your finger is on the digit startAt. Moving the finger above any specific digit costs moveCost units of fatigue. Pushing the digit below the finger once costs pushCost units of fatigue. There can be multiple ways to set the microwave to cook for targetSeconds seconds but you are interested in the way with the minimum cost. Return the minimum cost to set targetSeconds seconds of cooking time. Remember that one minute consists of 60 seconds. ',
  },
  {
    question_title: 'Minimum Difference in Sums After Removal of Elements',
    question_text:
      'You are given a 0-indexed integer array nums consisting of 3 * n elements. You are allowed to remove any subsequence of elements of size exactly n from nums. The remaining 2 * n elements will be divided into two equal parts: The difference in sums of the two parts is denoted as sumfirst - sumsecond. Return the minimum difference possible between the sums of the two parts after the removal of n elements. ',
  },
  {
    question_title: 'Count Elements With Strictly Smaller and Greater Elements ',
    question_text:
      'Given an integer array nums, return the number of elements that have both a strictly smaller and a strictly greater element appear in nums. ',
  },
  {
    question_title: 'Find All Lonely Numbers in the Array',
    question_text:
      'You are given an integer array nums. A number x is lonely when it appears only once, and no adjacent numbers (i.e. x + 1 and x - 1) appear in the array. Return all lonely numbers in nums. You may return the answer in any order. ',
  },
  {
    question_title: 'Rearrange Array Elements by Sign',
    question_text:
      'You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers. You should rearrange the elements of nums such that the modified array follows the given conditions: Return the modified array after rearranging the elements to satisfy the aforementioned conditions. ',
  },
  {
    question_title: 'Maximum Good People Based on Statements',
    question_text:
      'There are two types of persons: You are given a 0-indexed 2D integer array statements of size n x n that represents the statements made by n people about each other. More specifically, statements[i][j] could be one of the following: Additionally, no person ever makes a statement about themselves. Formally, we have that statements[i][i] = 2 for all 0 <= i < n. Return the maximum number of people who can be good based on the statements made by the n people. ',
  },
  {
    question_title: 'Keep Multiplying Found Values by Two',
    question_text:
      'You are given an array of integers nums. You are also given an integer original which is the first number that needs to be searched for in nums. You then do the following steps: Return the final value of original. ',
  },
  {
    question_title: 'Find Substring With Given Hash Value',
    question_text:
      "The hash of a 0-indexed string s of length k, given integers p and m, is computed using the following function: Where val(s[i]) represents the index of s[i] in the alphabet from val('a') = 1 to val('z') = 26. You are given a string s and the integers power, modulo, k, and hashValue. Return sub, the first substring of s of length k such that hash(sub, power, modulo) == hashValue. The test cases will be generated such that an answer always exists. A substring is a contiguous non-empty sequence of characters within a string. ",
  },
  {
    question_title: 'Groups of Strings',
    question_text:
      'You are given a 0-indexed array of strings words. Each string consists of lowercase English letters only. No letter occurs more than once in any string of words. Two strings s1 and s2 are said to be connected if the set of letters of s2 can be obtained from the set of letters of s1 by any one of the following operations: The array words can be divided into one or more non-intersecting groups. A string belongs to a group if any one of the following is true: Note that the strings in words should be grouped in such a manner that a string belonging to a group cannot be connected to a string present in any other group. It can be proved that such an arrangement is always unique. Return an array ans of size 2 where: ',
  },
  {
    question_title: 'Find Three Consecutive Integers That Sum to a Given Number',
    question_text:
      'Given an integer num, return three consecutive integers (as a sorted array) that sum to num. If num cannot be expressed as the sum of three consecutive integers, return an empty array. ',
  },
  {
    question_title: 'Maximum Split of Positive Even Integers',
    question_text:
      'You are given an integer finalSum. Split it into a sum of a maximum number of unique positive even integers. Return a list of integers that represent a valid split containing a maximum number of integers. If no valid split exists for finalSum, return an empty list. You may return the integers in any order. ',
  },
  {
    question_title: 'Count Good Triplets in an Array',
    question_text:
      'You are given two 0-indexed arrays nums1 and nums2 of length n, both of which are permutations of [0, 1, ..., n - 1]. A good triplet is a set of 3 distinct values which are present in increasing order by position both in nums1 and nums2. In other words, if we consider pos1v as the index of the value v in nums1 and pos2v as the index of the value v in nums2, then a good triplet will be a set (x, y, z) where 0 <= x, y, z <= n - 1, such that pos1x < pos1y < pos1z and pos2x < pos2y < pos2z. Return the total number of good triplets. ',
  },
  {
    question_title: 'Sort Even and Odd Indices Independently',
    question_text:
      'You are given a 0-indexed integer array nums. Rearrange the values of nums according to the following rules: Return the array formed after rearranging the values of nums. ',
  },
  {
    question_title: 'Smallest Value of the Rearranged Number',
    question_text:
      'You are given an integer num. Rearrange the digits of num such that its value is minimized and it does not contain any leading zeros. Return the rearranged number with minimal value. Note that the sign of the number does not change after rearranging the digits. ',
  },
  {
    question_title: 'Design Bitset',
    question_text:
      'A Bitset is a data structure that compactly stores bits. Implement the Bitset class: ',
  },
  {
    question_title: 'Minimum Time to Remove All Cars Containing Illegal Goods',
    question_text:
      "You are given a 0-indexed binary string s which represents a sequence of train cars. s[i] = '0' denotes that the ith car does not contain illegal goods and s[i] = '1' denotes that the ith car does contain illegal goods. As the train conductor, you would like to get rid of all the cars containing illegal goods. You can do any of the following three operations any number of times: Return the minimum time to remove all the cars containing illegal goods. Note that an empty sequence of cars is considered to have no cars containing illegal goods. ",
  },
  {
    question_title: 'Count Operations to Obtain Zero',
    question_text:
      'You are given two non-negative integers num1 and num2. In one operation, if num1 >= num2, you must subtract num2 from num1, otherwise subtract num1 from num2. Return the number of operations required to make either num1 = 0 or num2 = 0. ',
  },
  {
    question_title: 'Minimum Operations to Make the Array Alternating',
    question_text:
      'You are given a 0-indexed array nums consisting of n positive integers. The array nums is called alternating if: In one operation, you can choose an index i and change nums[i] into any positive integer. Return the minimum number of operations required to make the array alternating. ',
  },
  {
    question_title: 'Removing Minimum Number of Magic Beans',
    question_text:
      'You are given an array of positive integers beans, where each integer represents the number of magic beans found in a particular magic bag. Remove any number of beans (possibly none) from each bag such that the number of beans in each remaining non-empty bag (still containing at least one bean) is equal. Once a bean has been removed from a bag, you are not allowed to return it to any of the bags. Return the minimum number of magic beans that you have to remove. ',
  },
  {
    question_title: 'Maximum AND Sum of Array',
    question_text:
      'You are given an integer array nums of length n and an integer numSlots such that 2 * numSlots >= n. There are numSlots slots numbered from 1 to numSlots. You have to place all n integers into the slots such that each slot contains at most two numbers. The AND sum of a given placement is the sum of the bitwise AND of every number with its respective slot number. Return the maximum possible AND sum of nums given numSlots slots. ',
  },
  {
    question_title: 'Counting Words With a Given Prefix',
    question_text:
      'You are given an array of strings words and a string pref. Return the number of strings in words that contain pref as a prefix. A prefix of a string s is any leading contiguous substring of s. ',
  },
  {
    question_title: 'Minimum Number of Steps to Make Two Strings Anagram II',
    question_text:
      'You are given two strings s and t. In one step, you can append any character to either s or t. Return the minimum number of steps to make s and t anagrams of each other. An anagram of a string is a string that contains the same characters with a different (or the same) ordering. ',
  },
  {
    question_title: 'Minimum Time to Complete Trips',
    question_text:
      'You are given an array time where time[i] denotes the time taken by the ith bus to complete one trip. Each bus can make multiple trips successively; that is, the next trip can start immediately after completing the current trip. Also, each bus operates independently; that is, the trips of one bus do not influence the trips of any other bus. You are also given an integer totalTrips, which denotes the number of trips all buses should make in total. Return the minimum time required for all buses to complete at least totalTrips trips. ',
  },
  {
    question_title: 'Minimum Time to Finish the Race',
    question_text:
      'You are given a 0-indexed 2D integer array tires where tires[i] = [fi, ri] indicates that the ith tire can finish its xth successive lap in fi * ri(x-1) seconds. You are also given an integer changeTime and an integer numLaps. The race consists of numLaps laps and you may start the race with any tire. You have an unlimited supply of each tire and after every lap, you may change to any given tire (including the current tire type) if you wait changeTime seconds. Return the minimum time to finish the race. ',
  },
  {
    question_title: 'Count Integers With Even Digit Sum',
    question_text:
      'Given a positive integer num, return the number of positive integers less than or equal to num whose digit sums are even. The digit sum of a positive integer is the sum of all its digits. ',
  },
  {
    question_title: 'Construct String With Repeat Limit',
    question_text:
      'You are given a string s and an integer repeatLimit. Construct a new string repeatLimitedString using the characters of s such that no letter appears more than repeatLimit times in a row. You do not have to use all characters from s. Return the lexicographically largest repeatLimitedString possible. A string a is lexicographically larger than a string b if in the first position where a and b differ, string a has a letter that appears later in the alphabet than the corresponding letter in b. If the first min(a.length, b.length) characters do not differ, then the longer string is the lexicographically larger one. ',
  },
  {
    question_title: 'Count Array Pairs Divisible by K',
    question_text:
      'Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) such that: ',
  },
  {
    question_title: 'Cells in a Range on an Excel Sheet',
    question_text:
      'A cell (r, c) of an excel sheet is represented as a string "<col><row>" where: You are given a string s\xa0in\xa0the format "<col1><row1>:<col2><row2>", where <col1> represents the column c1, <row1> represents the row r1, <col2> represents the column c2, and <row2> represents the row r2, such that r1 <= r2 and c1 <= c2. Return the list of cells (x, y) such that r1 <= x <= r2 and c1 <= y <= c2. The cells should be represented as\xa0strings in the format mentioned above and be sorted in non-decreasing order first by columns and then by rows. ',
  },
  {
    question_title: 'Append K Integers With Minimal Sum',
    question_text:
      'You are given an integer array nums and an integer k. Append k unique positive integers that do not appear in nums to nums such that the resulting total sum is minimum. Return the sum of the k integers appended to nums. ',
  },
  {
    question_title: 'Create Binary Tree From Descriptions',
    question_text:
      'You are given a 2D integer array descriptions where descriptions[i] = [parenti, childi, isLefti] indicates that parenti is the parent of childi in a binary tree of unique values. Furthermore, Construct the binary tree described by descriptions and return its root. The test cases will be generated such that the binary tree is valid. ',
  },
  {
    question_title: 'Replace Non-Coprime Numbers in Array',
    question_text:
      'You are given an array of integers nums. Perform the following steps: Return the final modified array. It can be shown that replacing adjacent non-coprime numbers in any arbitrary order will lead to the same result. The test cases are generated such that the values in the final array are less than or equal to 108. Two values x and y are non-coprime if GCD(x, y) > 1 where GCD(x, y) is the Greatest Common Divisor of x and y. ',
  },
  {
    question_title: 'Divide Array Into Equal Pairs',
    question_text:
      'You are given an integer array nums consisting of 2 * n integers. You need to divide nums into n pairs such that: Return true if nums can be divided into n pairs, otherwise return false. ',
  },
  {
    question_title: 'Maximize Number of Subsequences in a String',
    question_text:
      'You are given a 0-indexed string text and another 0-indexed string pattern of length 2, both of which consist of only lowercase English letters. You can add either pattern[0] or pattern[1] anywhere in text exactly once. Note that the character can be added even at the beginning or at the end of text. Return the maximum number of times pattern can occur as a subsequence of the modified text. A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters. ',
  },
  {
    question_title: 'Minimum Operations to Halve Array Sum',
    question_text:
      'You are given an array nums of positive integers. In one operation, you can choose any number from nums and reduce it to exactly half the number. (Note that you may choose this reduced number in future operations.) Return the minimum number of operations to reduce the sum of nums by at least half. ',
  },
  {
    question_title: 'Minimum White Tiles After Covering With Carpets',
    question_text:
      'You are given a 0-indexed binary string floor, which represents the colors of tiles on a floor: You are also given numCarpets and carpetLen. You have numCarpets black carpets, each of length carpetLen tiles. Cover the tiles with the given carpets such that the number of white tiles still visible is minimum. Carpets may overlap one another. Return the minimum number of white tiles still visible. ',
  },
  {
    question_title: 'Most Frequent Number Following Key In an Array',
    question_text:
      'You are given a 0-indexed integer array nums. You are also given an integer key, which is present in nums. For every unique integer target in nums, count the number of times target immediately follows an occurrence of key in nums. In other words, count the number of indices i such that: Return the target with the maximum count. The test cases will be generated such that the target with maximum count is unique. ',
  },
  {
    question_title: 'Count Hills and Valleys in an Array',
    question_text:
      'You are given a 0-indexed integer array nums. An index i is part of a hill in nums if the closest non-equal neighbors of i are smaller than nums[i]. Similarly, an index i is part of a valley in nums if the closest non-equal neighbors of i are larger than nums[i]. Adjacent indices i and j are part of the same hill or valley if nums[i] == nums[j]. Note that for an index to be part of a hill or valley, it must have a non-equal neighbor on both the left and right of the index. Return the number of hills and valleys in nums. ',
  },
  {
    question_title: 'Count Collisions on a Road',
    question_text:
      "There are n cars on an infinitely long road. The cars are numbered from 0 to n - 1 from left to right and each car is present at a unique point. You are given a 0-indexed string directions of length n. directions[i] can be either 'L', 'R', or 'S' denoting whether the ith car is moving towards the left, towards the right, or staying at its current point respectively. Each moving car has the same speed. The number of collisions can be calculated as follows: After a collision, the cars involved can no longer move and will stay at the point where they collided. Other than that, cars cannot change their state or direction of motion. Return the total number of collisions that will happen on the road. ",
  },
  {
    question_title: 'Maximum Points in an Archery Competition',
    question_text:
      'Alice and Bob are opponents in an archery competition. The competition has set the following rules: For example, if Alice and Bob both shot 2 arrows on the section with score 11, then Alice takes 11 points. On the other hand, if Alice shot 0 arrows on the section with score 11 and Bob shot 2 arrows on that same section, then Bob takes 11 points. You are given the integer numArrows and an integer array aliceArrows of size 12, which represents the number of arrows Alice shot on each scoring section from 0 to 11. Now, Bob wants to maximize the total number of points he can obtain. Return the array bobArrows which represents the number of arrows Bob shot on each scoring section from 0 to 11. The sum of the values in bobArrows should equal numArrows. If there are multiple ways for Bob to earn the maximum total points, return any one of them. ',
  },
  {
    question_title: 'Longest Substring of One Repeating Character',
    question_text:
      'You are given a 0-indexed string s. You are also given a 0-indexed string queryCharacters of length k and a 0-indexed array of integer indices queryIndices of length k, both of which are used to describe k queries. The ith query updates the character in s at index queryIndices[i] to the character queryCharacters[i]. Return an array lengths of length k where lengths[i] is the length of the longest substring of s consisting of only one repeating character after the ith query is performed. ',
  },
  {
    question_title: 'Find All K-Distant Indices in an Array',
    question_text:
      'You are given a 0-indexed integer array nums and two integers key and k. A k-distant index is an index i of nums for which there exists at least one index j such that |i - j| <= k and nums[j] == key. Return a list of all k-distant indices sorted in increasing order. ',
  },
  {
    question_title: 'Find Triangular Sum of an Array',
    question_text:
      'You are given a 0-indexed integer array nums, where nums[i] is a digit between 0 and 9 (inclusive). The triangular sum of nums is the value of the only element present in nums after the following process terminates: Return the triangular sum of nums. ',
  },
  {
    question_title: 'Number of Ways to Select Buildings',
    question_text:
      'You are given a 0-indexed binary string s which represents the types of buildings along a street where: As a city official, you would like to select 3 buildings for random inspection. However, to ensure variety, no two consecutive buildings out of the selected buildings can be of the same type. Return the number of valid ways to select 3 buildings. ',
  },
  {
    question_title: 'Sum of Scores of Built Strings',
    question_text:
      'You are building a string s of length n one character at a time, prepending each new character to the front of the string. The strings are labeled from 1 to n, where the string with length i is labeled si. The score of si is the length of the longest common prefix between si and sn (Note that s == sn). Given the final string s, return the sum of the score of every si. ',
  },
  {
    question_title: 'Largest Number After Digit Swaps by Parity',
    question_text:
      'You are given a positive integer num. You may swap any two digits of num that have the same parity (i.e. both odd digits or both even digits). Return the largest possible value of num after any number of swaps. ',
  },
  {
    question_title: 'Minimize Result by Adding Parentheses to Expression',
    question_text:
      "You are given a 0-indexed string expression of the form \"<num1>+<num2>\" where <num1> and <num2> represent positive integers. Add a pair of parentheses to expression such that after the addition of parentheses, expression is a valid mathematical expression and evaluates to the smallest possible value. The left parenthesis must be added to the left of '+' and the right parenthesis must be added to the right of '+'. Return expression after adding a pair of parentheses such that expression evaluates to the smallest possible value. If there are multiple answers that yield the same result, return any of them. The input has been generated such that the original value of expression, and the value of expression after adding any pair of parentheses that meets the requirements fits within a signed 32-bit integer. ",
  },
  {
    question_title: 'Maximum Product After K Increments',
    question_text:
      'You are given an array of non-negative integers nums and an integer k. In one operation, you may choose any element from nums and increment it by 1. Return the maximum product of nums after at most k operations. Since the answer may be very large, return it modulo 109 + 7. Note that you should maximize the product before taking the modulo. ',
  },
  {
    question_title: 'Maximum Total Beauty of the Gardens',
    question_text:
      'Alice is a caretaker of n gardens and she wants to plant flowers to maximize the total beauty of all her gardens. You are given a 0-indexed integer array flowers of size n, where flowers[i] is the number of flowers already planted in the ith garden. Flowers that are already planted cannot be removed. You are then given another integer newFlowers, which is the maximum number of flowers that Alice can additionally plant. You are also given the integers target, full, and partial. A garden is considered complete if it has at least target flowers. The total beauty of the gardens is then determined as the sum of the following: Return the maximum total beauty that Alice can obtain after planting at most newFlowers flowers. ',
  },
  {
    question_title: 'Minimum Number of Operations to Convert Time',
    question_text:
      'You are given two strings current and correct representing two 24-hour times. 24-hour times are formatted as "HH:MM", where HH is between 00 and 23, and MM is between 00 and 59. The earliest 24-hour time is 00:00, and the latest is 23:59. In one operation you can increase the time current by 1, 5, 15, or 60 minutes. You can perform this operation any number of times. Return the minimum number of operations needed to convert current to correct. ',
  },
];

export const QUESTION_TITLES = [
  'Two Sum',
  'Add Two Numbers',
  'Longest Substring Without Repeating Characters',
  'Median of Two Sorted Arrays',
  'Longest Palindromic Substring',
  'Zigzag Conversion',
  'Reverse Integer',
  'String to Integer (atoi)',
  'Palindrome Number',
  'Regular Expression Matching',
  'Container With Most Water',
  'Integer to Roman',
  'Roman to Integer',
  'Longest Common Prefix',
  '3Sum',
  '3Sum Closest',
  'Letter Combinations of a Phone Number',
  '4Sum',
  'Valid Parentheses',
  'Generate Parentheses',
  'Remove Duplicates from Sorted Array',
  'Remove Element',
  'Implement strStr()',
  'Divide Two Integers',
  'Substring with Concatenation of All Words',
  'Next Permutation',
  'Longest Valid Parentheses',
  'Search in Rotated Sorted Array',
  'Find First and Last Position of Element in Sorted Array',
  'Search Insert Position',
  'Valid Sudoku',
  'Sudoku Solver',
  'Count and Say',
  'Combination Sum',
  'Combination Sum II',
  'First Missing Positive',
  'Trapping Rain Water',
  'Multiply Strings',
  'Wildcard Matching',
  'Jump Game II',
  'Permutations',
  'Permutations II',
  'Rotate Image',
  'Group Anagrams',
  'Pow(x, n)',
  'N-Queens',
  'Maximum Subarray',
  'Spiral Matrix',
  'Jump Game',
  'Merge Intervals',
  'Insert Interval',
  'Length of Last Word',
  'Spiral Matrix II',
  'Permutation Sequence',
  'Unique Paths',
  'Unique Paths II',
  'Minimum Path Sum',
  'Valid Number',
  'Plus One',
  'Add Binary',
  'Text Justification',
  'Sqrt(x)',
  'Climbing Stairs',
  'Simplify Path',
  'Edit Distance',
  'Set Matrix Zeroes',
  'Search a 2D Matrix',
  'Sort Colors',
  'Minimum Window Substring',
  'Subsets',
  'Word Search',
  'Remove Duplicates from Sorted Array II',
  'Search in Rotated Sorted Array II',
  'Largest Rectangle in Histogram',
  'Maximal Rectangle',
  'Scramble String',
  'Merge Sorted Array',
  'Gray Code',
  'Subsets II',
  'Decode Ways',
  'Restore IP Addresses',
  'Binary Tree Inorder Traversal',
  'Unique Binary Search Trees II',
  'Unique Binary Search Trees',
  'Interleaving String',
  'Validate Binary Search Tree',
  'Recover Binary Search Tree',
  'Same Tree',
  'Symmetric Tree',
  'Binary Tree Level Order Traversal',
  'Binary Tree Zigzag Level Order Traversal',
  'Maximum Depth of Binary Tree',
  'Construct Binary Tree from Preorder and Inorder Traversal',
  'Construct Binary Tree from Inorder and Postorder Traversal',
  'Binary Tree Level Order Traversal II',
  'Convert Sorted Array to Binary Search Tree',
  'Balanced Binary Tree',
  'Minimum Depth of Binary Tree',
  'Path Sum',
  'Path Sum II',
  'Flatten Binary Tree to Linked List',
  'Distinct Subsequences',
  'Populating Next Right Pointers in Each Node',
  'Populating Next Right Pointers in Each Node II',
  "Pascal's Triangle",
  "Pascal's Triangle II",
  'Triangle',
  'Best Time to Buy and Sell Stock',
  'Best Time to Buy and Sell Stock II',
  'Best Time to Buy and Sell Stock III',
  'Binary Tree Maximum Path Sum',
  'Valid Palindrome',
  'Word Ladder II',
  'Word Ladder',
  'Longest Consecutive Sequence',
  'Sum Root to Leaf Numbers',
  'Surrounded Regions',
  'Palindrome Partitioning',
  'Palindrome Partitioning II',
  'Clone Graph',
  'Gas Station',
  'Candy',
  'Single Number',
  'Single Number II',
  'Copy List with Random Pointer',
  'Word Break',
  'Word Break II',
  'Linked List Cycle',
  'Linked List Cycle II',
  'Binary Tree Preorder Traversal',
  'Binary Tree Postorder Traversal',
  'LRU Cache',
  'Insertion Sort List',
  'Sort List',
  'Max Points on a Line',
  'Evaluate Reverse Polish Notation',
  'Reverse Words in a String',
  'Maximum Product Subarray',
  'Find Minimum in Rotated Sorted Array',
  'Find Minimum in Rotated Sorted Array II',
  'Intersection of Two Linked Lists',
  'Find Peak Element',
  'Maximum Gap',
  'Compare Version Numbers',
  'Fraction to Recurring Decimal',
  'Two Sum II - Input Array Is Sorted',
  'Excel Sheet Column Title',
  'Majority Element',
  'Excel Sheet Column Number',
  'Factorial Trailing Zeroes',
  'Dungeon Game',
  'Largest Number',
  'Repeated DNA Sequences',
  'Best Time to Buy and Sell Stock IV',
  'Rotate Array',
  'House Robber',
  'Binary Tree Right Side View',
  'Number of Islands',
  'Happy Number',
  'Count Primes',
  'Isomorphic Strings',
  'Course Schedule',
  'Implement Trie (Prefix Tree)',
  'Minimum Size Subarray Sum',
  'Course Schedule II',
  'Design Add and Search Words Data Structure',
  'Word Search II',
  'House Robber II',
  'Shortest Palindrome',
  'Kth Largest Element in an Array',
  'Combination Sum III',
  'Contains Duplicate',
  'The Skyline Problem',
  'Contains Duplicate II',
  'Contains Duplicate III',
  'Maximal Square',
  'Count Complete Tree Nodes',
  'Rectangle Area',
  'Basic Calculator',
  'Invert Binary Tree',
  'Basic Calculator II',
  'Summary Ranges',
  'Majority Element II',
  'Kth Smallest Element in a BST',
  'Power of Two',
  'Number of Digit One',
  'Lowest Common Ancestor of a Binary Search Tree',
  'Lowest Common Ancestor of a Binary Tree',
  'Product of Array Except Self',
  'Sliding Window Maximum',
  'Search a 2D Matrix II',
  'Different Ways to Add Parentheses',
  'Valid Anagram',
  'Binary Tree Paths',
  'Add Digits',
  'Single Number III',
  'Ugly Number',
  'Ugly Number II',
  'Missing Number',
  'Integer to English Words',
  'H-Index',
  'H-Index II',
  'First Bad Version',
  'Perfect Squares',
  'Expression Add Operators',
  'Move Zeroes',
  'Peeking Iterator',
  'Find the Duplicate Number',
  'Game of Life',
  'Word Pattern',
  'Nim Game',
  'Find Median from Data Stream',
  'Serialize and Deserialize Binary Tree',
  'Bulls and Cows',
  'Longest Increasing Subsequence',
  'Remove Invalid Parentheses',
  'Range Sum Query - Immutable',
  'Range Sum Query 2D - Immutable',
  'Additive Number',
  'Range Sum Query - Mutable',
  'Best Time to Buy and Sell Stock with Cooldown',
  'Minimum Height Trees',
  'Burst Balloons',
  'Super Ugly Number',
  'Count of Smaller Numbers After Self',
  'Remove Duplicate Letters',
  'Maximum Product of Word Lengths',
  'Bulb Switcher',
  'Create Maximum Number',
  'Coin Change',
  'Wiggle Sort II',
  'Power of Three',
  'Count of Range Sum',
  'Longest Increasing Path in a Matrix',
  'Patching Array',
  'Verify Preorder Serialization of a Binary Tree',
  'Reconstruct Itinerary',
  'Increasing Triplet Subsequence',
  'Self Crossing',
  'Palindrome Pairs',
  'House Robber III',
  'Counting Bits',
  'Flatten Nested List Iterator',
  'Power of Four',
  'Integer Break',
  'Reverse String',
  'Reverse Vowels of a String',
  'Top K Frequent Elements',
  'Intersection of Two Arrays',
  'Intersection of Two Arrays II',
  'Data Stream as Disjoint Intervals',
  'Russian Doll Envelopes',
  'Design Twitter',
  'Count Numbers with Unique Digits',
  'Max Sum of Rectangle No Larger Than K',
  'Water and Jug Problem',
  'Valid Perfect Square',
  'Largest Divisible Subset',
  'Sum of Two Integers',
  'Super Pow',
  'Find K Pairs with Smallest Sums',
  'Guess Number Higher or Lower',
  'Guess Number Higher or Lower II',
  'Wiggle Subsequence',
  'Combination Sum IV',
  'Kth Smallest Element in a Sorted Matrix',
  'Insert Delete GetRandom O(1)',
  'Insert Delete GetRandom O(1) - Duplicates allowed',
  'Linked List Random Node',
  'Ransom Note',
  'Shuffle an Array',
  'Mini Parser',
  'Lexicographical Numbers',
  'First Unique Character in a String',
  'Longest Absolute File Path',
  'Find the Difference',
  'Elimination Game',
  'Perfect Rectangle',
  'Is Subsequence',
  'UTF-8 Validation',
  'Decode String',
  'Longest Substring with At Least K Repeating Characters',
  'Rotate Function',
  'Integer Replacement',
  'Random Pick Index',
  'Evaluate Division',
  'Nth Digit',
  'Remove K Digits',
  'Frog Jump',
  'Sum of Left Leaves',
  'Convert a Number to Hexadecimal',
  'Queue Reconstruction by Height',
  'Trapping Rain Water II',
  'Longest Palindrome',
  'Split Array Largest Sum',
  'Fizz Buzz',
  'Arithmetic Slices',
  'Third Maximum Number',
  'Add Strings',
  'Partition Equal Subset Sum',
  'Pacific Atlantic Water Flow',
  'Battleships in a Board',
  'Strong Password Checker',
  'Maximum XOR of Two Numbers in an Array',
  'Reconstruct Original Digits from English',
  'Longest Repeating Character Replacement',
  'All O`one Data Structure',
  'Minimum Genetic Mutation',
  'Number of Segments in a String',
  'Non-overlapping Intervals',
  'Find Right Interval',
  'Path Sum III',
  'Find All Anagrams in a String',
  'Arranging Coins',
  'Find All Duplicates in an Array',
  'String Compression',
  'Add Two Numbers II',
  'Arithmetic Slices II - Subsequence',
  'Number of Boomerangs',
  'Find All Numbers Disappeared in an Array',
  'Serialize and Deserialize BST',
  'Sort Characters By Frequency',
  'Minimum Number of Arrows to Burst Balloons',
  'Minimum Moves to Equal Array Elements',
  '4Sum II',
  'Assign Cookies',
  '132 Pattern',
  'Circular Array Loop',
  'Poor Pigs',
  'Repeated Substring Pattern',
  'LFU Cache',
  'Minimum Moves to Equal Array Elements II',
  'Island Perimeter',
  'Can I Win',
  'Count The Repetitions',
  'Unique Substrings in Wraparound String',
  'Validate IP Address',
  'Concatenated Words',
  'Matchsticks to Square',
  'Ones and Zeroes',
  'Heaters',
  'Total Hamming Distance',
  'Largest Palindrome Product',
  'Sliding Window Median',
  'Magical String',
  'License Key Formatting',
  'Smallest Good Base',
  'Max Consecutive Ones',
  'Predict the Winner',
  'Zuma Game',
  'Kth Smallest Instructions',
  'Increasing Subsequences',
  'Construct the Rectangle',
  'Reverse Pairs',
  'Target Sum',
  'Teemo Attacking',
  'Next Greater Element I',
  'Diagonal Traverse',
  'Keyboard Row',
  'Find Mode in Binary Search Tree',
  'IPO',
  'Next Greater Element II',
  'Base 7',
  'Relative Ranks',
  'Perfect Number',
  'Most Frequent Subtree Sum',
  'Find Bottom Left Tree Value',
  'Freedom Trail',
  'Find Largest Value in Each Tree Row',
  'Longest Palindromic Subsequence',
  'Super Washing Machines',
  'Coin Change 2',
  'Detect Capital',
  'Longest Uncommon Subsequence I',
  'Longest Uncommon Subsequence II',
  'Continuous Subarray Sum',
  'Longest Word in Dictionary through Deleting',
  'Contiguous Array',
  'Beautiful Arrangement',
  'Minesweeper',
  'Minimum Absolute Difference in BST',
  'K-diff Pairs in an Array',
  'Encode and Decode TinyURL',
  'Complex Number Multiplication',
  'Convert BST to Greater Tree',
  'Single Element in a Sorted Array',
  'Reverse String II',
  '01 Matrix',
  'Diameter of Binary Tree',
  'Remove Boxes',
  'Number of Provinces',
  'Student Attendance Record I',
  'Student Attendance Record II',
  'Optimal Division',
  'Brick Wall',
  'Next Greater Element III',
  'Reverse Words in a String III',
  'Subarray Sum Equals K',
  'Array Partition I',
  'Binary Tree Tilt',
  'Find the Closest Palindrome',
  'Array Nesting',
  'Reshape the Matrix',
  'Permutation in String',
  'Subtree of Another Tree',
  'Distribute Candies',
  'Out of Boundary Paths',
  'Shortest Unsorted Continuous Subarray',
  'Delete Operation for Two Strings',
  'Erect the Fence',
  'Tag Validator',
  'Fraction Addition and Subtraction',
  'Valid Square',
  'Longest Harmonious Subsequence',
  'Range Addition II',
  'Minimum Index Sum of Two Lists',
  'Non-negative Integers without Consecutive Ones',
  'Can Place Flowers',
  'Construct String from Binary Tree',
  'Find Duplicate File in System',
  'Valid Triangle Number',
  'Merge Two Binary Trees',
  'Task Scheduler',
  'Add One Row to Tree',
  'Maximum Product of Three Numbers',
  'K Inverse Pairs Array',
  'Course Schedule III',
  'Smallest Range Covering Elements from K Lists',
  'Sum of Square Numbers',
  'Exclusive Time of Functions',
  'Shopping Offers',
  'Decode Ways II',
  'Solve the Equation',
  'Maximum Average Subarray I',
  'Set Mismatch',
  'Maximum Length of Pair Chain',
  'Palindromic Substrings',
  'Replace Words',
  'Dota2 Senate',
  '2 Keys Keyboard',
  'Find Duplicate Subtrees',
  'Two Sum IV - Input is a BST',
  'Maximum Binary Tree',
  'Print Binary Tree',
  'Robot Return to Origin',
  'Find K Closest Elements',
  'Split Array into Consecutive Subsequences',
  'Image Smoother',
  'Maximum Width of Binary Tree',
  'Strange Printer',
  'Non-decreasing Array',
  'Beautiful Arrangement II',
  'Kth Smallest Number in Multiplication Table',
  'Trim a Binary Search Tree',
  'Maximum Swap',
  'Second Minimum Node In a Binary Tree',
  'Bulb Switcher II',
  'Number of Longest Increasing Subsequence',
  'Longest Continuous Increasing Subsequence',
  'Cut Off Trees for Golf Event',
  'Implement Magic Dictionary',
  'Map Sum Pairs',
  'Valid Parenthesis String',
  '24 Game',
  'Valid Palindrome II',
  'Baseball Game',
  'Redundant Connection',
  'Redundant Connection II',
  'Repeated String Match',
  'Longest Univalue Path',
  'Knight Probability in Chessboard',
  'Maximum Sum of 3 Non-Overlapping Subarrays',
  'Employee Importance',
  'Stickers to Spell Word',
  'Top K Frequent Words',
  'Max Area of Island',
  'Count Binary Substrings',
  'Degree of an Array',
  'Partition to K Equal Sum Subsets',
  'Falling Squares',
  'Minimum ASCII Delete Sum for Two Strings',
  'Subarray Product Less Than K',
  'Best Time to Buy and Sell Stock with Transaction Fee',
  '1-bit and 2-bit Characters',
  'Maximum Length of Repeated Subarray',
  'Find K-th Smallest Pair Distance',
  'Longest Word in Dictionary',
  'Accounts Merge',
  'Remove Comments',
  'Find Pivot Index',
  'Number of Atoms',
  'Self Dividing Numbers',
  'Count Different Palindromic Subsequences',
  'Flood Fill',
  'Asteroid Collision',
  'Parse Lisp Expression',
  'Monotone Increasing Digits',
  'Daily Temperatures',
  'Delete and Earn',
  'Cherry Pickup',
  'To Lower Case',
  'Network Delay Time',
  'Find Smallest Letter Greater Than Target',
  'Prefix and Suffix Search',
  'Min Cost Climbing Stairs',
  'Largest Number At Least Twice of Others',
  'Shortest Completing Word',
  'Contain Virus',
  'Open the Lock',
  'Cracking the Safe',
  'Reach a Number',
  'Pyramid Transition Matrix',
  'Set Intersection Size At Least Two',
  'Special Binary String',
  'N-ary Tree Level Order Traversal',
  'Flatten a Multilevel Doubly Linked List',
  'Prime Number of Set Bits in Binary Representation',
  'Partition Labels',
  'Largest Plus Sign',
  'Couples Holding Hands',
  'Construct Quad Tree',
  'Maximum Depth of N-ary Tree',
  'N-ary Tree Preorder Traversal',
  'N-ary Tree Postorder Traversal',
  'Toeplitz Matrix',
  'Reorganize String',
  'Max Chunks To Make Sorted II',
  'Max Chunks To Make Sorted',
  'Basic Calculator IV',
  'Jewels and Stones',
  'Sliding Puzzle',
  'Global and Local Inversions',
  'Binary Search',
  'Swap Adjacent in LR String',
  'Swim in Rising Water',
  'K-th Symbol in Grammar',
  'Reaching Points',
  'Rabbits in Forest',
  'Transform to Chessboard',
  'Minimum Distance Between BST Nodes',
  'Letter Case Permutation',
  'Is Graph Bipartite?',
  'K-th Smallest Prime Fraction',
  'Cheapest Flights Within K Stops',
  'Rotated Digits',
  'Escape The Ghosts',
  'Domino and Tromino Tiling',
  'Custom Sort String',
  'Number of Matching Subsequences',
  'Preimage Size of Factorial Zeroes Function',
  'Valid Tic-Tac-Toe State',
  'Number of Subarrays with Bounded Maximum',
  'Rotate String',
  'All Paths From Source to Target',
  'Smallest Rotation with Highest Score',
  'Champagne Tower',
  'Design HashSet',
  'Design HashMap',
  'Minimum Swaps To Make Sequences Increasing',
  'Find Eventual Safe States',
  'Bricks Falling When Hit',
  'Unique Morse Code Words',
  'Split Array With Same Average',
  'Number of Lines To Write String',
  'Max Increase to Keep City Skyline',
  'Soup Servings',
  'Expressive Words',
  'Chalkboard XOR Game',
  'Subdomain Visit Count',
  'Largest Triangle Area',
  'Largest Sum of Averages',
  'Binary Tree Pruning',
  'Bus Routes',
  'Ambiguous Coordinates',
  'Linked List Components',
  'Race Car',
  'Most Common Word',
  'Short Encoding of Words',
  'Shortest Distance to a Character',
  'Card Flipping Game',
  'Binary Trees With Factors',
  'Goat Latin',
  'Friends Of Appropriate Ages',
  'Most Profit Assigning Work',
  'Making A Large Island',
  'Count Unique Characters of All Substrings of a Given String',
  'Consecutive Numbers Sum',
  'Positions of Large Groups',
  'Masking Personal Information',
  'Design Circular Deque',
  'Design Circular Queue',
  'Flipping an Image',
  'Find And Replace in String',
  'Sum of Distances in Tree',
  'Image Overlap',
  'Rectangle Overlap',
  'New 21 Game',
  'Push Dominoes',
  'Similar String Groups',
  'Magic Squares In Grid',
  'Keys and Rooms',
  'Split Array into Fibonacci Sequence',
  'Guess the Word',
  'Backspace String Compare',
  'Longest Mountain in Array',
  'Hand of Straights',
  'Shortest Path Visiting All Nodes',
  'Shifting Letters',
  'Maximize Distance to Closest Person',
  'Rectangle Area II',
  'Loud and Rich',
  'Peak Index in a Mountain Array',
  'Car Fleet',
  'K-Similar Strings',
  'Score of Parentheses',
  'Minimum Cost to Hire K Workers',
  'Mirror Reflection',
  'Buddy Strings',
  'Lemonade Change',
  'Score After Flipping Matrix',
  'Shortest Subarray with Sum at Least K',
  'All Nodes Distance K in Binary Tree',
  'Random Pick with Blacklist',
  'Shortest Path to Get All Keys',
  'Smallest Subtree with all the Deepest Nodes',
  'Prime Palindrome',
  'Transpose Matrix',
  'Binary Gap',
  'Reordered Power of 2',
  'Advantage Shuffle',
  'Minimum Number of Refueling Stops',
  'Implement Rand10() Using Rand7()',
  'Leaf-Similar Trees',
  'Length of Longest Fibonacci Subsequence',
  'Walking Robot Simulation',
  'Koko Eating Bananas',
  'Stone Game',
  'Nth Magical Number',
  'Profitable Schemes',
  'Random Pick with Weight',
  'Random Flip Matrix',
  'Random Point in Non-overlapping Rectangles',
  'Generate Random Point in a Circle',
  'Decoded String at Index',
  'Boats to Save People',
  'Projection Area of 3D Shapes',
  'Uncommon Words from Two Sentences',
  'Spiral Matrix III',
  'Possible Bipartition',
  'Super Egg Drop',
  'Fair Candy Swap',
  'Construct Binary Tree from Preorder and Postorder Traversal',
  'Find and Replace Pattern',
  'Sum of Subsequence Widths',
  'Surface Area of 3D Shapes',
  'Groups of Special-Equivalent Strings',
  'All Possible Full Binary Trees',
  'Maximum Frequency Stack',
  'Monotonic Array',
  'Increasing Order Search Tree',
  'Bitwise ORs of Subarrays',
  'Orderly Queue',
  'RLE Iterator',
  'Numbers At Most N Given Digit Set',
  'Valid Permutations for DI Sequence',
  'Fruit Into Baskets',
  'Sort Array By Parity',
  'Super Palindromes',
  'Sum of Subarray Minimums',
  'Smallest Range I',
  'Snakes and Ladders',
  'Smallest Range II',
  'Online Election',
  'Sort an Array',
  'Cat and Mouse',
  'X of a Kind in a Deck of Cards',
  'Partition Array into Disjoint Intervals',
  'Word Subsets',
  'Reverse Only Letters',
  'Maximum Sum Circular Subarray',
  'Complete Binary Tree Inserter',
  'Number of Music Playlists',
  'Minimum Add to Make Parentheses Valid',
  'Sort Array By Parity II',
  '3Sum With Multiplicity',
  'Minimize Malware Spread',
  'Long Pressed Name',
  'Flip String to Monotone Increasing',
  'Three Equal Parts',
  'Minimize Malware Spread II',
  'Unique Email Addresses',
  'Binary Subarrays With Sum',
  'Minimum Falling Path Sum',
  'Beautiful Array',
  'Shortest Bridge',
  'Knight Dialer',
  'Stamping The Sequence',
  'Reorder Data in Log Files',
  'Range Sum of BST',
  'Minimum Area Rectangle',
  'Distinct Subsequences II',
  'Valid Mountain Array',
  'DI String Match',
  'Find the Shortest Superstring',
  'Delete Columns to Make Sorted',
  'Minimum Increment to Make Array Unique',
  'Validate Stack Sequences',
  'Most Stones Removed with Same Row or Column',
  'Bag of Tokens',
  'Largest Time for Given Digits',
  'Reveal Cards In Increasing Order',
  'Flip Equivalent Binary Trees',
  'Largest Component Size by Common Factor',
  'Verifying an Alien Dictionary',
  'Array of Doubled Pairs',
  'Delete Columns to Make Sorted II',
  'Tallest Billboard',
  'Prison Cells After N Days',
  'Check Completeness of a Binary Tree',
  'Regions Cut By Slashes',
  'Delete Columns to Make Sorted III',
  'N-Repeated Element in Size 2N Array',
  'Maximum Width Ramp',
  'Minimum Area Rectangle II',
  'Least Operators to Express Number',
  'Univalued Binary Tree',
  'Vowel Spellchecker',
  'Numbers With Same Consecutive Differences',
  'Binary Tree Cameras',
  'Pancake Sorting',
  'Powerful Integers',
  'Flip Binary Tree To Match Preorder Traversal',
  'Equal Rational Numbers',
  'Fibonacci Number',
  'K Closest Points to Origin',
  'Subarray Sums Divisible by K',
  'Odd Even Jump',
  'Largest Perimeter Triangle',
  'Squares of a Sorted Array',
  'Longest Turbulent Subarray',
  'Distribute Coins in Binary Tree',
  'Unique Paths III',
  'Time Based Key-Value Store',
  'Triples with Bitwise AND Equal To Zero',
  'Minimum Cost For Tickets',
  'String Without AAA or BBB',
  'Sum of Even Numbers After Queries',
  'Interval List Intersections',
  'Vertical Order Traversal of a Binary Tree',
  'Smallest String Starting From Leaf',
  'Add to Array-Form of Integer',
  'Satisfiability of Equality Equations',
  'Broken Calculator',
  'Subarrays with K Different Integers',
  'Cousins in Binary Tree',
  'Rotting Oranges',
  'Minimum Number of K Consecutive Bit Flips',
  'Number of Squareful Arrays',
  'Find the Town Judge',
  'Available Captures for Rook',
  'Minimum Cost to Merge Stones',
  'Grid Illumination',
  'Find Common Characters',
  'Check If Word Is Valid After Substitutions',
  'Max Consecutive Ones III',
  'Maximize Sum Of Array After K Negations',
  'Clumsy Factorial',
  'Minimum Domino Rotations For Equal Row',
  'Construct Binary Search Tree from Preorder Traversal',
  'Pairs of Songs With Total Durations Divisible by 60',
  'Capacity To Ship Packages Within D Days',
  'Numbers With Repeated Digits',
  'Partition Array Into Three Parts With Equal Sum',
  'Best Sightseeing Pair',
  'Smallest Integer Divisible by K',
  'Binary String With Substrings Representing 1 To N',
  'Convert to Base -2',
  'Binary Prefix Divisible By 5',
  'Next Greater Node In Linked List',
  'Number of Enclaves',
  'Remove Outermost Parentheses',
  'Sum of Root To Leaf Binary Numbers',
  'Camelcase Matching',
  'Video Stitching',
  'Divisor Game',
  'Longest Arithmetic Subsequence',
  'Maximum Difference Between Node and Ancestor',
  'Recover a Tree From Preorder Traversal',
  'Matrix Cells in Distance Order',
  'Two City Scheduling',
  'Maximum Sum of Two Non-Overlapping Subarrays',
  'Stream of Characters',
  'Moving Stones Until Consecutive',
  'Coloring A Border',
  'Uncrossed Lines',
  'Escape a Large Maze',
  'Minimum Score Triangulation of Polygon',
  'Find Words That Can Be Formed by Characters',
  'Moving Stones Until Consecutive II',
  'Binary Search Tree to Greater Sum Tree',
  'Valid Boomerang',
  'Maximum Level Sum of a Binary Tree',
  'As Far from Land as Possible',
  'Robot Bounded In Circle',
  'Flower Planting With No Adjacent',
  'Partition Array for Maximum Sum',
  'Longest Duplicate Substring',
  'Last Stone Weight',
  'Remove All Adjacent Duplicates In String',
  'Longest String Chain',
  'Last Stone Weight II',
  'Last Substring in Lexicographical Order',
  'Height Checker',
  'Grumpy Bookstore Owner',
  'Previous Permutation With One Swap',
  'Distant Barcodes',
  'Number of Submatrices That Sum to Target',
  'Greatest Common Divisor of Strings',
  'Flip Columns For Maximum Number of Equal Rows',
  'Adding Two Negabinary Numbers',
  'Occurrences After Bigram',
  'Insufficient Nodes in Root to Leaf Paths',
  'Smallest Subsequence of Distinct Characters',
  'Letter Tile Possibilities',
  'Duplicate Zeros',
  'Largest Values From Labels',
  'Shortest Common Supersequence ',
  'Shortest Path in Binary Matrix',
  'Statistics from a Large Sample',
  'Car Pooling',
  'Find in Mountain Array',
  'Brace Expansion II',
  'Path In Zigzag Labelled Binary Tree',
  'Distribute Candies to People',
  'Filling Bookcase Shelves',
  'Parsing A Boolean Expression',
  'Defanging an IP Address',
  'Corporate Flight Bookings',
  'Delete Nodes And Return Forest',
  'Maximum Nesting Depth of Two Valid Parentheses Strings',
  'Mean of Array After Removing Some Elements',
  'Iterator for Combination',
  'Relative Sort Array',
  'Lowest Common Ancestor of Deepest Leaves',
  'Longest Well-Performing Interval',
  'Smallest Sufficient Team',
  'Element Appearing More Than 25% In Sorted Array',
  'Remove Covered Intervals',
  'Graph Connectivity With Threshold',
  'Minimum Falling Path Sum II',
  'Number of Equivalent Domino Pairs',
  'Minimum Cost Tree From Leaf Values',
  'Shortest Path with Alternating Colors',
  'Maximum of Absolute Value Expression',
  'Replace Elements with Greatest Element on Right Side',
  'Sum of Mutated Array Closest to Target',
  'Number of Paths with Max Score',
  'N-th Tribonacci Number',
  'Alphabet Board Path',
  'Largest 1-Bordered Square',
  'Stone Game II',
  'Decompress Run-Length Encoded List',
  'Matrix Block Sum',
  'Sum of Nodes with Even-Valued Grandparent',
  'Distinct Echo Substrings',
  'Decrease Elements To Make Array Zigzag',
  'Binary Tree Coloring Game',
  'Snapshot Array',
  'Longest Common Subsequence',
  'Longest Chunked Palindrome Decomposition',
  'Break a Palindrome',
  'Sort the Matrix Diagonally',
  'Reverse Subarray To Maximize Array Value',
  'Rank Transform of an Array',
  'Rank Transform of a Matrix',
  'Day of the Year',
  'Swap For Longest Repeated Character Substring',
  'Online Majority Element In Subarray',
  'Number of Dice Rolls With Target Sum',
  'Maximum Number of Words You Can Type',
  'Remove Zero Sum Consecutive Nodes from Linked List',
  'Dinner Plate Stacks',
  'Invalid Transactions',
  'Compare Strings by Frequency of the Smallest Character',
  'Number of Days Between Two Dates',
  'Validate Binary Tree Nodes',
  'Closest Divisors',
  'Largest Multiple of Three',
  'Prime Arrangements',
  'Can Make Palindrome from Substring',
  'Reformat Date',
  'Four Divisors',
  'Balance a Binary Search Tree',
  'Constrained Subsequence Sum',
  'Distance Between Bus Stops',
  'Maximum Subarray Sum with One Deletion',
  'Day of the Week',
  'Make Array Strictly Increasing',
  'Range Frequency Queries',
  'Minimum Garden Perimeter to Collect Enough Apples',
  'Kth Ancestor of a Tree Node',
  'Maximum Number of Balloons',
  'Reverse Substrings Between Each Pair of Parentheses',
  'K-Concatenation Maximum Sum',
  'Critical Connections in a Network',
  'Delete Characters to Make Fancy String',
  'Minimum Moves to Reach Target Score',
  'Longest Happy String',
  'Number of Visible People in a Queue',
  'Minimum Absolute Difference',
  'Ugly Number III',
  'Smallest String With Swaps',
  'Sort Items by Groups Respecting Dependencies',
  'Watering Plants',
  'Largest Magic Square',
  'Count Artifacts That Can Be Extracted',
  'Count Ways to Build Rooms in an Ant Colony',
  'Unique Number of Occurrences',
  'Remove All Adjacent Duplicates in String II',
  'Get Equal Substrings Within Budget',
  'Minimum Moves to Reach Target with Rotations',
  'Where Will the Ball Fall',
  'Sum of Floored Pairs',
  'Minimum Cost to Move Chips to The Same Position',
  'Longest Arithmetic Subsequence of Given Difference',
  'Path with Maximum Gold',
  'Count Vowels Permutation',
  'Sort the Jumbled Numbers',
  'Maximum Candies Allocated to K Children',
  'Maximum Product of the Length of Two Palindromic Substrings',
  'Split a String in Balanced Strings',
  'Queens That Can Attack the King',
  'Dice Roll Simulation',
  'Maximum Equal Frequency',
  'Maximize the Topmost Element After K Moves',
  'Check If It Is a Straight Line',
  'Remove Sub-Folders from the Filesystem',
  'Replace the Substring for Balanced String',
  'Maximum Profit in Job Scheduling',
  'Find Players With Zero or One Losses',
  'Minimum Deletions to Make Array Beautiful',
  'Minimum Number of Moves to Make Palindrome',
  'Find Positive Integer Solution for a Given Equation',
  'Circular Permutation in Binary Representation',
  'Maximum Length of a Concatenated String with Unique Characters',
  'Tiling a Rectangle with the Fewest Squares',
  'Airplane Seat Assignment Probability',
  'Tuple with Same Product',
  'Maximum Height by Stacking Cuboids ',
  'Minimum Swaps to Make Strings Equal',
  'Count Number of Nice Subarrays',
  'Minimum Remove to Make Valid Parentheses',
  'Check If It Is a Good Array',
  'Find Palindrome With Fixed Length',
  'Cells with Odd Values in a Matrix',
  'Reconstruct a 2-Row Binary Matrix',
  'Number of Closed Islands',
  'Maximum Score Words Formed by Letters',
  'Shift 2D Grid',
  'Find Elements in a Contaminated Binary Tree',
  'Greatest Sum Divisible by Three',
  'Minimum Moves to Move a Box to Their Target Location',
  'Find the Difference of Two Arrays',
  'Maximum Value of K Coins From Piles',
  'Minimum Time Visiting All Points',
  'Count Servers that Communicate',
  'Search Suggestions System',
  'Number of Ways to Stay in the Same Place After Some Steps',
  'Find Winner on a Tic Tac Toe Game',
  'Number of Burgers with No Waste of Ingredients',
  'Count Square Submatrices with All Ones',
  'Palindrome Partitioning III',
  'Group the People Given the Group Size They Belong To',
  'Find the Smallest Divisor Given a Threshold',
  'Minimum Number of Flips to Convert Binary Matrix to Zero Matrix',
  'Convert Binary Number in a Linked List to Integer',
  'Maximum Side Length of a Square with Sum Less than or Equal to Threshold',
  'Shortest Path in a Grid with Obstacles Elimination',
  'Find Numbers with Even Number of Digits',
  'Divide Array in Sets of K Consecutive Numbers',
  'Maximum Number of Occurrences of a Substring',
  'Maximum Candies You Can Get from Boxes',
  'Find N Unique Integers Sum up to Zero',
  'All Elements in Two Binary Search Trees',
  'Jump Game III',
  'Verbal Arithmetic Puzzle',
  'All Ancestors of a Node in a Directed Acyclic Graph',
  'Encrypt and Decrypt Strings',
  'Decrypt String from Alphabet to Integer Mapping',
  'XOR Queries of a Subarray',
  'Get Watched Videos by Your Friends',
  'Minimum Insertion Steps to Make a String Palindrome',
  'Convert Integer to the Sum of Two No-Zero Integers',
  'Number of Operations to Make Network Connected',
  'Minimum Distance to Type a Word Using Two Fingers',
  'Number of Steps to Reduce a Number to Zero',
  'Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold',
  'Angle Between Hands of a Clock',
  'Jump Game IV',
  'Maximum 69 Number',
  'Print Words Vertically',
  'Delete Leaves With a Given Value',
  'Minimum Number of Taps to Open to Water a Garden',
  'Remove Palindromic Subsequences',
  'Filter Restaurants by Vegan-Friendly, Price and Distance',
  'Find the City With the Smallest Number of Neighbors at a Threshold Distance',
  'Minimum Difficulty of a Job Schedule',
  'Sort Integers by The Number of 1 Bits',
  'Apply Discount Every n Orders',
  'Number of Substrings Containing All Three Characters',
  'Count All Valid Pickup and Delivery Options',
  'The K Weakest Rows in a Matrix',
  'Reduce Array Size to The Half',
  'Maximum Product of Splitted Binary Tree',
  'Jump Game V',
  'Check If N and Its Double Exist',
  'Minimum Number of Steps to Make Two Strings Anagram',
  'Tweet Counts Per Frequency',
  'Maximum Students Taking Exam',
  'Increasing Decreasing String',
  'Find the Longest Substring Containing Vowels in Even Counts',
  'Longest ZigZag Path in a Binary Tree',
  'Maximum Sum BST in Binary Tree',
  'Count Negative Numbers in a Sorted Matrix',
  'Product of the Last K Numbers',
  'Maximum Number of Events That Can Be Attended',
  'Construct Target Array With Multiple Sums',
  'How Many Numbers Are Smaller Than the Current Number',
  'Rank Teams by Votes',
  'Linked List in Binary Tree',
  'Minimum Cost to Make at Least One Valid Path in a Grid',
  'Find the Distance Value Between Two Arrays',
  'Cinema Seat Allocation',
  'Sort Integers by The Power Value',
  'Pizza With 3n Slices',
  'Generate a String With Characters That Have Odd Counts',
  'Number of Times Binary String Is Prefix-Aligned',
  'Time Needed to Inform All Employees',
  'Frog Position After T Seconds',
  'Lucky Numbers in a Matrix',
  'Design a Stack With Increment Operation',
  'Find a Corresponding Node of a Binary Tree in a Clone of That Tree',
  'Maximum Performance of a Team',
  'Count Largest Group',
  'Circle and Rectangle Overlapping',
  'Construct K Palindrome Strings',
  'Reducing Dishes',
  'Create Target Array in the Given Order',
  'Check if There is a Valid Path in a Grid',
  'Longest Happy Prefix',
  'Find Lucky Integer in an Array',
  'Count Number of Teams',
  'Design Underground System',
  'Find All Good Strings',
  'Minimum Value to Get Positive Step by Step Sum',
  'Find the Minimum Number of Fibonacci Numbers Whose Sum Is K',
  'The k-th Lexicographical String of All Happy Strings of Length n',
  'Restore The Array',
  'Minimum Subsequence in Non-Increasing Order',
  'Number of Steps to Reduce a Number in Binary Representation to One',
  'Stone Game III',
  'String Matching in an Array',
  'Queries on a Permutation With Key',
  'HTML Entity Parser',
  'Number of Ways to Paint N × 3 Grid',
  'Kids With the Greatest Number of Candies',
  'Max Difference You Can Get From Changing an Integer',
  'Check If a String Can Break Another String',
  'Number of Ways to Wear Different Hats to Each Other',
  'Reformat The String',
  'Display Table of Food Orders in a Restaurant',
  'Minimum Number of Frogs Croaking',
  'Build Array Where You Can Find The Maximum Exactly K Comparisons',
  'Maximum Score After Splitting a String',
  'Maximum Points You Can Obtain from Cards',
  'Diagonal Traverse II',
  'Consecutive Characters',
  'Simplified Fractions',
  'Count Good Nodes in Binary Tree',
  'Form Largest Integer With Digits That Add up to Target',
  'Destination City',
  "Check If All 1's Are at Least Length K Places Away",
  'Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit',
  'Find the Kth Smallest Sum of a Matrix With Sorted Rows',
  'Build an Array With Stack Operations',
  'Count Triplets That Can Form Two Arrays of Equal XOR',
  'Minimum Time to Collect All Apples in a Tree',
  'Number of Ways of Cutting a Pizza',
  'Make Two Arrays Equal by Reversing Sub-arrays',
  'Check If a String Contains All Binary Codes of Size K',
  'Course Schedule IV',
  'Cherry Pickup II',
  'Number of Students Doing Homework at a Given Time',
  'Rearrange Words in a Sentence',
  'People Whose List of Favorite Companies Is Not a Subset of Another List',
  'Maximum Number of Darts Inside of a Circular Dartboard',
  'Check If a Word Occurs As a Prefix of Any Word in a Sentence',
  'Maximum Number of Vowels in a Substring of Given Length',
  'Pseudo-Palindromic Paths in a Binary Tree',
  'Max Dot Product of Two Subsequences',
  'Final Prices With a Special Discount in a Shop',
  'Allocate Mailboxes',
  'Subrectangle Queries',
  'Find Two Non-overlapping Sub-arrays Each With Target Sum',
  'Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts',
  'Reorder Routes to Make All Paths Lead to the City Zero',
  'Probability of a Two Boxes Having The Same Number of Distinct Balls',
  'Shuffle the Array',
  'The k Strongest Values in an Array',
  'Design Browser History',
  'Paint House III',
  'Average Salary Excluding the Minimum and Maximum Salary',
  'The kth Factor of n',
  "Longest Subarray of 1's After Deleting One Element",
  'Parallel Courses II',
  'Running Sum of 1d Array',
  'Least Number of Unique Integers after K Removals',
  'Minimum Number of Days to Make m Bouquets',
  'XOR Operation in an Array',
  'Making File Names Unique',
  'Avoid Flood in The City',
  'Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree',
  'Range Sum of Sorted Subarray Sums',
  'Minimum Difference Between Largest and Smallest Value in Three Moves',
  'Stone Game IV',
  'Path Crossing',
  'Check If Array Pairs Are Divisible by k',
  'Number of Subsequences That Satisfy the Given Sum Condition',
  'Max Value of Equation',
  'Can Make Arithmetic Progression From Sequence',
  'Last Moment Before All Ants Fall Out of a Plank',
  'Count Submatrices With All Ones',
  'Minimum Possible Integer After at Most K Adjacent Swaps On Digits',
  'Count Odd Numbers in an Interval Range',
  'Number of Sub-arrays With Odd Sum',
  'Number of Good Ways to Split a String',
  'Minimum Number of Increments on Subarrays to Form a Target Array',
  'Number of Good Pairs',
  'Number of Substrings With Only 1s',
  'String Compression II',
  'Best Position for a Service Centre',
  'Water Bottles',
  'Number of Nodes in the Sub-Tree With the Same Label',
  'Maximum Number of Non-Overlapping Substrings',
  'Find a Value of a Mysterious Function Closest to Target',
  'Kth Missing Positive Number',
  'Can Convert String in K Moves',
  'Minimum Insertions to Balance a Parentheses String',
  'Maximum Number of Non-Overlapping Subarrays With Sum Equals Target',
  'Shuffle String',
  'Minimum Suffix Flips',
  'Number of Good Leaf Nodes Pairs',
  'Count Good Triplets',
  'Find the Winner of an Array Game',
  'Minimum Swaps to Arrange a Binary Grid',
  'Get the Maximum Score',
  'Thousand Separator',
  'Minimum Numbers of Function Calls to Make Target Array',
  'Detect Cycles in 2D Grid',
  'Make The String Great',
  'Find Kth Bit in Nth Binary String',
  'Find Longest Awesome Substring',
  'Minimum Cost to Cut a Stick',
  'Minimum Operations to Make Array Equal',
  'Magnetic Force Between Two Balls',
  'Minimum Number of Days to Eat N Oranges',
  'Matrix Diagonal Sum',
  'Number of Ways to Split a String',
  'Shortest Subarray to be Removed to Make Array Sorted',
  'Count All Possible Routes',
  'Most Visited Sector in  a Circular Track',
  'Maximum Number of Coins You Can Get',
  'Find Latest Group of Size M',
  'Stone Game V',
  'Detect Pattern of Length M Repeated K or More Times',
  'Maximum Length of Subarray With Positive Product',
  'Minimum Number of Days to Disconnect Island',
  'Number of Ways to Reorder Array to Get Same BST',
  'Sum of All Odd Length Subarrays',
  'Make Sum Divisible by P',
  'Maximum Sum Obtained of Any Permutation',
  'Strange Printer II',
  "Replace All ?'s to Avoid Consecutive Repeating Characters",
  'Number of Ways Where Square of Number Is Equal to Product of Two Numbers',
  'Minimum Time to Make Rope Colorful',
  'Special Positions in a Binary Matrix',
  'Count Unhappy Friends',
  'Min Cost to Connect All Points',
  'Check If String Is Transformable With Substring Sort Operations',
  'Alert Using Same Key-Card Three or More Times in a One Hour Period',
  'Find Servers That Handled Most Number of Requests',
  'Find Valid Matrix Given Row and Column Sums',
  'Rearrange Spaces Between Words',
  'Split a String Into the Max Number of Unique Substrings',
  'Maximum Non Negative Product in a Matrix',
  'Minimum Cost to Connect Two Groups of Points',
  'Crawler Log Folder',
  'Maximum Profit of Operating a Centennial Wheel',
  'Throne Inheritance',
  'Maximum Number of Achievable Transfer Requests',
  'Number of Sets of K Non-Overlapping Line Segments',
  'Coordinate With Maximum Network Quality',
  'Cat and Mouse II',
  'Fancy Sequence',
  'Special Array With X Elements Greater Than or Equal X',
  'Even Odd Tree',
  'Minimum One Bit Operations to Make Integers Zero',
  'Maximum Number of Visible Points',
  'Maximum Nesting Depth of the Parentheses',
  'Split Two Strings to Make Palindrome',
  'Count Subtrees With Max Distance Between Cities',
  'Sort Array by Increasing Frequency',
  'Widest Vertical Area Between Two Points Containing No Points',
  'Count Substrings That Differ by One Character',
  'Number of Ways to Form a Target String Given a Dictionary',
  'Largest Substring Between Two Equal Characters',
  'Lexicographically Smallest String After Applying Operations',
  'Best Team With No Conflicts',
  'Slowest Key',
  'Arithmetic Subarrays',
  'Path With Minimum Effort',
  'Defuse the Bomb',
  'Minimum Deletions to Make String Balanced',
  'Minimum Jumps to Reach Home',
  'Distribute Repeating Integers',
  'Check Array Formation Through Concatenation',
  'Count Sorted Vowel Strings',
  'Furthest Building You Can Reach',
  'Maximum Repeating Substring',
  'Minimum Number of Removals to Make Mountain Array',
  'Design Front Middle Back Queue',
  'Get Maximum in Generated Array',
  'Minimum Deletions to Make Character Frequencies Unique',
  'Sell Diminishing-Valued Colored Balls',
  'Create Sorted Array through Instructions',
  'Design an Ordered Stream',
  'Minimum Operations to Reduce X to Zero',
  'Determine if Two Strings Are Close',
  'Maximize Grid Happiness',
  'Check If Two String Arrays are Equivalent',
  'Smallest String With A Given Numeric Value',
  'Ways to Make a Fair Array',
  'Minimum Initial Energy to Finish Tasks',
  'Count the Number of Consistent Strings',
  'Sum of Absolute Differences in a Sorted Array',
  'Stone Game VI',
  'Delivering Boxes from Storage to Ports',
  'Richest Customer Wealth',
  'Find the Most Competitive Subsequence',
  'Minimum Moves to Make Array Complementary',
  'Minimize Deviation in Array',
  'Goal Parser Interpretation',
  'Max Number of K-Sum Pairs',
  'Minimum Incompatibility',
  'Concatenation of Consecutive Binary Numbers',
  'Number of Students Unable to Eat Lunch',
  'Average Waiting Time',
  'Maximum Binary String After Change',
  'Minimum Adjacent Swaps for K Consecutive Ones',
  'Count of Matches in Tournament',
  'Partitioning Into Minimum Number Of Deci-Binary Numbers',
  'Stone Game VII',
  'Reformat Phone Number',
  'Maximum Erasure Value',
  'Jump Game VI',
  'Checking Existence of Edge Length Limited Paths',
  'Calculate Money in Leetcode Bank',
  'Maximum Score From Removing Substrings',
  'Construct the Lexicographically Largest Valid Sequence',
  'Determine if String Halves Are Alike',
  'Maximum Number of Eaten Apples',
  'Find Minimum Time to Finish All Jobs',
  'Maximum XOR With an Element From Array',
  'Maximum Units on a Truck',
  'Count Good Meals',
  'Ways to Split Array Into Three Subarrays',
  'Minimum Operations to Make a Subsequence',
  'Find the Highest Altitude',
  'Minimum Number of People to Teach',
  'Decode XORed Permutation',
  'Count Ways to Make Array With Product',
  'Decode XORed Array',
  'Minimize Hamming Distance After Swap Operations',
  'Number Of Rectangles That Can Form The Largest Square',
  'Maximum Number of Balls in a Box',
  'Largest Submatrix With Rearrangements',
  'Sum of Unique Elements',
  'Maximum Absolute Sum of Any Subarray',
  'Minimum Length of String After Deleting Similar Ends',
  'Maximum Number of Events That Can Be Attended II',
  'Latest Time by Replacing Hidden Digits',
  'Change Minimum Characters to Satisfy One of Three Conditions',
  'Find Kth Largest XOR Coordinate Value',
  'Building Boxes',
  'Restore the Array From Adjacent Pairs',
  'Palindrome Partitioning IV',
  'Can You Eat Your Favorite Candy on Your Favorite Day?',
  'Longest Nice Substring',
  'Form Array by Concatenating Subarrays of Another Array',
  'Tree of Coprimes',
  'Map of Highest Peak',
  'Check if Array Is Sorted and Rotated',
  'Maximum Score From Removing Stones',
  'Largest Merge Of Two Strings',
  'Closest Subsequence Sum',
  'Minimum Changes To Make Alternating Binary String',
  'Count Number of Homogenous Substrings',
  'Minimum Limit of Balls in a Bag',
  'Find Nearest Point That Has the Same X or Y Coordinate',
  'Check if Number is a Sum of Powers of Three',
  'Sum of Beauty of All Substrings',
  'Count Pairs Of Nodes',
  'Merge Strings Alternately',
  'Minimum Number of Operations to Move All Balls to Each Box',
  'Maximum Score from Performing Multiplication Operations',
  'Maximize Palindrome Length From Subsequences',
  'Count Items Matching a Rule',
  'Closest Dessert Cost',
  'Equal Sum Arrays With Minimum Number of Operations',
  'Car Fleet II',
  'Second Largest Digit in a String',
  'Design Authentication Manager',
  'Maximize Score After N Operations',
  'Count Pairs With XOR in a Range',
  'Check if Binary String Has at Most One Segment of Ones',
  'Minimum Elements to Add to Form a Given Sum',
  'Number of Restricted Paths From First to Last Node',
  'Make the XOR of All Segments Equal to Zero',
  'Check if One String Swap Can Make Strings Equal',
  'Maximum Average Pass Ratio',
  'Maximum Score of a Good Subarray',
  'Determine Color of a Chessboard Square',
  'Sentence Similarity III',
  'Maximum Number of Groups Getting Fresh Donuts',
  'Count Nice Pairs in an Array',
  'Maximum Ascending Subarray Sum',
  'Number of Orders in the Backlog',
  'Maximum Value at a Given Index in a Bounded Array',
  'Maximum Number of Consecutive Values You Can Make',
  'Number of Different Integers in a String',
  'Evaluate the Bracket Pairs of a String',
  'Minimum Number of Operations to Reinitialize a Permutation',
  'Maximize Number of Nice Divisors',
  'Minimum Operations to Make the Array Increasing',
  'Queries on Number of Points Inside a Circle',
  'Maximum XOR for Each Query',
  'Minimum Number of Operations to Make String Sorted',
  'Truncate Sentence',
  'Finding the Users Active Minutes',
  'Minimum Absolute Sum Difference',
  'Number of Different Subsequences GCDs',
  'Sign of the Product of an Array',
  'Find the Winner of the Circular Game',
  'Minimum Sideway Jumps',
  'Replace All Digits with Characters',
  'Maximum Element After Decreasing and Rearranging',
  'Closest Room',
  'Check if the Sentence Is Pangram',
  'Maximum Ice Cream Bars',
  'Single-Threaded CPU',
  'Find XOR Sum of All Pairs Bitwise AND',
  'Sum of Digits in Base K',
  'Frequency of the Most Frequent Element',
  'Longest Substring Of All Vowels in Order',
  'Maximum Building Height',
  'Sorting the Sentence',
  'Rotating the Box',
  'Minimum Distance to the Target Element',
  'Splitting a String Into Descending Consecutive Values',
  'Minimum Interval to Include Each Query',
  'Minimum Adjacent Swaps to Reach the Kth Smallest Number',
  'Maximum Population Year',
  'Maximum Distance Between a Pair of Values',
  'Maximum Subarray Min-Product',
  'Largest Color Value in a Directed Graph',
  'Substrings of Size Three with Distinct Characters',
  'Minimize Maximum Pair Sum in Array',
  'Minimum XOR Sum of Two Arrays',
  'Get Biggest Three Rhombus Sums in a Grid',
  'Sum of All Subset XOR Totals',
  'Minimum Number of Swaps to Make the Binary String Alternating',
  'Finding Pairs With a Certain Sum',
  'Number of Ways to Rearrange Sticks With K Sticks Visible',
  'Longer Contiguous Segments of Ones than Zeros',
  'Minimum Speed to Arrive on Time',
  'Jump Game VII',
  'Stone Game VIII',
  'Check if All the Integers in a Range Are Covered',
  'Find the Student that Will Replace the Chalk',
  'Minimum Cost to Change the Final Value of Expression',
  'Check if Word Equals Summation of Two Words',
  'Maximum Value after Insertion',
  'Process Tasks Using Servers',
  'Minimum Skips to Arrive at Meeting On Time',
  'Determine Whether Matrix Can Be Obtained By Rotation',
  'Reduction Operations to Make the Array Elements Equal',
  'Minimum Number of Flips to Make the Binary String Alternating',
  'Minimum Space Wasted From Packaging',
  'Remove One Element to Make the Array Strictly Increasing',
  'Remove All Occurrences of a Substring',
  'Maximum Alternating Subsequence Sum',
  'Design Movie Rental System',
  'Redistribute Characters to Make All Strings Equal',
  'Merge Triplets to Form Target Triplet',
  'Maximum Number of Removable Characters',
  'The Earliest and Latest Rounds Where Players Compete',
  'Egg Drop With 2 Eggs and N Floors',
  'Largest Odd Number in String',
  'The Number of Full Rounds You Have Played',
  'Minimum Absolute Difference Queries',
  'Count Sub Islands',
  'Count Square Sum Triples',
  'Nearest Exit from Entrance in Maze',
  'Sum Game',
  'Minimum Cost to Reach Destination in Time',
  'Maximum Product Difference Between Two Pairs',
  'Cyclically Rotating a Grid',
  'Number of Wonderful Substrings',
  'Find a Peak Element II',
  'Build Array from Permutation',
  'Eliminate Maximum Number of Monsters',
  'Count Good Numbers',
  'Longest Common Subpath',
  'Check if All Characters Have Equal Number of Occurrences',
  'The Number of the Smallest Unoccupied Chair',
  'Describe the Painting',
  'Concatenation of Array',
  'Unique Length-3 Palindromic Subsequences',
  'Merge BSTs to Create Single BST',
  'Painting a Grid With Three Different Colors',
  'Add Minimum Number of Rungs',
  'Maximum Number of Points with Cost',
  'Maximum Genetic Difference Query',
  'Sum of Digits of String After Convert',
  'Largest Number After Mutating Substring',
  'Maximum Compatibility Score Sum',
  'Delete Duplicate Folders in System',
  'Check if Move is Legal',
  'Minimum Total Space Wasted With K Resizing Operations',
  'Three Divisors',
  'Maximum Number of Weeks for Which You Can Work',
  'Array With Elements Not Equal to Average of Neighbors',
  'Count Number of Special Subsequences',
  'Minimum Time to Type Word Using Special Typewriter',
  'Maximum Matrix Sum',
  'Number of Ways to Arrive at Destination',
  'Number of Ways to Separate Numbers',
  'Check If String Is a Prefix of Array',
  'Remove Stones to Minimize the Total',
  'Minimum Number of Swaps to Make the String Balanced',
  'Find the Longest Valid Obstacle Course at Each Position',
  'Number of Strings That Appear as Substrings in Word',
  'Minimum Non-Zero Product of the Array Elements',
  'Last Day Where You Can Still Cross',
  'Find the Middle Index in Array',
  'Find All Groups of Farmland',
  'Operations on Tree',
  'The Number of Good Subsets',
  'Find Greatest Common Divisor of Array',
  'Find Unique Binary String',
  'Minimize the Difference Between Target and Chosen Elements',
  'Find Array Given Subset Sums',
  'Minimum Difference Between Highest and Lowest of K Scores',
  'Find the Kth Largest Integer in the Array',
  'Minimum Number of Work Sessions to Finish the Tasks',
  'Number of Unique Good Subsequences',
  'Count Number of Pairs With Absolute Difference K',
  'Find Original Array From Doubled Array',
  'Maximum Earnings From Taxi',
  'Minimum Number of Operations to Make Array Continuous',
  'Find if Path Exists in Graph',
  'Count Special Quadruplets',
  'The Number of Weak Characters in the Game',
  'First Day Where You Have Been in All the Rooms',
  'GCD Sort of an Array',
  'Reverse Prefix of Word',
  'Number of Pairs of Interchangeable Rectangles',
  'Maximum Product of the Length of Two Palindromic Subsequences',
  'Smallest Missing Genetic Value in Each Subtree',
  'Convert 1D Array Into 2D Array',
  'Number of Pairs of Strings With Concatenation Equal to Target',
  'Maximize the Confusion of an Exam',
  'Maximum Number of Ways to Partition an Array',
  'Final Value of Variable After Performing Operations',
  'Sum of Beauty in the Array',
  'Detect Squares',
  'Longest Subsequence Repeated k Times',
  'Maximum Difference Between Increasing Elements',
  'Grid Game',
  'Check if Word Can Be Placed In Crossword',
  'The Score of Students Solving Math Expression',
  'Minimum Number of Moves to Seat Everyone',
  'Remove Colored Pieces if Both Neighbors are the Same Color',
  'The Time When the Network Becomes Idle',
  'Minimum Moves to Convert String',
  'Find Missing Observations',
  'Stone Game IX',
  'Smallest K-Length Subsequence With Occurrences of a Letter',
  'Minimum Operations to Make a Uni-Value Grid',
  'Stock Price Fluctuation ',
  'Partition Array Into Two Arrays to Minimize Sum Difference',
  'Kth Distinct String in an Array',
  'Two Best Non-Overlapping Events',
  'Plates Between Candles',
  'Number of Valid Move Combinations On Chessboard',
  'Check if Numbers Are Ascending in a Sentence',
  'Simple Bank System',
  'Count Number of Maximum Bitwise-OR Subsets',
  'Second Minimum Time to Reach Destination',
  'Number of Valid Words in a Sentence',
  'Next Greater Numerically Balanced Number',
  'Count Nodes With the Highest Score',
  'Parallel Courses III',
  'Check Whether Two Strings are Almost Equivalent',
  'Most Beautiful Item for Each Query',
  'Maximum Number of Tasks You Can Assign',
  'Smallest Index With Equal Value',
  'Minimum Operations to Convert Number',
  'Check if an Original String Exists Given Two Encoded Strings',
  'Count Vowel Substrings of a String',
  'Vowels of All Substrings',
  'Minimized Maximum of Products Distributed to Any Store',
  'Maximum Path Quality of a Graph',
  'Count Common Words With One Occurrence',
  'Minimum Number of Buckets Required to Collect Rainwater from Houses',
  'Minimum Cost Homecoming of a Robot in a Grid',
  'Count Fertile Pyramids in a Land',
  'Time Needed to Buy Tickets',
  'Decode the Slanted Ciphertext',
  'Two Furthest Houses With Different Colors',
  'Stamping the Grid',
  'Valid Arrangement of Pairs',
  'Sum of k-Mirror Numbers',
  'Find Subsequence of Length K With the Largest Sum',
  'Find Good Days to Rob the Bank',
  'Detonate the Maximum Bombs',
  'Find Target Indices After Sorting Array',
  'K Radius Subarray Averages',
  'Removing Minimum and Maximum From Array',
  'Find All People With Secret',
  'Finding 3-Digit Even Numbers',
  'Step-By-Step Directions From a Binary Tree Node to Another',
  'Maximum Number of Words Found in Sentences',
  'Find All Possible Recipes from Given Supplies',
  'Check if a Parentheses String Can Be Valid',
  'Abbreviating the Product of a Range',
  'Rings and Rods',
  'Sum of Subarray Ranges',
  'Watering Plants II',
  'Maximum Fruits Harvested After at Most K Steps',
  'Find First Palindromic String in the Array',
  'Adding Spaces to a String',
  'Number of Smooth Descent Periods of a Stock',
  'Minimum Operations to Make the Array K-Increasing',
  'Capitalize the Title',
  'Longest Palindrome by Concatenating Two Letter Words',
  'A Number After a Double Reversal',
  'Execution of All Suffix Instructions Staying in a Grid',
  'Intervals Between Identical Elements',
  'Recover the Original Array',
  "Check if All A's Appears Before All B's",
  'Number of Laser Beams in a Bank',
  'Destroying Asteroids',
  'Maximum Employees to Be Invited to a Meeting',
  'Minimum Cost of Buying Candies With Discount',
  'Count the Hidden Sequences',
  'K Highest Ranked Items Within a Price Range',
  'Number of Ways to Divide a Long Corridor',
  'Check if Every Row and Column Contains All Numbers',
  "Minimum Swaps to Group All 1's Together II",
  'Count Words Obtained After Adding a Letter',
  'Earliest Possible Day of Full Bloom',
  'Divide a String Into Groups of Size k',
  'All Divisions With the Highest Score of a Binary Array',
  'Solving Questions With Brainpower',
  'Maximum Running Time of N Computers',
  'Minimum Sum of Four Digit Number After Splitting Digits',
  'Partition Array According to Given Pivot',
  'Minimum Cost to Set Cooking Time',
  'Minimum Difference in Sums After Removal of Elements',
  'Count Elements With Strictly Smaller and Greater Elements ',
  'Find All Lonely Numbers in the Array',
  'Rearrange Array Elements by Sign',
  'Maximum Good People Based on Statements',
  'Keep Multiplying Found Values by Two',
  'Find Substring With Given Hash Value',
  'Groups of Strings',
  'Find Three Consecutive Integers That Sum to a Given Number',
  'Maximum Split of Positive Even Integers',
  'Count Good Triplets in an Array',
  'Sort Even and Odd Indices Independently',
  'Smallest Value of the Rearranged Number',
  'Design Bitset',
  'Minimum Time to Remove All Cars Containing Illegal Goods',
  'Count Operations to Obtain Zero',
  'Minimum Operations to Make the Array Alternating',
  'Removing Minimum Number of Magic Beans',
  'Maximum AND Sum of Array',
  'Counting Words With a Given Prefix',
  'Minimum Number of Steps to Make Two Strings Anagram II',
  'Minimum Time to Complete Trips',
  'Minimum Time to Finish the Race',
  'Count Integers With Even Digit Sum',
  'Construct String With Repeat Limit',
  'Count Array Pairs Divisible by K',
  'Cells in a Range on an Excel Sheet',
  'Append K Integers With Minimal Sum',
  'Create Binary Tree From Descriptions',
  'Replace Non-Coprime Numbers in Array',
  'Divide Array Into Equal Pairs',
  'Maximize Number of Subsequences in a String',
  'Minimum Operations to Halve Array Sum',
  'Minimum White Tiles After Covering With Carpets',
  'Most Frequent Number Following Key In an Array',
  'Count Hills and Valleys in an Array',
  'Count Collisions on a Road',
  'Maximum Points in an Archery Competition',
  'Longest Substring of One Repeating Character',
  'Find All K-Distant Indices in an Array',
  'Find Triangular Sum of an Array',
  'Number of Ways to Select Buildings',
  'Sum of Scores of Built Strings',
  'Largest Number After Digit Swaps by Parity',
  'Minimize Result by Adding Parentheses to Expression',
  'Maximum Product After K Increments',
  'Maximum Total Beauty of the Gardens',
  'Minimum Number of Operations to Convert Time',
];
