function bubble_Sort(a)
{
    var swap;
    var n = a.length-1;
    var x=a;
    do {
        swap = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swap = true;
            }
        }
        n--;
    } while (swap);
 return x; 
}

document.write(bubble_Sort([12, 654, 4, 10, 122, 84, 28, 64, 9, 1, 7777, 234, 23, 234, 213]));
