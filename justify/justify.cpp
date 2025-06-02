#include<iostream>
#include<algorithm>
#include<vector>
using namespace std;

bool lenSort(string a , string b)
{
  return (a.size() < b.size());
}

int maximumWords(vector<string> words, int k , int m , int n)
{
  int curr_line = 0;
  int result = 0;
  
  sort(words.begin(),words.end(),lenSort);
  
  int curr_line_len = 0;
  
  for(vector<string>::size_type  i = 0 ; i < words.size() ; i++)
  {
    	int word_len = words[i].size();
        
    
    	if(word_len + 1 + curr_line_len <= m )
        {
          	result ++;
          	curr_line_len += word_len + 1;
        }
    	else
    	{
          curr_line++;
          if(curr_line > n) break;
          curr_line_len = word_len;
          result ++;
    	}
    	
  }
  
  return result;
}  

int main()
{
  int k,m,n;
  cin >> k;
  
  string word;
  vector<string> words;
  
  while(k--)
  {
    cin >> word;
    words.push_back(word);
  }
  
  cin >> m >> n;
  cout << maximumWords(words,k,m,n);
}