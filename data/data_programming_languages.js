import uniqueId from 'lodash/uniqueId';

import javascriptLogo from '../assets/images/javascript-logo.png';
import pythonLogo from '../assets/images/python-logo.png';
import javaLogo from '../assets/images/java-logo.png';
import cppLogo from '../assets/images/cpp-logo.png';
import rubyLogo from '../assets/images/ruby-logo.png';
import swiftLogo from '../assets/images/swift-logo.png';
import phpLogo from '../assets/images/php-logo.png';
import csharpLogo from '../assets/images/csharp-logo.png';

const topics = [
    { id: uniqueId(), topic: 'JavaScript', description: 'JavaScript is a programming language that allows you to implement complex features on web pages.', logo: javascriptLogo },
    { id: uniqueId(), topic: 'Python', description: 'Python is a high-level programming language known for its simplicity and readability.', logo: pythonLogo },
    { id: uniqueId(), topic: 'Java', description: 'Java is a widely used programming language specifically designed for use in the distributed environment of the internet.', logo: javaLogo },
    { id: uniqueId(), topic: 'C++', description: 'C++ is a powerful general-purpose programming language. It is used to develop system software, application software, high-performance server, and client applications, and video games.', logo: cppLogo },
    { id: uniqueId(), topic: 'Ruby', description: 'Ruby is a dynamic, open-source programming language with a focus on simplicity and productivity.', logo: rubyLogo },
    { id: uniqueId(), topic: 'Swift', description: 'Swift is a powerful and intuitive programming language for macOS, iOS, watchOS, tvOS, and beyond.', logo: swiftLogo },
    { id: uniqueId(), topic: 'PHP', description: 'PHP is a server-side scripting language designed primarily for web development but also used as a general-purpose programming language.', logo: phpLogo },
    { id: uniqueId(), topic: 'C#', description: 'C# (pronounced "C sharp") is a modern, object-oriented programming language designed for building a variety of applications that run on the .NET Framework.', logo: csharpLogo },
  ];
  

export default topics;