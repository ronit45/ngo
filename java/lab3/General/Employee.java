package General;
import java.util.Scanner;
import Marketing.Sales;

public class Employee {

    protected int empid;
    private String ename;
    private double basic;

    public Employee(int empid, String ename, double basic) {
        this.empid = empid;
        this.ename = ename;
        this.basic = basic;
    }
    
    public double earnings() {
        return basic + 0.8 * basic + 0.15 * basic;
    }

    public String getName() {
        return ename;
    }
}