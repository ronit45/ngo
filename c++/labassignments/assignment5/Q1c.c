#include<stdio.h>
int main()
{
  int i,n,a[10];
  printf("\nEnter the Decimal value:");
  scanf("%d",&n);
  for(i=0;n!=0;i++)
  {
    a[i]=n%2;
    n=n/2;
  }
  n=i;
  printf("%d",n);
  printf("\nBinary Value:");
  for(i=0;i<n;i++)
  {
    printf("%d",a[n-i-1]);
  }
}