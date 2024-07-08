public class Preference {
    
    private int length;
    private String time;
    
    public Preference() {}

    public Preference(String time, int length){
        this.time = time;
        this.length = length;
    }

    /* Getters & Setters */

    public int getLength() {
        return length;
    }

    public String getTime() {
        return time;
    }

    public void setLength(int length) {
        this.length = length;
    }

    public void setTime(String time) {
        this.time = time;
    }
}
