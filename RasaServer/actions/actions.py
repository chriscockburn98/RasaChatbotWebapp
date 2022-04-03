# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


from typing import Any, Text, Dict, List

from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher

class ActionAskQuestion(Action):

    def name(self) -> Text:
        return "action_ask_question"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
      
        entities = tracker.latest_message['entities'];

        message = "null"

        for e in entities:
            if e['entity'] == "topic":
                name = e['value']

            if name == "constructor":
                message = '{ "response_utter": "utter_constructor", "location": "Introduction to SD2 -- slide 27", "response": "Get called when a new Object is created.  Store initial values into the fields.  Can take in external parameter values." }'

            if name == "variables":
                message = '{ "response_utter": "utter_variables", "location": "Introduction to SD2 -- slide 30", "response": "Member variables in a class — these are called fields. Accessible from within one class.  Variables in method declarations —these are called parameters. Short lived, local scope.   Variables within a method or block of code —these are called local variables. Short lived, local scope." }'

            if name == "arraylist":
                message = '{ "response_utter": "utter_array_list", "location": "Collections -- slide 5", "response": "There is no pre-defined limit to the number of entries.  Java Class library: pre-defined packages." }'

            if name == "global variables":
                message = '{ "response_utter": "utter_global_variable", "response": "global variable is a variable with global scope." }'

            if name == "array":
                message = '{ "response_utter": "utter_arrays", "location": "Collections -- slide 3", "response": "Data structure consisting of a collection of elements.  Fixed size collection, intialised at creation." }'

            if name == "libraries":
                message = '{ "response_utter": "utter_java_class_library", "location": "Collections -- slide 11", "response": "Thousands of classes.  Tens of thousands of methods.  Many useful classes that make life much easier.  Library classes are often inter-related.  Arranged into packages." }'

            if name == "importing":
                message = '{ "response_utter": "utter_packages_and_imports", "location": "Collections -- slide 14", "response": "Single classes may be imported: `import java.util.ArrayList;`  Whole packages can be imported: `import java.util.*;`  Importation does not involve source code insertion." }'

            if name == "maps":
                message = '{ "response_utter": "utter_maps", "location": "Collections -- slide 20", "response": "Maps are collections that contain pairs of values.  Pairs consist of a keyand a value.  Lookup works by supplying a key,and retrieving a value.  In other languages also called “dictionary”, e.g. Python.e" }'

            if name == "coupling":
                message = '{ "response_utter": "utter_coupling", "location": "Coupling, cohesion, and enums -- slide 10", "response": "Coupling refers to links between separate units of a program.  If two classes depend closely on many details of each other, we say they are tightly coupled.  We aim for loose coupling.  (A class diagram provides (limited) hints at the degree of coupling.)" }'

            if name == "loose coupling":
                message = '{ "response_utter": "utter_loose_coupling", "location": "Coupling, cohesion, and enums -- slide 11", "response": "We aim for loose coupling.  Loose coupling makes it possible to:  –understand one class without reading others;  –change one class with little or no effect on other classes.  Loose coupling increases maintainability." }'

            if name == "tight coupling":
                message = '{ "response_utter": "utter_tight_coupling", "location": "Coupling, cohesion, and enums -- slide 12", "response": "We try to avoid tight coupling.  Changes to one class bring a cascade of changes to other classes.  Classes are harder to understand in isolation.  Flow of control between objects of different classes is complex." }'

            if name == "encapsulation":
                message = '{ "response_utter": "utter_encapsulation", "location": "Coupling, cohesion, and enums -- slide 13", "response": "= hiding information from view.  Only information about WHAT a unit, e.g. class, can do should be visible from the outside.  The HOW should be hidden/ “encapsulated”.  Reduces coupling." }'

            if name == "cohesion":
                message = '{ "response_utter": "utter_cohesion", "location": "Coupling, cohesion, and enums -- slide 20", "response": "Cohesion refers to the number and diversity of tasks that a single unit is responsible for.  If each unit is responsible for one single logical task, we say it has high cohesion.   We aim for high cohesion.  ‘Unit’ applies to classes, methods and modules (packages)." }'

            if name == "responsibility driven design":
                message = '{ "response_utter": "utter_responsibility_driven_design", "location": "Coupling, cohesion, and enums -- slide 32", "response": "Each class should be responsible for manipulating its own data.  The class that owns the data should be responsible for processing it.  RDD leads to low coupling." }'

            if name == "localising change":
                message = '{ "response_utter": "utter_localising_change", "location": "Coupling, cohesion, and enums -- slide 33", "response": "One aim of reducing coupling and responsibility-driven design is to localise change.  When a change is needed, as few classes as possible should be affected." }'

            if name == "code duplication":
                message = '{ "response_utter": "utter_code_duplication", "location": "Coupling, cohesion, and enums -- slide 34", "response": "Code duplication:  –is an indicator of bad design.  –makes maintenance harder.  –can lead to introduction of errors during maintenance." }'

            if name == "enumerated types":
                message = '{ "response_utter": "utter_enumerated_types", "location": "Coupling, cohesion, and enums -- slide 36", "response": "A language feature.  Uses enuminstead of class to introduce a type name.  Their simplest use is to define a set of significant names.  –Alternative to static constants.  –When the constants’ values would be arbitrary." }'

            if name == "refactoring":
                message = '{ "response_utter": "utter_refactoring", "location": "Refactoring and JUnit testing -- slide 3", "response": "When classes are maintained, often code is added.  Classes and methods tend to become longer.  Every now and then, classes and methods should be refactored to maintain high cohesion and low coupling." }'

            if name == "version control":
                message = '{ "response_utter": "utter_version_control", "location": "Refactoring and JUnit testing -- slide 7", "response": "SVN, Git, etc. (full list see: https://en.wikipedia.org/wiki/Comparison_of_version-control_software" }'

            if name == "unit testing":
                message = '{ "response_utter": "utter_unit_testing", "location": "Refactoring and JUnit testing -- slide 9", "response": "Each unit of an application may be tested.  –Method, class, module (package in Java).  Can (should) be done during development.  –Finding and fixing early lowers development costs (e.g. programmer time).  –A test suite is built up." }'

            if name == "junit":
                message = '{ "response_utter": "utter_junit", "location": "Refactoring and JUnit testing -- slide 12", "response": "JUnit is a Java test framework.  Test classes contain test methods.  Test cases are methods that contain tests.  Assertions are used to assert expected method results." }'

            if name == "inheritance":
                message = '{ "response_utter": "utter_inheritance", "location": "Improving Structure with Inheritance -- slide 6 - 40", "response": "If two classes are related, why not express that in the code?  Imagine having two classes: SUV, Estate  Both represent cars, have 4 wheels, 1 motor, same purpose, ...  Most of the code will be duplicated  Create a common class Car that holds the shared code  SUV and Estate can inherit the code  Shared code is only present in Carand not duplicated in SUV and Estate   Inheritance (so far) helps with:  Avoiding code duplication  Code reuse  Easier maintenance  Extendibility" }'

            if name == "subclasses and subtyping":
                message = '{ "response_utter": "utter_subclasses_and_subtyping", "location": "Subtyping -- slide 3", "response": "Classes define types.  Subclasses define subtypes.  Objects of subclasses can be used where objects of supertypes are required.(This is called substitution.)" }'

            if name == "casting":
                message = '{ "response_utter": "utter_casting", "location": "Subtyping -- slide 9", "response": "An object type in parentheses.  Used to overcome `type loss`.  When you turn a Carinto a Vehicle, the compiler forgets that it ever was a Car.  The object is not changed in any way.  A runtime check is made to ensure the object really is of that type:–ClassCastExceptionif it isnt!  Use it sparingly." }'

            if name == "polymorphic variables":
                message = '{ "response_utter": "utter_polymorphic_variables", "location": "Subtyping -- slide 7", "response": "Object variables in Java are polymorphic.  They can hold objects of more than one type  They can hold objects of the declared type, or of subtypesof the declared type." }'

            if name == "polymorphic collections":
                message = '{ "response_utter": "utter_polymorphic_collections", "location": "Subtyping -- slide 24 - 25", "response": "All collections are polymorphic.  The elements could simply be of type Object.  Usually avoided by using a type parameter with the collection.   A type parameter limits the degree of polymorphism: `ArrayList<Post>`  Collection methods are then typed.  Without a type parameter, ArrayList<Object>is implied.  Likely to get an “unchecked or unsafe operations” warning.  More likely to have to use casts.  Java 1.5 onwards uses Generics." }'

            if name == "polymorphism":
                message = '{ "response_utter": "utter_polymorphism_definition", "response": "polymorphism is the provision of a single interface to entities of different types or the use of a single symbol to represent multiple different types." }'    

        dispatcher.utter_message(text=message)

        return []