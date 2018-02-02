
import java.util.Scanner;

class Bubblesort 
{

  
  public static void main(String[] args)
  {
    
    Scanner ob = new Scanner(System.in);
    // Obtain size of array from user
    System.out.println("Enter size of array: ");
    int n = ob.nextInt();

    // Initialising an array of size "n"
    int arr[] = new int[n];
    
    // Getting array values from user
    System.out.println("Enter the array elements:");
    for(int i=0; i<n; i++) 
    {
      arr[i] = ob.nextInt();
    } 
    bubble(arr,n);
    
    // Sorted elements are printed.
    System.out.println("Sorted elements are: ");
    for(int i=0; i<n; i++)
    {
      System.out.println(arr[i]);
    }

  }
  
  static void bubble(int arr[], int n)
  {
    int temp;
    for(int i=0; i<n; i++) 
    {
    
      for(int j=0; j<(n-i); j++) 
      {
	if(arr[j]>arr[j+1])
	{
	  temp = arr[j];
	  arr[j] = arr[j+1];
	  arr[j+1] = temp;
	}

      }
    }
  }
}
