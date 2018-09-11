<Question>

  <template slot='question'>

## What is the difference between an *abstract* class and an *interface* ?

  </template>

  <template slot='categories'>
  
  <Category slug='csharp'/>
  <Category slug='nocomputer'/>
  <Category slug='nowhiteboard'/> 

  </template>

  <template slot='difficulty'>

  <Difficulty rating='medium' /> 

  </template>

  <template slot='answer'>

  Unlike interfaces, abstract classes can have implementation. Also, a class can only inherit from one abstract class, but can implement multiple interfaces.

*Interface*

An *interface* contains definitions for a group of related functionalities that a class or a struct can implement.

By using *interfaces*, you can, for example, include behavior from multiple sources in a class. That capability is important in C# because the language doesn't support multiple inheritance of classes. In addition, you must use an *interface* if you want to simulate inheritance for structs, because they can't actually inherit from another struct or class.

e.g.

```csharp
interface IEquatable<T>
{
    bool Equals(T obj);
}

public class Car : IEquatable<Car>
{
    public string Make {get; set;}
    public string Model { get; set; }
    public string Year { get; set; }

    // Implementation of IEquatable<T> interface
    public bool Equals(Car car)
    {
        return this.Make == car.Make &&
               this.Model == car.Model &&
               this.Year == car.Year;
    }
}
```

*Abstract*

The *abstract* modifier indicates that the thing being modified has a missing or incomplete implementation. The *abstract* modifier can be used with classes, methods, properties, indexers, and events.

Members marked as abstract, or included in an *abstract* class, must be implemented by classes that derive from the *abstract* class.

e.g.

```csharp
abstract class BaseClass   // Abstract class
{
    protected int _x = 100;
    protected int _y = 150;
    public abstract void AbstractMethod();   // Abstract method
    public abstract int X    { get; }
    public abstract int Y    { get; }
}

class DerivedClass : BaseClass
{
    public override void AbstractMethod()
    {
        _x++;
        _y++;
    }

    public override int X   // overriding property
    {
        get
        {
            return _x + 10;
        }
    }

    public override int Y   // overriding property
    {
        get
        {
            return _y + 10;
        }
    }

    static void Main()
    {
        DerivedClass o = new DerivedClass();
        o.AbstractMethod();
        Console.WriteLine("x = {0}, y = {1}", o.X, o.Y);
    }
}
```

  </template>

  <template slot='reference'>

  Interfaces - [docs.microsoft.com](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/interfaces/)
  Abstract - [docs.microsoft.com](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/abstract)

  </template>

</Question>