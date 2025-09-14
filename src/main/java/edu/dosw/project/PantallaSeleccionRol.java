
import javax.swing.*;
import java.awt.*;

public class PantallaSeleccionRol extends JFrame {
    
    private static class CustomButton extends JButton {
        public CustomButton(String text, Color bg, Color fg, Font font) {
            super(text);
            setBackground(bg);
            setForeground(fg);
            setFont(font);
            setFocusPainted(false);
            setBorder(BorderFactory.createEmptyBorder(10, 20, 10, 20));
            setCursor(new Cursor(Cursor.HAND_CURSOR));
        }
    }

    
    private static class LogoCircle extends JComponent {
        private final Image image;
        private final int diameter;
        public LogoCircle(ImageIcon icon, int diameter) {
            this.image = icon.getImage();
            this.diameter = diameter;
            setPreferredSize(new Dimension(diameter, diameter));
        }
        @Override
        protected void paintComponent(Graphics g) {
            Graphics2D g2 = (Graphics2D) g.create();
            g2.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
            g2.setClip(new java.awt.geom.Ellipse2D.Float(0, 0, diameter, diameter));
            g2.drawImage(image, 0, 0, diameter, diameter, this);
            g2.dispose();
        }
    }

    
    private static class CenteredCardLayout extends JPanel {
        public CenteredCardLayout(JPanel card) {
            setLayout(new GridBagLayout());
            setBackground(new Color(245,245,245));
            add(card, new GridBagConstraints());
        }
    }

    public PantallaSeleccionRol() {
        setTitle("SIRHA - Sistema de Reasignación de Horarios Académicos");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setExtendedState(JFrame.MAXIMIZED_BOTH);

        JPanel card = new JPanel();
        card.setLayout(new BoxLayout(card, BoxLayout.Y_AXIS));
        card.setBackground(Color.WHITE);
        card.setBorder(BorderFactory.createEmptyBorder(60, 120, 60, 120));
        card.setAlignmentX(Component.CENTER_ALIGNMENT);


    // Logo centrado
    ImageIcon logoIcon = new ImageIcon("SIRHA-sala3-DOSW-FrontEnd/src/images/Logo_Escuela.png");
    JPanel logoPanel = new JPanel(new FlowLayout(FlowLayout.CENTER, 0, 0));
    logoPanel.setOpaque(false);
    logoPanel.add(new LogoCircle(logoIcon, 110));
    card.add(logoPanel);
    card.add(Box.createRigidArea(new Dimension(0, 28)));

        JLabel nombreSistema = new JLabel("SIRHA - Sistema de Reasignación de Horarios Académicos", SwingConstants.CENTER);
        nombreSistema.setFont(new Font("Segoe UI", Font.BOLD, 32));
        nombreSistema.setAlignmentX(Component.CENTER_ALIGNMENT);
        card.add(nombreSistema);

        JLabel subtitulo = new JLabel("Selecciona tu rol para continuar", SwingConstants.CENTER);
        subtitulo.setFont(new Font("Segoe UI", Font.PLAIN, 16));
        subtitulo.setForeground(new Color(120,120,130));
        subtitulo.setAlignmentX(Component.CENTER_ALIGNMENT);
        card.add(subtitulo);
        card.add(Box.createRigidArea(new Dimension(0, 30)));


    CustomButton btnEstudiante = new CustomButton("  Ingresar como Estudiante", new Color(161,0,0), Color.WHITE, new Font("Segoe UI", Font.BOLD, 18));
    btnEstudiante.setAlignmentX(Component.CENTER_ALIGNMENT);
    card.add(btnEstudiante);
    card.add(Box.createRigidArea(new Dimension(0, 15)));

    CustomButton btnAdmin = new CustomButton("  Ingresar como Administrativo", Color.WHITE, Color.BLACK, new Font("Segoe UI", Font.BOLD, 18));
    btnAdmin.setAlignmentX(Component.CENTER_ALIGNMENT);
    card.add(btnAdmin);
    card.add(Box.createRigidArea(new Dimension(0, 20)));

        JButton btnSoporte = new JButton("Contacto de Soporte");
        btnSoporte.setFont(new Font("Segoe UI", Font.PLAIN, 16));
        btnSoporte.setForeground(new Color(120,120,130));
        btnSoporte.setBackground(Color.WHITE);
        btnSoporte.setBorderPainted(false);
        btnSoporte.setFocusPainted(false);
        btnSoporte.setAlignmentX(Component.CENTER_ALIGNMENT);
        btnSoporte.setCursor(new Cursor(Cursor.HAND_CURSOR));
        card.add(btnSoporte);

    setContentPane(new CenteredCardLayout(card));

        btnEstudiante.addActionListener(e -> {
            new LoginEstudiantes().setVisible(true);
            dispose();
        });
        btnAdmin.addActionListener(e -> {
            new LoginAdministrativos().setVisible(true);
            dispose();
        });
        btnSoporte.addActionListener(e -> {
            JOptionPane.showMessageDialog(null, "Contacta a serviciosti@escuelaing.edu.co");
        });
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new PantallaSeleccionRol().setVisible(true));
    }
}