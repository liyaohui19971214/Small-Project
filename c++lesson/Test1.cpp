#include <iostream.h>

/*
#define PAI 3.1415926
int main()
{
	double r,s,c;
	cout<<"������Բ�İ뾶��"<<endl;
	cin>>r;
	c=2 * PAI * r;
	s=PAI * r * r;
    cout<<"Բ�����Ϊ��"<<s<<endl;
	cout<<"Բ���ܳ�Ϊ��"<<c<<endl;
    return s,c;
}
*/


/*
int main()
{
	char c1='C',c2='h',c3='i',c4='n',c5='a';
	
	cout<<"��Ҫ���������Ϊ��"<<c1<<c2<<c3<<c4<<c5<<endl;

	c1='G';
	c2='l';
	c3='m';
	c4='r';
	c5='e';

    cout<<"�����Ժ������Ϊ��"<<c1<<c2<<c3<<c4<<c5<<endl;
	return 0;
	
}
*/

//ϰ��P15-17
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
   cout<<"������һ������";
   cin>>x;

   if(x<1){
	   cout<<"������ֵΪ��"<<x<<endl;
   }
   else if(1<=x&&x<10){
	   x=(2*x)-1;
       cout<<"������ֵΪ��"<<x<<endl;
   }
   else{
	   x=(3*x)-11;
       cout<<"������ֵΪ��"<<x<<endl;
   }
   return 0;
}
*/


//11.

/*
int main()
{
    int score;
    cout<<"������ɼ���";
    cin>>score;

	switch(score/10)
	{
	     case 10:cout<<"�ɼ��ȼ�ΪA"<<endl;
	     case 9:cout<<"�ɼ��ȼ�ΪA"<<endl;break;
         case 8:cout<<"�ɼ��ȼ�ΪB"<<endl;break;
		 case 7:cout<<"�ɼ��ȼ�ΪC"<<endl;break;
		 case 6:cout<<"�ɼ��ȼ�ΪD"<<endl;break;
		 case 5:cout<<"�ɼ��ȼ�ΪE"<<endl;
		 case 4:cout<<"�ɼ��ȼ�ΪE"<<endl;
		 case 3:cout<<"�ɼ��ȼ�ΪE"<<endl;
		 case 2:cout<<"�ɼ��ȼ�ΪE"<<endl;
		 case 1:cout<<"�ɼ��ȼ�ΪE"<<endl;
		 case 0:cout<<"�ɼ��ȼ�ΪE"<<endl;break;

	}

	 
	 if(x>90){
	   cout<<"��ĳɼ��ȼ�Ϊ:A"<<endl;
   }
   else if(80<=x&&x<=89){
       cout<<"��ĳɼ��ȼ�Ϊ:B"<<endl;
   }
   else if(70<=x&&x<=79){
       cout<<"��ĳɼ��ȼ�Ϊ:C"<<endl;
   }
   else if(60<=x&&x<=69){
       cout<<"��ĳɼ��ȼ�Ϊ:D"<<endl;
   }
   else{
       cout<<"��ĳɼ��ȼ�Ϊ:E"<<endl;
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
	cout<<"����������һ��������5λ����������";
	cin>>x;

	if(x>9999&&x<=99999){
		a=x/10000;
		b=(x/1000)-a*10;
		c=(x/100)-a*100-b*10;
		d=(x/10)-a*1000-b*100-c*10;
		e=x-a*10000-b*1000-c*100-d*10;
        cout<<"���������һ����λ��"<<endl<<"��һ����Ϊ:"<<a<<endl<<"�ڶ�����Ϊ:"<<b<<endl<<"��������Ϊ:"<<c<<endl<<"���ĸ���Ϊ:"<<d<<endl<<"�������Ϊ:"<<e<<endl<<"����Ϊ:"<<e<<d<<c<<b<<a<<endl;
	}
	else if(x>999&&x<=9999){
		a=x/1000;
		b=(x/100)-a*10;
		c=(x/10)-a*100-b*10;
		d=x-a*1000-b*100-c*10;
		cout<<"���������һ����λ��"<<endl<<"��һ����Ϊ:"<<a<<endl<<"�ڶ�����Ϊ:"<<b<<endl<<"��������Ϊ:"<<c<<endl<<"���ĸ���Ϊ:"<<d<<endl<<"����Ϊ:"<<d<<c<<b<<a<<endl;
	}
	else if(x>99&&x<=999){
		a=x/100;
		b=(x/10)-a*10;
		c=x-a*100-b*10;
		cout<<"���������һ����λ��"<<endl<<"��һ����Ϊ:"<<a<<endl<<"�ڶ�����Ϊ:"<<b<<endl<<"��������Ϊ:"<<c<<endl<<"����Ϊ:"<<c<<b<<a<<endl;
	}
	else if(x>9&&x<=99){
		a=x/10;
		b=x-a*10;
		cout<<"���������һ����λ��"<<endl<<"��һ����Ϊ:"<<a<<endl<<"�ڶ�����Ϊ:"<<b<<endl<<"����Ϊ:"<<b<<a<<endl;
	}
	else if(x>0&&x<=9){
		cout<<"���������һ����λ��"<<endl<<"ֵΪ:"<<x<<endl;
	}
	else{
		cout<<"���������������λ��������������!";

	}
   
}
*/


//13.
/*
int main()
{
	double num;
	double a;
	cout << "�����뵱������" ;
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
	cout << "Ӧ��������Ϊ��" << num<<endl;
	return 0;
}
*/



//14.
/*
void main()
{
	int a,b,c,d,t;
	cout<<"�����������ĸ�������"<<endl;
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
	cout<<"�ĸ�����С�����˳��Ϊ��"<<a<<"  "<<b<<"  "<<c<<"  "<<d<<endl;
}
*/

