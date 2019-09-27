#include <iostream.h>

/*
#define PAI 3.1415926
int main()
{
	double r,s,c;
	cout<<"请输入圆的半径："<<endl;
	cin>>r;
	c=2 * PAI * r;
	s=PAI * r * r;
    cout<<"圆的面积为："<<s<<endl;
	cout<<"圆的周长为："<<c<<endl;
    return s,c;
}
*/


/*
int main()
{
	char c1='C',c2='h',c3='i',c4='n',c5='a';
	
	cout<<"所要翻译的密码为："<<c1<<c2<<c3<<c4<<c5<<endl;

	c1='G';
	c2='l';
	c3='m';
	c4='r';
	c5='e';

    cout<<"翻译以后的密码为："<<c1<<c2<<c3<<c4<<c5<<endl;
	return 0;
	
}
*/

//习题P15-17
//5.
/*int main()
{
	cout<<"This"<<"is";
	cout<<"a"<<"C++";
	cout<<"program."<<endl;
	return 0;
}*/


//8.
/*
int main()
{
   int a,b;
   int c;
   c=a+b;
   cout<<"a+b="<<a+b;
   return 0;
}
*/

//9.
/*
int main()
{
	int add(int x,int y);
	int a,b;
	int c;
	c=add(a,b);
	cout<<"a+b="<<c<<endl;
	return 0;
}
int add(int x,int y)
{
	int z;
	z=x+y;
	return(z);
}
*/


//10.
/*
int main()
{
   int x;
   cout<<"请输入一个数：";
   cin>>x;

   if(x<1){
	   cout<<"函数的值为："<<x<<endl;
   }
   else if(1<=x&&x<10){
	   x=(2*x)-1;
       cout<<"函数的值为："<<x<<endl;
   }
   else{
	   x=(3*x)-11;
       cout<<"函数的值为："<<x<<endl;
   }
   return 0;
}
*/


//11.

/*
int main()
{
    int score;
    cout<<"请输入成绩：";
    cin>>score;

	switch(score/10)
	{
	     case 10:cout<<"成绩等级为A"<<endl;
	     case 9:cout<<"成绩等级为A"<<endl;break;
         case 8:cout<<"成绩等级为B"<<endl;break;
		 case 7:cout<<"成绩等级为C"<<endl;break;
		 case 6:cout<<"成绩等级为D"<<endl;break;
		 case 5:cout<<"成绩等级为E"<<endl;
		 case 4:cout<<"成绩等级为E"<<endl;
		 case 3:cout<<"成绩等级为E"<<endl;
		 case 2:cout<<"成绩等级为E"<<endl;
		 case 1:cout<<"成绩等级为E"<<endl;
		 case 0:cout<<"成绩等级为E"<<endl;break;

	}

	 
	 if(x>90){
	   cout<<"你的成绩等级为:A"<<endl;
   }
   else if(80<=x&&x<=89){
       cout<<"你的成绩等级为:B"<<endl;
   }
   else if(70<=x&&x<=79){
       cout<<"你的成绩等级为:C"<<endl;
   }
   else if(60<=x&&x<=69){
       cout<<"你的成绩等级为:D"<<endl;
   }
   else{
       cout<<"你的成绩等级为:E"<<endl;
   }

   return 0;
   
}

*/



//12.
/*
int main()
{
	int x;
	int a,b,c,d,e,f;
	cout<<"请任意输入一个不多于5位的正整数：";
	cin>>x;

	if(x>9999&&x<=99999){
		a=x/10000;
		b=(x/1000)-a*10;
		c=(x/100)-a*100-b*10;
		d=(x/10)-a*1000-b*100-c*10;
		e=x-a*10000-b*1000-c*100-d*10;
        cout<<"你输入的是一个五位数"<<endl<<"第一个数为:"<<a<<endl<<"第二个数为:"<<b<<endl<<"第三个数为:"<<c<<endl<<"第四个数为:"<<d<<endl<<"第五个数为:"<<e<<endl<<"逆序为:"<<e<<d<<c<<b<<a<<endl;
	}
	else if(x>999&&x<=9999){
		a=x/1000;
		b=(x/100)-a*10;
		c=(x/10)-a*100-b*10;
		d=x-a*1000-b*100-c*10;
		cout<<"你输入的是一个四位数"<<endl<<"第一个数为:"<<a<<endl<<"第二个数为:"<<b<<endl<<"第三个数为:"<<c<<endl<<"第四个数为:"<<d<<endl<<"逆序为:"<<d<<c<<b<<a<<endl;
	}
	else if(x>99&&x<=999){
		a=x/100;
		b=(x/10)-a*10;
		c=x-a*100-b*10;
		cout<<"你输入的是一个三位数"<<endl<<"第一个数为:"<<a<<endl<<"第二个数为:"<<b<<endl<<"第三个数为:"<<c<<endl<<"逆序为:"<<c<<b<<a<<endl;
	}
	else if(x>9&&x<=99){
		a=x/10;
		b=x-a*10;
		cout<<"你输入的是一个两位数"<<endl<<"第一个数为:"<<a<<endl<<"第二个数为:"<<b<<endl<<"逆序为:"<<b<<a<<endl;
	}
	else if(x>0&&x<=9){
		cout<<"你输入的是一个个位数"<<endl<<"值为:"<<x<<endl;
	}
	else{
		cout<<"您输入的数超过五位数，请重新输入!";

	}
   
}
*/


//13.
/*
int main()
{
	double num;
	double a;
	cout << "请输入当月利润：" ;
	cin >> num;
	if (num <= 100000){
		a = num *0.1;
	}else if(num>100000&&num<=200000)
	{
		num = 100000 * 0.1 + (num - 100000)*0.075;
	}
	else if (num>200000&&num<=400000)
	{
		num = 100000 * 0.1 + 100000 * 0.075; +(num - 200000)*0.05;
	}
	else if (num>400000 && num <= 600000)
	{
		num = 100000 * 0.1 + 100000 * 0.075; +200000 * 0.05 + (num - 400000)*0.03;
	}
	else if (num>600000 && num <= 1000000)
	{
		num = 100000 * 0.1 + 100000 * 0.075; +200000 * 0.05 + 200000*0.03+(num-600000)*0.015;
	}
	else{
		num = 100000 * 0.1 + 100000 * 0.075; +200000 * 0.05 + 200000 * 0.03 + 400000*0.015+(num-1000000)*0.01;
	}
	cout << "应发奖金数为：" << num<<endl;
	return 0;
}
*/



//14.
/*
void main()
{
	int a,b,c,d,t;
	cout<<"请依次输入四个整数："<<endl;
	cin>>a;
	cin>>b;
	cin>>c;
	cin>>d;
	if(a>b)
	{
		t=a;
		a=b;
		b=t;
	}
	if(a>c)
	{
		t=a;
		a=c;
		c=t;
	}
	if(a>d)
	{
		t=a;
		a=d;
		d=t;
	}
	if(b>c)
	{
		t=b;
		b=c;
		c=t;
	}
	if(b>d)
	{
		t=b;
		b=d;
		d=t;
	}
	if(c>d)
	{
		t=c;
		c=d;
		d=t;
	}
	cout<<"四个数从小到大的顺序为："<<a<<"  "<<b<<"  "<<c<<"  "<<d<<endl;
}
*/

