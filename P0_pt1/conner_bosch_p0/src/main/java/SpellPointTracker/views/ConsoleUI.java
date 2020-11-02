package SpellPointTracker.views;

import java.io.BufferedReader;
import java.io.IOException;
import java.util.List;

import org.apache.log4j.Logger;

import SpellPointTracker.controllers.SpellPointsController;

public class ConsoleUI implements UserInterface {

    private SpellPointsController control;
    private BufferedReader console;

    private static Logger Log = Logger.getLogger("consoleUILog");

    public ConsoleUI(SpellPointsController controller, BufferedReader source) {
        super();
        this.control = controller;
        this.console = source;
    }


    /**
     * Starts the user interface and then asks for user to log in.
     */
    @Override
    public boolean startInterface() {
        // Starts user interface, prints welcome statment
        System.out.println("Welcome to the Spell Points Tracker");
        System.out.println("Would you like to Login? or Create an account?");

        //Handles user input
        String input = "";
        try {
            input = console.readLine();
        } catch (IOException e){
            System.out.println("IOException thrown:" + e);
        }

        switch (input) {
            case "Login":
            return this.promptLogin();

            case "Create":
            return this.promptUserCreate();

            case "End":
            this.endInterface();
            return false;

            default:
            System.out.println("Please type 'Login', 'Create', or 'End'");
            return false;
        }
    }

    /**
     * Ends the program closing all resources properly
     */
    @Override
    public void endInterface() {
        System.exit(0);
    }

    /**
     * Standard running step of the program. Prompts user to pick between
     * casting a spell, taking a rest, or ending the program.
     */
    @Override
    public boolean promptAction() {
        // Ask what the player would like to do?
        String status = control.getStatus();
        System.out.println(status);
        System.out.println("Would you like to 'Cast', 'Rest' or 'End'?");

        String input = "";
        try {
            input = console.readLine();
        } catch (IOException e){
            System.out.println("IOException thrown:" + e);
        }

        switch (input) {
            case "Cast":
            this.castSpell();
            return false;

            case "Rest":
            this.rest();
            return false;

            case "End":
            this.endInterface();
            return true;

            default:
            System.out.println("Please type 'Cast', 'Rest', or 'End'");
            return false;
        }
    }

    /**
     * Asks the user for name and password
     * @return success or not
     */
    public boolean promptLogin() {
        // Prompts user for name and password,
        System.out.println("Please enter a username and password...");
        System.out.println("Username: ");

        String username = "";
        try {
            username = console.readLine();
        } catch (IOException e){
            System.out.println("IOException thrown:" + e);
        }

        System.out.println("Password: ");
        String password = "";
        try {
            password = console.readLine();
        } catch (IOException e){
            System.out.println("IOException thrown:" + e);
        }
        if (!control.setCurrentPlayer(username, password)){
            System.out.println("Login error, please try again");
            return false;
        }
        else {
            return true;
        }
    }

    /**
     * Askes the user for name, password, level and casterType
     * @return success or not
     */
    public boolean promptUserCreate() {
        // Create prompts user for name, password, level and casterType
        System.out.println("Please enter a username, password, your current level, and Caster type...");
        System.out.println("Username: ");

        String username = "";
        try {
            username = console.readLine();
        } catch (IOException e){
            System.out.println("IOException thrown:" + e);
        }

        System.out.println("Password: ");
        String password = "";
        try {
            password = console.readLine();
        } catch (IOException e){
            System.out.println("IOException thrown:" + e);
        }

        System.out.println("Level: ");
        int level = 0;
        try {
            level = Integer.parseInt(console.readLine());
        } catch (IOException e){
            System.out.println("IOException thrown:" + e);
        } catch (NumberFormatException e){
            System.out.println("Level input needs to be a number");
            return false;
        }

        System.out.println("Caster Type: (0=Bard 1=Cleric 2=Druid 3=Paladin 4=Sorcerer 5=Warlock 6=Wizard)");
        int casterType = 0;
        try {
            casterType = Integer.parseInt(console.readLine());
        } catch (IOException e){
            System.out.println("IOException thrown:" + e);
        } catch (NumberFormatException e){
            System.out.println("Caster input needs to be a number");
            return false;
        }

        if (!control.createNewPlayer(username, password, level, casterType)){
            System.out.println("Error in creating account, please try again");
            return false;
        }
        else {
            return true;
        }
    }

    /**
     * 
     * @return
     */
    public boolean castSpell(){
        // Calls controller.getAvailableSpellNames and prints them

        System.out.println("The spells available to cast are: ");
        List<String> names = control.getAvailableSpellNames();
        int i = 0;
        for (String name : names){
            if (i < 10){
                System.out.print(name + ", ");
            }
            else {
                i = 0;
                System.out.println(name + ", ");
            }
        }

        System.out.println("Which spell would you like to cast?");
        String spell = "";
        try {
            spell = console.readLine();
        } catch (IOException e){
            System.out.println("IOException thrown:" + e);
        }

        if (names.contains(spell)){
            return control.castSpell(spell);
        }
        System.out.println("Please write the spell exactly as you read it");
        return false;
    }

    /**
     * 
     * @return
     */
    public boolean rest(){
        System.out.println("Resting...");
        control.rest();
        return true;
    }
}
